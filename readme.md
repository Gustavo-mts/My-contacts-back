✅ Pré-requisitos
* Node.js 18+ (recomendado 20+)

* NPM 9+ ou PNPM/Yarn (opcional)

* Docker e Docker Engine 24+ (se optar por rodar o PostgreSQL em contêiner)

Observação: O package.json atual possui um script dev que tenta iniciar um contêiner chamado my-contact-container. Se você não usa Docker, ajuste ou ignore esse trecho.

# Instalação

### Clonar o repositório
> git clone https://github.com/Gustavo-mts/My-contacts-back.git

> cd my-contacts-back

### Instalar dependências
> npm install

### crie um arquivo .env

#### Porta do servidor HTTP
  PORT=3000
#### Credenciais de banco
  DB_HOST=localhost </br>
  DB_PORT=5432 </br>
  DB_USER=postgres</br>
  DB_NAME=contacts_db</br>


### Banco de Dados (PostgreSQL)


> docker run -d \
>  --name my-contact-container \
>  -e POSTGRES_USER=postgres \
>  -e POSTGRES_PASSWORD=postgres \
>  -e POSTGRES_DB=contacts_db \
>  -p 5432:5432 \
>  postgres:16


##### Verifique se está rodando:

> docker ps

### Ambiente de Desenvolvimento com Nodemon:

> npm run dev

