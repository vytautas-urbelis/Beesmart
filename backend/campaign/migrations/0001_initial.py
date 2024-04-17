# Generated by Django 5.0.3 on 2024-04-16 16:49

import campaign.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('value_goal', models.FloatField()),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('beginning_date', models.DateField(default=campaign.models.get_tomorrow)),
                ('ending_date', models.DateField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, upload_to=campaign.models.campaign_directory_path, verbose_name='image')),
                ('logo', models.ImageField(blank=True, upload_to=campaign.models.campaign_directory_path, verbose_name='logo')),
            ],
        ),
        migrations.CreateModel(
            name='CampaignStyle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('style_name', models.CharField(max_length=100)),
            ],
        ),
    ]
