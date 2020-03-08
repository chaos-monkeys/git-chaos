from django.db import models


class Repository(models.Model):
    name = models.CharField(max_length=128)
    organisation = models.ForeignKey('organisations.Organisation', on_delete=models.CASCADE)
    collaborators = models.ManyToManyField('collaborators.Collaborator', blank=True)

    def __str__(self) -> str:
        return self.get_unique_name

    @property
    def get_unique_name(self) -> str:
        return f'{self.organisation}/{self.name}'
