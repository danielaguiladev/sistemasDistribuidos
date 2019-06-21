FROM python:3.6.2

ENV PYTHONUNBUFFERED 1

USER root


RUN mkdir /gulugulu

WORKDIR /gulugulu
COPY . /gulugulu/
RUN pip install -r requirements.txt

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku
CMD python -m textblob.download_corpora && python manage.py runserver 0.0.0.0:$PORT
