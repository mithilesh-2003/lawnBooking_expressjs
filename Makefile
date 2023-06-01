postgres:
	docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d postgres:15-alpine

start:
	docker start postgres15 pgadmin

stop:
	docker stop postgres15 pgadmin

pgadmin:
	docker run --name=pgadmin -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=a@a.com -e PGADMIN_DEFAULT_PASSWORD=root -d dpage/pgadmin4

createdb:
	docker exec -it postgres15 createdb --username=root --owner=root lawn

dropdb:
	docker exec -it postgres15 dropdb lawn

.PHONY: postgres start stop pgadmin createdb dropdb