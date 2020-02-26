from rest_framework import serializers

from .models import Project, Repository


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('repo_owner',)


class RepositorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Repository
        fields = ('repo_name', 'repo_owner')
        read_only_fields = ('collaborators',)
