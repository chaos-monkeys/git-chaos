from rest_framework.views import APIView
from rest_framework.response import Response

from organisations.models import Organisation

from .models import Repository
from .serializers import RepositoryDetailSerializer


class RepositoryDetail(APIView):

    def get(self, request, *args, **kwargs):
        organisation_name = kwargs.get('organisation_name')
        repository_name = kwargs.get('repository_name')
        organisation = Organisation.objects.get(name=organisation_name)
        queryset = Repository.objects.filter(organisation=organisation, name=repository_name)
        serializer = RepositoryDetailSerializer(queryset, many=True)

        return Response(serializer.data)
