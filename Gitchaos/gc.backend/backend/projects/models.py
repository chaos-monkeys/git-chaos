from django.db import models


class Project(models.Model):
    repo_owner = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.repo_owner


class Repository(models.Model):
    repo_name = models.CharField(max_length=128)
    repo_owner = models.ForeignKey('projects.Project', on_delete=models.CASCADE)
    collaborators = models.ManyToManyField('collaborators.Collaborator')

    class Meta:
        unique_together = ('repo_owner', 'repo_name')

    def __str__(self) -> str:
        return self.get_name

    @property
    def get_name(self) -> str:
        return f'{self.repo_owner}/{self.repo_name}'
