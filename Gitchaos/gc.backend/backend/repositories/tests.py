from django.test import TestCase
from rest_framework.test import APIRequestFactory

from organisations.models import Organisation
from .models import Repository

payloadJSON = {
    "meta": {
        "repo_name": "git-chaos",
        "repo_owner": "chaos-monkeys",
        "start_time": 1580769289,
        "commit_sha": "06b8930d1f4fa7c5f6a7ce3973f1a499ae99b565"
    },
}


class RepositoryTestCase(TestCase):
    repo_owner = payloadJSON["meta"]["repo_owner"]
    repo_name = payloadJSON["meta"]["repo_name"]

    def setUp(self):
        Organisation.objects.create(name=self.repo_owner)
        project_pk = Organisation.objects.get()
        Repository.objects.create(name=self.repo_name, organisation=project_pk)

    def test_repository_saved_successfully(self):
        repository = Repository.objects.get()
        self.assertEqual(f'{repository}', f'{self.repo_owner}/{self.repo_name}')


