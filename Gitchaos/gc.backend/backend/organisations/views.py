import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_202_ACCEPTED
from psqlextra.query import ConflictAction

from collaborators.serializers import CollaboratorSerializer
from collaborators.parsers import parse_collaborator
from collaborators.models import Collaborator
from repositories.models import Repository
from repositories.serializers import RepositoryDetailSerializer, RepositorySerializer

from .models import Organisation
from .serializers import OrganisationSerializer, OrganisationDetailSerializer


class OrganisationList(APIView):
    """
    List all organisations
    """

    def get(self, request, *args, **kwargs):
        queryset = Organisation.objects.all()
        serializer = OrganisationSerializer(queryset, many=True)
        return Response(serializer.data)


class OrganisationDetail(APIView):
    """
    Upload, update or retrieve an organisation
    """

    def get(self, request, *args, **kwargs):
        organisation_name = kwargs.get('organisation_name')
        org_pk = Organisation.objects.get(name=organisation_name)
        collaborators_pk = Repository.objects.values_list('collaborators', flat=True)\
                .filter(organisation=org_pk)\
                .distinct()
        collaborators = Collaborator.objects.filter(id__in=list(collaborators_pk))
        collaborator_serializer = CollaboratorSerializer(collaborators, many=True)

        serializer = OrganisationDetailSerializer(org_pk)
        response_obj = dict(serializer.data)
        response_obj['collaborators'] = collaborator_serializer.data
        return Response(response_obj)

    def post(self, request, *args, **kwargs):
        # TODO: Clean up / serializer errors
        p_meta = request.data.get("meta")
        p_collaborators = request.data.get("collaborators")

        org, _ = Organisation.objects.get_or_create(name=p_meta['repo_owner'])
        repository, _ = Repository.objects.get_or_create(name=p_meta['repo_name'], organisation=org)

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
