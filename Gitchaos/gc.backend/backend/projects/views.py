from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK

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
        project_meta = request.data.get("meta")
        # TODO: prepare statement - insert once - and atomic
        project, create = Project.objects.get_or_create(repo_owner=project_meta['repo_owner'])


        if create:
            Response(HTTP_201_CREATED)


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
