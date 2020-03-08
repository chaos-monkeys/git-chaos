from rest_framework import serializers

from .models import Organisation

class OrganisationSerializer(serializers.ModelSerializer):
    repositories = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Organisation
        fields = ('name', 'repositories')
