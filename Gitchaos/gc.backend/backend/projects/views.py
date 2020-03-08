from rest_framework import generics

from .models import Project, Repository
from .serializers import ProjectSerializer, RepositorySerializer


class ProjectList(generics.ListCreateAPIView):
    """
    List all projects, or create a new project.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a project.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class RepositoryList(generics.ListCreateAPIView):
    """
    List all repositories, or create a new repository.
    """
    queryset = Repository.objects.all()
    serializer_class = RepositorySerializer


class RepositoryDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a repository.
    """
    queryset = Repository.objects.all()
    serializer_class = RepositorySerializer
