# -*- coding: utf-8 -*-

from django.conf import settings
from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from channels_presence.models import Room, Presence

from accounts.serializers import AccountSerializer
# from dialogs.signals import activedialog_changed
from dialogs.models import (
    Dialog, ActiveDialog, DIALOG_STOP, DIALOG_WAIT,
    DIALOG_CANCEL, DIALOG_ACTIVE)
from dialogs.serializers import (DialogSerializer, ActiveDialogSerializer)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_dialog(request, dialog_pk):
    queryset = get_object_or_404(Dialog, pk=dialog_pk)
    serializer = DialogSerializer(queryset)

    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_dialogs(request):

    queryset = Dialog.objects.all()
    dialogs = []
    for dialog in queryset:
        data = DialogSerializer(dialog).data
        activedialog = ActiveDialog.objects.filter(master=request.user, dialog=dialog, status=DIALOG_WAIT)
        if activedialog:
            data["checked"] = True
        dialogs.append(data)
    return Response(dialogs, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_activedialogs(request):

    activedialogs = []
    for activedialig in ActiveDialog.objects.filter(status=DIALOG_WAIT).exclude(master=request.user):
        if Presence.objects.filter(user=activedialig.master).exists():
            activedialogs.append(ActiveDialogSerializer(activedialig).data)

    return Response(activedialogs, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_myactivedialogs(request):

    activedialogs = []
    for activedialig in ActiveDialog.objects.filter(status=DIALOG_WAIT, master=request.user):
        # if Presence.objects.filter(user=activedialig.master).exists():
        activedialogs.append(ActiveDialogSerializer(activedialig).data)

    return Response(activedialogs, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_activedialog(request, activedialog_pk):

    queryset = get_object_or_404(ActiveDialog, pk=activedialog_pk)
    serializer = ActiveDialogSerializer(queryset)

    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def run_dialog(request, dialog_pk):

    dialog = get_object_or_404(Dialog, pk=dialog_pk)
    created = False
    # ActiveDialog.objects.filter(master=request.user, status=DIALOG_WAIT).update(status=DIALOG_CANCEL)
    # ActiveDialog.objects.filter(master=request.user, status=DIALOG_ACTIVE).update(status=DIALOG_CANCEL)
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
@permission_classes((IsAuthenticated,))
def stop_dialog(request):
    ActiveDialog.objects.filter(master=request.user).delete()

    return Response({
        "status": True,
        }, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def stop_activedialog(request, activedialog_pk):
    ad = get_object_or_404(ActiveDialog, pk=activedialog_pk)
    ad.status = DIALOG_STOP
    ad.save()

    return Response({
        "status": True,
        }, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
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




