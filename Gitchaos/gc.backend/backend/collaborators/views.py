from rest_framework import generics

from .models import Collaborator
from .serializers import CollaboratorSerializer


class CollaboratorList(generics.ListCreateAPIView):
    """
    List all projects, or create a new project.
    """
    queryset = Collaborator.objects.all()
    serializer_class = CollaboratorSerializer


class CollaboratorDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a project.
    """
    queryset = Collaborator.objects.all()
    serializer_class = CollaboratorSerializer

