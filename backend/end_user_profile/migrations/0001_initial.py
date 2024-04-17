# Generated by Django 5.0.3 on 2024-04-16 16:49

import django.db.models.deletion
import end_user_profile.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EndUserProfile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='end_user_profile', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('code', models.CharField(default=end_user_profile.models.code_generator, max_length=15, unique=True)),
                ('secret_key', models.CharField(default=end_user_profile.models.code_generator, max_length=15, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=80, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=80, verbose_name='last name')),
                ('city', models.CharField(blank=True, max_length=60, verbose_name='city')),
                ('street', models.CharField(blank=True, max_length=100, verbose_name='street')),
                ('zip', models.CharField(blank=True, max_length=10, verbose_name='zip')),
                ('avatar', models.ImageField(blank=True, upload_to=end_user_profile.models.avatar_directory_path, verbose_name='avatar')),
            ],
        ),
    ]
