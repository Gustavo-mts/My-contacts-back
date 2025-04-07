# Use a imagem oficial do PostgreSQL
FROM postgres:latest

# Copie o arquivo schema.sql para dentro do container
COPY src/database/schema.sql /docker-entrypoint-initdb.d/
