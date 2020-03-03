from django.db import transaction
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


from .models import Collaborator
from .serializers import CollaboratorSerializer


class CollaboratorList(APIView):
    """
    Retrieve, update or delete a collaborator.
    """

    def get(self, request, *args, **kwargs):
        collaborator_id = request.GET['collaborator_id']
        queryset = get_object_or_404(Collaborator, id=collaborator_id)
        serializer = CollaboratorSerializer(queryset)

        return Response(serializer.data)
