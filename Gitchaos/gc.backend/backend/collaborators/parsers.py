from .models import Collaborator
from .serializers import CollaboratorSerializer


def parse_collaborator(id: str, collaborator: dict) -> dict:
    meta = {
        "location": collaborator.get('location', ''),
        "company": collaborator.get('company', '')
    }

    parsed = {
        "id": int(id),
        "username": collaborator.get('username'),
        "name": collaborator.get('name'),
        "avatar": collaborator.get('avatar_url', None),
        "html_url": collaborator.get('html_url', None),
        "metadata": meta,
    }

    return parsed
