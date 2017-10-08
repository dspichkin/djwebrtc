# -*- coding: utf-8 -*-
import re
from datetime import datetime, timedelta

from django import forms
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from django.contrib.admin.widgets import FilteredSelectMultiple

from accounts.models import Account


class AccountForm(forms.ModelForm):

    class Meta:
        model = Account
        exclude = ('id',)

    def clean_email(self):
        email = self.cleaned_data.get('email')
        username = self.cleaned_data.get('username')
        if email and Account.objects.filter(email=email).exclude(username=username).count():
            raise forms.ValidationError(u'Данный Email уже зарегистрирован. Введите другой Email.')
        return email


class UserCreationForm(forms.ModelForm):
    first_name = forms.CharField(label=u'Имя')
    email = forms.CharField(label=u'Почта')
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = Account
        fields = (
            'username', 'email', 'first_name', 'email')

    def clean_username(self):
        """
        Validates the username. You can hook into this if you want to
        (dynamically) restrict what usernames can be chosen.
        """
        error_messages = {
            'invalid_username':
                u'Имя пользователя должно состоять из английских букв, цифр и @/./+/-/_.',
            'username_blacklisted':
                'Username can not be used. Please use other username.',
            'username_taken':
                AbstractUser._meta.get_field('username').error_messages['unique'],
            'too_many_login_attempts':
                'Too many failed login attempts. Try again later.'
        }

        username_regex = re.compile(r'^[\w.@+-]+$')

        username = self.cleaned_data['username']
        if not username_regex.match(username):
            raise forms.ValidationError(
                error_messages['invalid_username'])

        username_blacklist_lower = None
        if hasattr(settings, 'USERNAME_BLACKLIST'):
            username_blacklist_lower = [ub.lower()
                                        for ub in settings.USERNAME_BLACKLIST]

        if username_blacklist_lower and username.lower() in username_blacklist_lower:
            raise forms.ValidationError(
                error_messages['username_blacklisted'])

        # Skipping database lookups when shallow is True, needed for unique
        # username generation.
        username_field = 'username'
        assert username_field
        user_model = get_user_model()
        try:
            query = {username_field + '__iexact': username}
            user_model.objects.get(**query)
        except user_model.DoesNotExist:
            return username
        error_message = user_model._meta.get_field(
            username_field).error_messages.get('unique')
        if not error_message:
            error_message = error_messages['username_taken']
        raise forms.ValidationError(error_message)
        return username

    def clean_email(self):
        email = self.cleaned_data.get('email')
        username = self.cleaned_data.get('username')
        if email and Account.objects.filter(email=email).exclude(username=username).count():
            raise forms.ValidationError(u'Данный Email уже зарегистрирован. Введите другой Email.')
        return email

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def clean_phone1(self):
        phone1 = self.cleaned_data.get("phone1")
        username = self.cleaned_data.get('username')
        if Account.objects.filter(phone1=phone1).exclude(username=username).count():
            raise forms.ValidationError(u'Данный телефон уже зарегистрирован. Введите другой телефон.')
        return phone1

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class DiscounterSignupFrom(forms.ModelForm):
    first_name = forms.CharField(max_length=30, label='Имя')
    last_name = forms.CharField(max_length=30, label='Фамилия', required=False)
    # birthday = forms.DateField(widget=forms.SelectDateWidget(years=range(
    #    1950, (datetime.now() - timedelta(days=17 * 365.24)).year), attrs={'class': 'form-control'}), label='Дата рождения')
    # is_agree = forms.BooleanField(required=True)
    # code = forms.CharField(max_length=30, label='Code')

    class Meta:
        model = get_user_model()
        fields = ['first_name', ]  # , 'is_agree'
    """
    def clean_is_agree(self):
        is_agree = self.cleaned_data.get("is_agree")
        if not is_agree:
            raise forms.ValidationError("Требуется ваше согласие с офертой")
        return is_agree

    def clean_birthday(self):
        birthday = self.cleaned_data.get('birthday')
        if birthday >= (datetime.now() - timedelta(days=18 * 365.24)).date():
            raise forms.ValidationError("Вы должны быть страше 18 лет")
        return birthday
    """
    def signup(self, request, user):
        user.first_name = self.cleaned_data['first_name']
        # user.last_name = self.cleaned_data['last_name']
        # user.middle_name = self.cleaned_data['middle_name']
        # user.birthday = self.cleaned_data['birthday']
        # user.sex = self.cleaned_data['sex']
        # user.is_agree = self.cleaned_data['is_agree']

        user.save()

