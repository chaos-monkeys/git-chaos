from django.test import TestCase
from .models import Project, Repository

payloadJSON = {
    "meta": {
        "repo_name": "git-chaos",
        "repo_owner": "chaos-monkeys",
        "start_time": 1580769289,
        "commit_sha": "06b8930d1f4fa7c5f6a7ce3973f1a499ae99b565"
    },
    "collaborators": {
        "3811773": {
            "username": "pxlprfct",
            "name": "Ollie Williams",
            "avatar_url": "https://avatars1.githubusercontent.com/u/3811773?v=4",
            "html_url": "https://github.com/pxlprfct",
            "company": "IBM",
            "blog": "ollie.work",
            "location": "London, UK"
        },
        "5066994": {
            "username": "robalaban",
            "name": "Robert Balaban",
            "avatar_url": "https://avatars3.githubusercontent.com/u/5066994?v=4",
            "html_url": "https://github.com/robalaban",
            "company": "IBM ",
            "blog": "https://robertbalaban.com",
            "location": "London, United Kingdom"
        },
        "55034205": {
            "username": "admin-chaosmonkeys",
            "name": "null",
            "avatar_url": "https://avatars0.githubusercontent.com/u/55034205?v=4",
            "html_url": "https://github.com/admin-chaosmonkeys",
            "company": "null",
            "blog": "",
            "location": "null"
        }
    },
}


class ProjectTestCase(TestCase):
    repo_owner = payloadJSON["meta"]["repo_owner"]

    def setUp(self):
        Project.objects.create(repo_owner=self.repo_owner)

    def test_project_saved_successfully(self):
        project = Project.objects.get()
        self.assertEqual(f'{project}', self.repo_owner)



class RepositoryTestCase(TestCase):
    repo_owner = payloadJSON["meta"]["repo_owner"]
    repo_name = payloadJSON["meta"]["repo_name"]
    collaborators = payloadJSON["collaborators"]

    def setUp(self):
        Project.objects.create(repo_owner=self.repo_owner)
        project_pk = Project.objects.get()
        Repository.objects.create(repo_name=self.repo_name, repo_owner=project_pk)

    def test_repository_saved_successfully(self):
        repository = Repository.objects.get()
        self.assertEqual(f'{repository}', f'{self.repo_owner}/{self.repo_name}')

