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
