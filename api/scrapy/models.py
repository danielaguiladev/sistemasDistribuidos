from django.db import models

class Conteudo(models.Model):
    palavra = models.CharField(max_length=500)

class Pagina(models.Model):
    titulo = models.CharField(max_length=500)
    link = models.CharField(max_length=200)
    conteudo = models.ForeignKey(Conteudo, models.DO_NOTHING, related_name='pagina_conteudo')
    rank = models.IntegerField(default=0)
