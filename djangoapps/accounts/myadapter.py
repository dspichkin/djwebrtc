import requests
import tempfile

from django.core import files
from django.contrib.auth import login

from allauth.socialaccount.adapter import DefaultSocialAccountAdapter

from accounts.models import Account

from django.contrib.auth.backends import ModelBackend


def get_avatar(sociallogin, account):
    vk_photo_big = sociallogin.account.extra_data.get('photo_big')
    fb_url = account.socialaccount_set.all()[0].get_avatar_url()

    if vk_photo_big:
        url = vk_photo_big
    elif fb_url:
        url = fb_url
    if url:
        r = requests.get(url, stream=True)
        if r.status_code == 200:
            # Create a temporary file
            lf = tempfile.NamedTemporaryFile()
            # Read the streamed image in sections
            for block in r.iter_content(1024 * 8):
                # If no more file then stop
                if not block:
                    break
                # Write image block to temporary file
                lf.write(block)

            account.avatar = files.File(lf)
            account.save()


class MyAdapter(DefaultSocialAccountAdapter):
    def pre_social_login(self, request, sociallogin):

        if 'email' not in sociallogin.account.extra_data:
            return
        account = None
        email = sociallogin.account.extra_data['email'].lower()
        account = Account.objects.filter(email__icontains=email).first()

        if sociallogin.is_existing:
            if account and not account.avatar:
                get_avatar(sociallogin, account)
            return

        if account:
            sociallogin.connect(request, account)
            login(request, account, backend=ModelBackend)

        # raise ImmediateHttpResponse(redirect('/news/'))

    def save_user(self, request, sociallogin, form=None):
        super(MyAdapter, self).save_user(request, sociallogin, form)
        if not sociallogin.user.avatar:
            get_avatar(sociallogin, sociallogin.user)



