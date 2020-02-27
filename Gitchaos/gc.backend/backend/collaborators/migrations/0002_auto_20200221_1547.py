# Generated by Django 3.0.3 on 2020-02-21 15:47

import collaborators.models
import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('collaborators', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collaborator',
            name='metadata',
            field=django.contrib.postgres.fields.jsonb.JSONField(default=collaborators.models.MetadataOptions),
        ),
    ]
