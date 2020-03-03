from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Repository
from .serializers import RepositorySerializer


class RepositoryList(APIView):
    """
    List all repositories
    """

    def get(self, request, *args, **kwargs):
        queryset = Repository.objects.all()
        serializer = RepositorySerializer(queryset, many=True)
        return Response(serializer.data)
