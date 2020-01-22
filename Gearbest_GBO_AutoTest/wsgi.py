"""
WSGI config for Gearbest_GBO_AutoTest project.

It exposes the WSGI callable as a 选品工具-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Gearbest_GBO_AutoTest.settings')

application = get_wsgi_application()
