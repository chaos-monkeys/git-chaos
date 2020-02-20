from django.db import models
from django.contrib.postgres.fields import JSONField


class Collaborator(models.Model):
    id = models.UUIDField(primary_key=True, editable=False)
    username = models.CharField(max_length=128, unique=True)
    name = models.CharField(max_length=128, blank=True)
    avatar = models.URLField(blank=True)
    html_url = models.URLField(blank=True)
    metadata = JSONField(default=dict)

    def __str__(self) -> str:
        return f'{self.username}'
