from rest_framework import filters
from textblob import TextBlob
from textblob.np_extractors import ConllExtractor
from django.db.models import Q
import nltk

class ConteudoFilter(filters.BaseFilterBackend):

    def install_ntlk(self):
        nltk.download('punkt')
        nltk.download('conll2000')

    def filter_queryset(self, request, queryset, view):
        self.install_ntlk()
        text = request.query_params['query']
        if text:
            extractor = ConllExtractor()
            nouns = TextBlob(text, np_extractor=extractor)
            nouns_phrases = nouns.noun_phrases
            tags = [i[0] for i in nouns.tags if i[1].startswith('NN')]
            if nouns_phrases or tags:
                text = nouns_phrases if nouns_phrases else tags
                queries = [Q(conteudo__palavra__icontains=noun) for noun in text]
                query = queries.pop()
                for items in queries:
                    query |= items
            else:
                query = Q(conteudo__palavra__icontains=text)
            results = queryset.filter(query).order_by('rank')
            if results:
                for result in results:
                    result.rank += 1
                    result.save()
                return results
        return queryset.none()
