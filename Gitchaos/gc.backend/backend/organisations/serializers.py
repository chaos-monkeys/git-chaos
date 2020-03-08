from rest_framework import serializers

from collaborators.serializers import CollaboratorSerializer
from .models import Organisation

class OrganisationSerializer(serializers.ModelSerializer):
    repositories = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Organisation
        fields = ('name', 'repositories')


class OrganisationDetailSerializer(serializers.ModelSerializer):
    repositories = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Organisation
        fields = ('name', 'repositories')
