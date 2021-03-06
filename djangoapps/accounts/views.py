# -*- coding: utf-8 -*-
import re
# import json
import os

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes

from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.core.mail import EmailMessage
from django.conf import settings
from django.utils import timezone
from django.core.urlresolvers import reverse

from channels_presence.models import Presence
from dialogs.utils import IsConfirmAndIsAuthenticated
from accounts.serializers import AccountSerializer
from accounts.models import Account, ConfirmationCode
from dialogs.models import broadcast_to_room


def email_has_error(email):
    if email:
        if re.match('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$', email) is not None:
            return False
    return True


@api_view(['GET', 'POST'])
def registration(request):
    if request.user.is_authenticated():
        return HttpResponseRedirect("/dialogs/")

    reg_first_name = ""
    reg_level = ""
    reg_email = ""
    reg_skypeid = ""
    reg_sex = ""
    reg_birth_year = ""
    password = ""
    password1 = ""

    if request.method == 'POST':
        reg_first_name = request.POST.get('reg_first_name')[:30]
        reg_email = request.POST.get('reg_email')[:30]
        reg_level = request.POST.get('reg_level')[:30]
        reg_skypeid = request.POST.get('reg_skypeid')[:30]
        reg_sex = request.POST.get('reg_sex')[:1]
        reg_birth_year = request.POST.get('reg_birth_year')[:4]
        password = request.POST.get('reg_password')[:30]
        password1 = request.POST.get('reg_password1')[:30]

        email_error = None
        if reg_email:
            reg_email = reg_email.lower()
            email_error = email_has_error(reg_email)

        data = {
            "reg_first_name": reg_first_name,
            "reg_level": reg_level,
            "reg_email": reg_email,
            "reg_skypeid": reg_skypeid,
            "reg_sex": reg_sex,
            "reg_birth_year": reg_birth_year,
            "password": password,
            "password1": password1
        }

        if not reg_first_name or not reg_level or not password or password != password1 \
                or not reg_email or email_error or not reg_sex or not reg_birth_year:
            if not reg_first_name:
                data["reg_first_name_error"] = "Поле имени обязательно"
            if not reg_email:
                data["reg_email_error"] = "Поле Email обязательно"
            if email_error:
                data["reg_email_error"] = "Введите корректный email"
            if not reg_level:
                data["reg_level_error"] = "Поле уровня знания английского обязательно"
            if not reg_sex:
                data["reg_sex_error"] = "Поле выбора пола обязательно"
            if not reg_level:
                data["reg_birth_year_error"] = "Поле даты рождения обязательно"
            if not password:
                data["reg_password_error"] = "Поле пароль обязательно"
            if not password1:
                data["reg_password1_error"] = "Поле подтверждения пароля обязательно"
            if password != password1:
                data["reg_password1_error"] = "Подтверждение пароля не совпадает с паролем"

            return render(request, 'registration/registration.html', data)

        if Account.objects.filter(first_name__iexact=reg_first_name.lower()).exists():
            data["reg_first_name_error"] = u"Указанное имя уже используется. Выберите другое."
            return render(request, 'registration/registration.html', data)

        if Account.objects.filter(email__iexact=reg_email.lower()).exists():
            data["reg_email_error"] = u"Указанный email уже используется. Выберите другой."
            return render(request, 'registration/registration.html', data)

        if str(reg_sex) != '1' and str(reg_sex) != '2':
            data["reg_sex_error"] = u"Значение пола не верно."
            return render(request, 'registration/registration.html', data)

        try:
            reg_birth_year = int(reg_birth_year)
            if reg_birth_year < 1930 or reg_birth_year > timezone.now().year:
                data["reg_birth_year_error"] = u"Значение года рождения не верно."
                return render(request, 'registration/registration.html', data)
        except:
            data["reg_birth_year_error"] = u"Значение года рождения не верно."
            return render(request, 'registration/registration.html', data)

        username = reg_email
        if Account.objects.filter(username__iexact=reg_email.lower()).exists():
            username += '' + str(Account.objects.filter(username=reg_email).count() + 1)
        account = Account.objects.create(
            username=username,
            first_name=reg_first_name,
            email=reg_email,
            level=reg_level,
            sex=reg_sex,
            birth_year=reg_birth_year
        )
        account.set_password(password)
        if reg_skypeid:
            account.skypeid = reg_skypeid
        account.save()

        aconf = ConfirmationCode.objects.create(
            account=account)
        aconf.create()
        aconf.send()

        subject = u"Зарегистрировался новый пользователь."
        msg = u"Добрый день.\nНа сайте %s зарегистрировался новый пользователь.\n\n%s %s " % (
            request.build_absolute_uri().split("/")[2], account.email, account.fio())
        try:
            mail = EmailMessage(subject, msg, settings.DEFAULT_FROM_EMAIL, settings.ADMIN_LIST_EMAILS)
            mail.send()
        except Exception as e:
            print(e)
        return HttpResponseRedirect(reverse("verification_sent"))

    return render(
        request, 'registration/registration.html', {
            "reg_first_name": reg_first_name,
            "reg_level": reg_level,
            "reg_email": reg_email,
            "reg_skypeid": reg_skypeid,
            "reg_sex": reg_sex,
            "reg_birth_year": reg_birth_year,
            "password": password,
            "password1": password1
        })


def verification_sent(request):
    return render(
        request, 'account/verification_sent.html', {
        })


@api_view(['GET', 'POST'])
def confirm_email(request, key=None):

    email = ""
    error_message = ""
    success_message = ""

    if request.method == 'GET':
        if key:
            ccode = ConfirmationCode.objects.filter(key=key).first()
            if ccode:
                ccode.account.is_confirm = True
                ccode.account.save()
                request.user.is_confirm = True
                success_message = u"Ваш аккаунт успешно подтвержден"
            else:
                error_message = u"Указан неверный код подтверждения"

    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            ccode = ConfirmationCode.objects.filter(account__email__iexact=email.lower()).first()
            if not ccode:
                error_message = u"Указанный email не найден"
            if not key:
                ccode.send()
                success_message = u"Ссылка отправлена на указанный почтовый адрес "

    return render(
        request, 'registration/confirm_email.html', {
            "email": email,
            "error_message": error_message,
            "success_message": success_message
        })


@api_view(['GET', 'POST'])
def remember(request, key=None):
    email = ""
    error_message = ""
    success_message = ""
    success = False

    if request.method == 'GET':
        if key:
            ccode = ConfirmationCode.objects.filter(key=key).first()
            if not ccode:
                error_message = u"Указан неверный код смены пароля"
        return render(
            request, 'registration/remember.html', {
                "key": key,
                "email": email,
                "error_message": error_message,
                "success_message": success_message
            })

    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        password1 = request.POST.get('password1')
        key = request.POST.get('key')
        if not key:
            if not email:
                return render(
                    request, 'registration/remember.html', {
                        "email_error": u"Поле email обязательно",
                        "email": email,
                    })

            account = Account.objects.filter(email__iexact=email.lower()).first()
            if not account:
                return render(
                    request, 'registration/remember.html', {
                        "email_error": u"Введенный email не найден",
                        "email": email,
                    })

            ccode, created = ConfirmationCode.objects.get_or_create(account=account)
            if not ccode.key:
                ccode.create()
            ccode.send_remember()

            return render(
                request, 'registration/remember.html', {
                    "success_message": u"Ссылка отправлена на указанный почтовый адрес ",
                    "email": email,
                })

        if key:
            ccode = ConfirmationCode.objects.filter(key=key).first()
            if not ccode:
                return render(
                    request, 'registration/remember.html', {
                        "key": key,
                        "email": email,
                        "error_message": u"Указан неверный код смены пароля"
                    })

            if password and password1:
                if password != password1:
                    return render(
                        request, 'registration/remember.html', {
                            "error_message": u"Пароль и подтверждение не совпадает",
                            "email": email,
                            "password": password,
                            "password1": password1,
                            "key": key
                        })
                else:
                    ccode.account.set_password(password)
                    ccode.account.save()
                    success = True
                    return render(
                        request, 'registration/remember.html', {
                            "success_message": u"Пароль успешно изменен",
                            "success":  success,
                            "email": email,
                            "password": password,
                            "password1": password1,
                            "key": key
                        })
            else:
                return render(
                    request, 'registration/remember.html', {
                        "error_message": u"Требуется пароль и подтверждение",
                        "email": email,
                        "password": password,
                        "password1": password1,
                        "key": key
                    })

    return render(
        request, 'registration/remember.html', {
            "email": email,
        })


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def accept_call(request):
    data = request.data
    accept_call = data.get('accept_call')
    if accept_call is False or accept_call is True:
        request.user.is_accept_call = accept_call
        request.user.save()
        broadcast_to_room({
            "command": "UPDATE",
            "target": "activedialogs"
        })

    return Response(AccountSerializer(request.user).data, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
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


@api_view(['POST'])
def lendingmessage(request):
    data = request.data
    dsubject = data.get("subject")
    message = data.get("message")
    email = data.get("email")
    name = data.get("name")
    if dsubject and message and email and name:
        msg = u"Сообщение с лендинга www.mydialogs.ru пользователь:%s \nsubject: %s\nmessage:%s" % (email, dsubject, message)
    try:
        subject = u"Сообщение с лендинга www.mydialogs.ru"
        mail = EmailMessage(subject, msg, settings.DEFAULT_FROM_EMAIL, settings.ADMIN_LIST_EMAILS)
        mail.send()
    except Exception as e:
        print(e)
    return Response(status.HTTP_200_OK)
    # return render(request, 'landing.html')


@api_view(['GET'])
def check_user(request):
    if request.user.is_authenticated():
        if Presence.objects.filter(user=request.user).exists():
            return Response({
                "status": True
                }, status.HTTP_200_OK)
    return Response({
        "status": False
        }, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def user(request):
    if request.method == 'POST':
        # data = json.loads(request.body.decode("utf-8"))
        data = request.data
        first_name = data.get("first_name")
        selectedLevel = data.get("selectedLevel")
        skypeid = data.get("skypeid")
        password = data.get("password")
        sex = data.get("sex")
        birth_year = data.get("birth_year")

        is_dirty = False
        if first_name and request.user.first_name != first_name:
            if Account.objects.filter(first_name__iexact=first_name.lower()).exists():
                return Response({
                    "status": False,
                    "first_name_error": u"Указанное имя уже используется. Выберите другое."
                }, status.HTTP_200_OK)
            request.user.first_name = first_name
            is_dirty = True
        if selectedLevel and request.user.level != int(selectedLevel):
            request.user.level = selectedLevel
            is_dirty = True
        if skypeid is not None and request.user.skypeid != skypeid:
            request.user.skypeid = skypeid
            is_dirty = True
        if sex is not None and request.user.sex != sex:
            if str(sex) == '1' or str(sex) == '2':
                request.user.sex = sex
                is_dirty = True
        if birth_year is not None and request.user.birth_year != birth_year:
            try:
                birth_year = int(birth_year)
                if birth_year > 1930 and birth_year < timezone.now().year:
                    request.user.birth_year = birth_year
                    is_dirty = True
            except Exception as e:
                print e
        if password is not None:
            request.user.set_password(password)
            is_dirty = True
        if is_dirty is True:
            request.user.save()
    return Response({
        "status": True
        }, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsConfirmAndIsAuthenticated,))
def user_avatar(request):

    if request.method == 'POST':
        file_upload = request.FILES.get('file')

        if file_upload and file_upload._size > 30 * 1024 * 1024:
            return Response({"error": "Загружаемый файл не может быть более 30М."}, status=status.HTTP_400_BAD_REQUEST)

        if request.user.avatar:
            os.remove(request.user.avatar.path)

        if file_upload:
            request.user.avatar = file_upload
            request.user.save()

        return Response({"status": True}, status.HTTP_200_OK)

    return Response(status.HTTP_200_OK)


