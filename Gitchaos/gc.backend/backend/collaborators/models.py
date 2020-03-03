from typing import Dict
from django.db import models
from psqlextra.manager import PostgresManager
from django.contrib.postgres.fields import JSONField


class MetadataOptions(Dict):
    location: str
    company: str


class Collaborator(models.Model):
    id = models.PositiveIntegerField(primary_key=True, editable=False)
    username = models.CharField(max_length=128, unique=True)
    name = models.CharField(max_length=128, blank=True, null=True)
    avatar = models.URLField(blank=True, null=True)
    html_url = models.URLField(blank=True, null=True)
    metadata = JSONField(default=MetadataOptions, blank=True)

    objects = PostgresManager()

    def __str__(self) -> str:
        return f'{self.username}'
