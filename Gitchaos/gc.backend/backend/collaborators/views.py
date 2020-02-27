from django.db import transaction
from rest_framework import generics
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_409_CONFLICT


from .models import Collaborator
from .serializers import CollaboratorSerializer


class CollaboratorDetail(APIView):
    """
    Retrieve, update or delete a collaborator.
    """

    def get(self, request, *args, **kwargs):
        collaborator_id = request.GET['collaborator_id']
        queryset = get_object_or_404(Collaborator, id=collaborator_id)
        serializer = CollaboratorSerializer(queryset)

        return Response(serializer.data)



class CollaboratorList(APIView):
    """
    List, Update all collaborators, of a specific Repository
    """

    def post(self, request, *args, **kwargs):
        req_data = request.data
        serializer = CollaboratorSerializer(req_data)
        print(serializer)
        with transaction.atomic():
            collaborator = Collaborator.objects.create(**serializer.data)

        Response(HTTP_201_CREATED, data=collaborator)

