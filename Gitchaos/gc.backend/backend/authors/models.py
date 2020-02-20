from django.db import models


class Author(models.Model):

    


    repo_owner = models.CharField(max_length=128)
    repo_name = models.CharField(max_length=128)

    class Meta:
        unique_together = ('repo_owner', 'repo_name')

    @property
    def get_name(self):
        return f'{self.repo_owner}/{self.repo_name}'
