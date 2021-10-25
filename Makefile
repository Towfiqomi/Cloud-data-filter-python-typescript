help:
	more README.md

build:
	docker-compose build

rebuild:
	docker-compose build --no-cache

up: build
	docker-compose up

down:
	docker-compose down

lint-fix:
	docker-compose run -T cloud-api poetry run black apis tests

ci:
	docker-compose run -T cloud-api poetry run pytest -s -vv tests