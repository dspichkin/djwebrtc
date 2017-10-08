# -*- coding: utf-8 -*-

from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from django.core.mail import EmailMessage
from django.conf import settings

from accounts.serializers import AccountSerializer


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def accept_call(request):
    data = request.data
    accept_call = data.get('accept_call')
    if accept_call is False or accept_call is True:
        request.user.is_accept_call = accept_call
        request.user.save()

    return Response(AccountSerializer(request.user).data, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def message(request):
    data = request.data
    message = data.get('message')
    email = data.get('email')
    name = data.get('name')
    subject = u"Сообщение с сайта диалогов"
    msg = u"Сообщение %s\n пользователь:%s \nemai: %s\nname:%s" % (message, request.user, email, name)
    try:
        mail = EmailMessage(subject, msg, settings.DEFAULT_FROM_EMAIL, settings.ADMIN_LIST_EMAILS)
        mail.send()
    except Exception as e:
        print(e)

    return Response(status.HTTP_200_OK)


@api_view(['GET'])
def check_user(request):
    if request.user.is_authenticated():
        return Response({
            "status": True
            }, status.HTTP_200_OK)
    return Response({
        "status": False
        }, status.HTTP_200_OK)




