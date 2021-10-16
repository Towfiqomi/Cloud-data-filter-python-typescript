FROM python:3.9.7-slim-buster

LABEL maintainer="Md Towfiqul Alom"

ARG DEV

RUN apt-get update && \
    pip install --upgrade pip 'poetry==1.1.5'

WORKDIR /cloud-api

COPY ./apis ./apis
COPY pyproject.toml .
COPY poetry.lock .

RUN poetry install --no-root

EXPOSE 5000

CMD ["poetry", "run", "uvicorn", "apis.main:app", "--host", "0.0.0.0", "--port", "5000"]
