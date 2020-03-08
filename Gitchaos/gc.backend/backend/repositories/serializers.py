from rest_framework import serializers

from collaborators.serializers import CollaboratorSerializer
from .models import Repository


class RepositorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Repository
        fields = ('id',)


class RepositoryDetailSerializer(serializers.ModelSerializer):
    collaborators = CollaboratorSerializer(many=True)
    organisation = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Repository
        fields = ('name', 'organisation', 'collaborators',)
