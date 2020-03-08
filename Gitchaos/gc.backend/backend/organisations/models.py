from django.db import models


class Organisation(models.Model):
    name = models.CharField(max_length=128, unique=True)

    def __str__(self) -> str:
        return f'{self.name}'
