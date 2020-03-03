from django.test import TestCase

from .models import Collaborator
from .serializers import CollaboratorSerializer
from .parsers import parse_collaborator

COLLABORATORS = {
    "5066994": {
        "username": "robalaban",
        "name": "Robert Balaban",
        "avatar_url": "https://avatars3.githubusercontent.com/u/5066994?v=4",
        "html_url": "https://github.com/robalaban",
        "company": "IBM ",
        "blog": "https://robertbalaban.com",
        "location": "London, United Kingdom"
    },
    "3811773": {
        "username": "pxlprfct",
        "name": "Ollie Williams",
        "avatar_url": "https://avatars1.githubusercontent.com/u/3811773?v=4",
        "html_url": "https://github.com/pxlprfct",
        "company": "IBM",
        "blog": "ollie.work",
        "location": "London, UK"
    },
}


class CollaboratorTestCase(TestCase):
    collaborator_id = "5066994"
    collaborator = COLLABORATORS["5066994"]
    collaborators = COLLABORATORS

    def test_collaborator_parser(self):
        collaborator = parse_collaborator(self.collaborator_id, self.collaborator)
        serializer = CollaboratorSerializer(collaborator)
        self.assertEqual(collaborator, serializer.data)
