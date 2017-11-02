# -*- coding: utf-8 -*-
import os

from django.conf import settings
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.urlresolvers import reverse
from django.db.models import Q

from rest_framework.response import Response
from rest_framework import status
# from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from channels_presence.models import Presence

from accounts.models import Account
from accounts.serializers import AccountSerializer
# from dialogs.signals import activedialog_changed
from dialogs.models import (
    Dialog, ActiveDialog, DIALOG_STOP, DIALOG_WAIT, Tag)
from dialogs.serializers import (
    DialogSerializer, ActiveDialogSerializer, ActiveDialogShortSerializer,
    TagSerializer)
from dialogs.utils import IsConfirmAndIsAuthenticated


@api_view(['GET'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def get_dialog(request, dialog_pk):
    queryset = get_object_or_404(Dialog, pk=dialog_pk, is_published=True)
    serializer = DialogSerializer(queryset)

    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def get_dialogs(request):
    request.user.check_activity()

    paginate_by = 15
    page = request.GET.get('page', 1)
    search = request.GET.get('search')
    level = request.GET.get('level')
    inputed = request.GET.get('inputed')

    queryset = Dialog.objects.filter(is_published=True)

    if inputed:
        arraylist = []
        for dialog in queryset:
            activedialog = ActiveDialog.objects.filter(master=request.user, dialog=dialog, status=DIALOG_WAIT)
            if activedialog:
                arraylist.append(dialog)
        queryset = arraylist
    else:
        if search:
            queryset = queryset.filter(Q(tags__name__icontains=search) | Q(name__icontains=search)).distinct()
        if level:
            try:
                if int(level) > 0:
                    queryset = queryset.filter(level=level)
            except:
                pass

    paginator = Paginator(queryset, paginate_by)
    try:
        rdata = paginator.page(page)
    except PageNotAnInteger:
        rdata = paginator.page(1)
    except EmptyPage:
        rdata = paginator.page(1)
    count = paginator.count
    previouspage = None if not rdata.has_previous() else rdata.previous_page_number()
    nextpage = None if not rdata.has_next() else rdata.next_page_number()

    dialogs = []
    for dialog in rdata:
        data = DialogSerializer(dialog).data
        activedialog = ActiveDialog.objects.filter(master=request.user, dialog=dialog, status=DIALOG_WAIT)
        if activedialog:
            data["checked"] = True
        dialogs.append(data)
    result = {
        'count': count,
        'dialogs': dialogs
    }
    if previouspage:
        result['previous_url'] = reverse('get_dialogs') + '?page=%s' % previouspage
        result['previous'] = previouspage
    if nextpage:
        result['next'] = nextpage
        result['next_url'] = reverse('get_dialogs') + '?page=%s' % nextpage

    return Response(result, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def get_activedialogs(request):
    request.user.check_activity()

    users = []
    for presence in Presence.objects.all():
        for user in Account.objects.filter(pk=presence.user.pk, is_accept_call=True, last_dialog_active=False).exclude(pk=request.user.pk):
            activedialogs = []
            for activedialig in ActiveDialog.objects.filter(
                    status=DIALOG_WAIT, master=user, dialog__is_published=True):
                if Presence.objects.filter(user=activedialig.master).exists():
                    activedialogs.append(
                        ActiveDialogShortSerializer(activedialig).data
                    )
            users.append({
                "user": {
                    "fio": user.fio(),
                    "skypeid": user.skypeid,
                    "avatar": user.get_avatar_url(),
                    "key_id": user.key_id,
                    "level_display": user.get_level_display(),
                    "age": user.get_age(),
                    "sex": user.get_sex_display()
                },
                "show_activedialogs": False,
                "activedialogs": activedialogs
            })
    """
    activedialogs = []
    for activedialig in ActiveDialog.objects.filter(
        status=DIALOG_WAIT,
        master__is_accept_call=True,
        master__last_dialog_active=False,
            ).exclude(master=request.user):
        if Presence.objects.filter(user=activedialig.master).exists():
            activedialogs.append(ActiveDialogSerializer(activedialig).data)
    """

    return Response(users, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def get_myactivedialogs(request):

    activedialogs = []
    for activedialig in ActiveDialog.objects.filter(status=DIALOG_WAIT, master=request.user):
        activedialogs.append(ActiveDialogSerializer(activedialig).data)

    return Response(activedialogs, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def get_activedialog(request, activedialog_pk):

    queryset = get_object_or_404(ActiveDialog, pk=activedialog_pk)
    serializer = ActiveDialogSerializer(queryset)

    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def run_dialog(request, dialog_pk):

    dialog = get_object_or_404(Dialog, pk=dialog_pk)
    created = False
    activedialog = ActiveDialog.objects.filter(
        dialog=dialog,
        master=request.user)

    if len(activedialog) > 1:
        ActiveDialog.objects.filter(master=request.user, status=DIALOG_WAIT).delete()
        activedialog = None
    elif len(activedialog) == 1:
        activedialog = activedialog.first()

    if not activedialog:
        activedialog = ActiveDialog.objects.create(
            dialog=dialog,
            master=request.user,
            status=DIALOG_WAIT)
        created = True

    if created is False:
        if activedialog.status != DIALOG_WAIT:
            activedialog.status = DIALOG_WAIT
            activedialog.save()
        else:
            activedialog.status = DIALOG_STOP
            activedialog.save()

    data = DialogSerializer(dialog).data

    if activedialog.status == DIALOG_WAIT:
        data["checked"] = True

    activedialog.broadcast_changed(update=True)

    return Response({
        "status": True,
        "dialog": data
        }, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def stop_dialog(request):
    ActiveDialog.objects.filter(master=request.user).delete()

    return Response({
        "status": True,
        }, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def stop_activedialog(request, activedialog_pk):
    ad = get_object_or_404(ActiveDialog, pk=activedialog_pk)
    ad.status = DIALOG_STOP
    ad.save()

    return Response({
        "status": True,
        }, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def user_status(request):
    ad = ActiveDialog.objects.filter(master=request.user, status=DIALOG_WAIT).first()
    if ad:
        serializer = ActiveDialogSerializer(ad)
        return Response({
            "status": True,
            "user": AccountSerializer(request.user).data,
            "activedialog": serializer.data
            }, status.HTTP_200_OK)
    return Response({
        "status": True,
        "user": AccountSerializer(request.user).data,
    }, status.HTTP_200_OK)


@api_view(['GET', 'POST', 'DELETE'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def mydialog(request, dialog_pk):

    mydialog = get_object_or_404(Dialog, pk=dialog_pk, owner=request.user)

    if request.method == 'GET':
        serializer = DialogSerializer(mydialog)
        return Response(serializer.data, status.HTTP_200_OK)

    if request.method == 'POST':
        data = request.data
        is_published = data.get('is_published')
        steps = data.get('steps')
        personages = data.get('personages')
        dialog_name = data.get('dialog_name')
        description = data.get('description')
        level = data.get('level')

        is_dirty = False

        if dialog_name is not None:
            if mydialog.name != dialog_name:
                mydialog.name = dialog_name
                is_dirty = True
        if description is not None:
            if mydialog.description != description:
                mydialog.description = description
                is_dirty = True
        if level is not None:
            if mydialog.level != level:
                mydialog.level = level
                is_dirty = True
        if is_published is not None:
            if mydialog.is_published != is_published:
                mydialog.is_published = is_published
                is_dirty = True
        if steps is not None:
            mydialog.scenario['steps'] = steps
            is_dirty = True
        if personages is not None:
            mydialog.scenario['personages'] = personages
            is_dirty = True

        if is_dirty:
            mydialog.save()

        serializer = DialogSerializer(mydialog)
        return Response(serializer.data, status.HTTP_200_OK)

    if request.method == 'DELETE':
        mydialog.delete()

    return Response(status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def mydialogs(request):
    request.user.check_activity()

    if request.method == 'GET':
        queryset = Dialog.objects.filter(owner=request.user)
        dialogs = []
        for dialog in queryset:
            data = DialogSerializer(dialog).data
            activedialog = ActiveDialog.objects.filter(master=request.user, dialog=dialog, status=DIALOG_WAIT)
            if activedialog:
                data["checked"] = True
            dialogs.append(data)
        return Response(dialogs, status.HTTP_200_OK)

    if request.method == 'POST':
        data = request.data
        dialog_name = data.get('dialog_name')
        if dialog_name:
            dialog = Dialog.objects.create(owner=request.user, name=dialog_name, scenario={
                "personages": [{
                    "role": "master",
                    "name": "Person A"
                }, {
                    "role": "pupil",
                    "name": "Person B"
                }],
                "steps": [{
                    "id": 1,
                    "start_personage": "master",
                    "master": {
                        "variants": [{
                            "id": "m1.1",
                            "phrase": "",
                            "task": "",
                            "prev_step": -1,
                            "next_step": -1
                        }],
                        "number": 1
                    },
                    "pupil": {
                        "variants": [{
                            "id": "p1.1",
                            "phrase": "",
                            "task": "",
                            "prev_step": -1,
                            "next_step": -1
                        }],
                        "number": 1
                    }
                }]
            }, level=10)
            data = DialogSerializer(dialog).data
            data["checked"] = False
        return Response(data, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def mydialog_bg_image(request, dialog_pk):

    mydialog = get_object_or_404(Dialog, pk=dialog_pk, owner=request.user)

    if request.method == 'POST':
        file_upload = request.FILES.get('file')

        if file_upload and file_upload._size > 30 * 1024 * 1024:
            return Response({"error": "Загружаемый файл не может быть более 30М."}, status=status.HTTP_400_BAD_REQUEST)

        if mydialog.background_image:
            os.remove(mydialog.background_image.path)

        if file_upload:
            mydialog.background_image = file_upload

        mydialog.save()

        return Response(DialogSerializer(mydialog).data, status.HTTP_200_OK)

    return Response(status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def tags(request):
    types = request.GET.get('tags')
    tags = []
    if types:
        tags = Tag.objects.filter(name__icontains=types.lower())
    else:
        tags = Tag.objects.all()[:10]

    return Response([tag.name for tag in tags], status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def delete_dialog_tag(request, dialog_pk, tag_pk):
    if request.method == 'DELETE':
        dialog = get_object_or_404(Dialog, pk=dialog_pk)
        tag = get_object_or_404(Tag, pk=tag_pk)
        dtag = dialog.tags.through.objects.filter(dialog=dialog, tag=tag).first()
        if dtag:
            dtag.delete()
            count = Dialog.objects.filter(tags__name=tag.name).count()
            if count == 0:
                tag.delete()
    return Response(status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def dialog_tag(request, dialog_pk):
    if request.method == 'POST':
        data = request.data
        tag_name = data.get('tag_name')
        if tag_name:
            dialog = get_object_or_404(Dialog, pk=dialog_pk)
            if not dialog.tags.through.objects.filter(dialog=dialog, tag__name=tag_name.lower()).exists():
                tag, create = Tag.objects.get_or_create(name=tag_name.lower())
                dialog.tags.add(tag)
                dialog.save()
    return Response(status.HTTP_200_OK)


