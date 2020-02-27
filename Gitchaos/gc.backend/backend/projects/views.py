from django.db import transaction
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_409_CONFLICT

from .models import Project, Repository
from .serializers import ProjectSerializer, RepositorySerializer


class ProjectList(APIView):
    """
    List all projects, or create a new project.
    """

    def get(self, request, *args, **kwargs):
        queryset = Project.objects.all()
        serializer = ProjectSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        # TODO: Check for malformed JSON, return serializer errors
        p_meta = request.data.get("meta")

        project, c_project = Project.objects.get_or_create(repo_owner=p_meta['repo_owner'])
        print(project)
        repository, c_repository = Repository.objects.get_or_create(repo_name=p_meta['repo_owner'], repo_owner=project)

        if c_project or c_repository:
            return Response(HTTP_201_CREATED)

        return Response(HTTP_409_CONFLICT)  # Resources already exists


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
