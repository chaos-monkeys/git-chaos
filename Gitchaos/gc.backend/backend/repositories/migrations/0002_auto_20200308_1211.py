# Generated by Django 3.0.3 on 2020-03-08 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('organisations', '0001_initial'),
        ('repositories', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='repository',
            name='organisation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='repositories', to='organisations.Organisation'),
        ),
        migrations.AlterUniqueTogether(
            name='repository',
            unique_together=set(),
        ),
    ]