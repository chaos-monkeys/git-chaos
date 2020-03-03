from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_202_ACCEPTED
from psqlextra.query import ConflictAction

from collaborators.parsers import parse_collaborator
from collaborators.models import Collaborator
from repositories.models import Repository

from .models import Organisation
from .serializers import OrganisationSerializer


class OrganisationList(APIView):
    """
    List all projects
    """

    def get(self, request, *args, **kwargs):
        queryset = Organisation.objects.all()
        serializer = OrganisationSerializer(queryset, many=True)
        return Response(serializer.data)


class OrganisationDetails(APIView):
    """
    Upload or update an organisation
    """

    def post(self, request, *args, **kwargs):
        # TODO: Clean up / serializer errors
        p_meta = request.data.get("meta")
        p_collaborators = request.data.get("collaborators")

        org, _ = Organisation.objects.get_or_create(name=p_meta['repo_owner'])
        repository, _ = Repository.objects.get_or_create(name=p_meta['repo_owner'], organisation=org)

        if p_collaborators is not None:
            collaborators = (
                Collaborator.objects
                    .on_conflict(['id'], ConflictAction.UPDATE).bulk_insert(
                    [parse_collaborator(id, p_collaborators[id]) for id in p_collaborators.keys()],
                )
            )

            for collaborator in collaborators:
                repository.collaborators.add(collaborator['id'])


        return Response(HTTP_202_ACCEPTED)
