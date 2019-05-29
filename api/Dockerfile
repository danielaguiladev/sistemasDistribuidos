FROM alpine:latest

USER root

ENV PYTHONUNBUFFERED 1

RUN mkdir /gulugulu
WORKDIR /gulugulu

COPY . /gulugulu

RUN apk add --no-cache --virtual python3 \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev \
    py-futures \
    py-tz \
    py-pillow \
    py-gunicorn \
    ca-certificates \
    pip3 install -U pip \
    && pip3 install -r requirements.txt

EXPOSE 8000
CMD ["sh", "start.sh"]
