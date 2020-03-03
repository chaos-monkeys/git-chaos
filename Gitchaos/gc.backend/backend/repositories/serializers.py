from rest_framework import serializers

from .models import Repository


class RepositorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Repository
        fields = ('name', 'organisation')
        read_only_fields = ('collaborators',)
