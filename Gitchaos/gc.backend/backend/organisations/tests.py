from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.status import HTTP_200_OK

from .models import Organisation


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
    factory = APIRequestFactory()

    def setUp(self):
        Organisation.objects.create(name=self.repo_owner)

    def test_organisation_saved_successfully(self):
        project = Organisation.objects.get()
        self.assertEqual(f'{project}', self.repo_owner)
