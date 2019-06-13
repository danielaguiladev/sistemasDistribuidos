from rest_framework import filters
from textblob import TextBlob
from django.db.models import Q

class ConteudoFilter(filters.BaseFilterBackend):

    def filter_queryset(self, request, queryset, view):
        text = request.query_params['query']
        if text :
            nouns = TextBlob(text).noun_phrases
            queries = [Q(conteudo__palavra__icontains=noun) for noun in nouns]
            query = queries.pop()
            for items in queries:
                query |= items
            return queryset.filter(query)
        return queryset.none()
