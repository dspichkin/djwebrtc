# -*- coding: utf-8 -*-

from django.conf import settings
from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from accounts.serializers import AccountSerializer

from dialogs.models import (
    Dialog, ActiveDialog, DIALOG_STOP, DIALOG_WAIT,
    DIALOG_CANCEL)
from dialogs.serializers import (DialogSerializer, ActiveDialogSerializer)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_dialogs(request):

    queryset = Dialog.objects.all()
    serializer = DialogSerializer(queryset, many=True)

    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_activedialogs(request):

    queryset = ActiveDialog.objects.filter(status=DIALOG_WAIT)
    serializer = ActiveDialogSerializer(queryset, many=True)

    return Response(serializer.data, status.HTTP_200_OK)


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

    ActiveDialog.objects.filter(master=request.user, status=DIALOG_WAIT).update(status=DIALOG_CANCEL)
    ad = ActiveDialog.objects.create(
        dialog=dialog,
        master=request.user)
    serializer = ActiveDialogSerializer(ad)

    return Response({
        "status": True,
        "activedialog": serializer.data
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




