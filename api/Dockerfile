FROM ubuntu:16.04

USER root

ENV PYTHONUNBUFFERED 1

ENV PROFILE 'production'

RUN apt-get update
RUN apt-get install -y software-properties-common vim
RUN add-apt-repository ppa:jonathonf/python-3.6
RUN apt-get update

RUN apt-get install -y build-essential python3.6 python3.6-dev python3-pip python3.6-venv
RUN apt-get install -y git

# update pip
RUN python3.6 -m pip install pip --upgrade
RUN python3.6 -m pip install wheel

RUN apt install -y curl \
    binutils-gold \
    curl \
    g++ \
    gcc \
    libmysqlclient-dev

RUN mkdir /gulugulu
WORKDIR /gulugulu

COPY . /gulugulu

RUN pip install -r requirements.txt

# Server
EXPOSE 8000
#CMD python3 manage.py runserver
