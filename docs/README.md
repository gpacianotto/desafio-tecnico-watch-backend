Este projeto faz parte de um desafio técnico da empresa Watch TV Brasil. Ele consiste na aplicação backend deste outro projeto [aqui](https://github.com/gpacianotto/desafio-tecnico-watch-frontend).

# Como Rodar

1. Para rodar este projeto, certifique-se de que tenha o `docker` e o `docker compose` instalado.

2. Crie um arquivo `.env` na raíz do projeto e insira valores parecidos com esses:

```.env
PORT=3001

# PostgreSQL
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_DB=mydb

# Aplicação NestJS
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=3600
```

3. Abra o projeto no terminal do seu computador e digite o seguinte comando:

```bash
docker compose up
```

ou se você possui o `docker compose` instalado como plugin, digite:

```bash
docker-compose up
```

Isso irá inicializar uma instância local do banco de dados `postgresql` da aplicação.

4. Instale as dependências do projeto digitando o seguinte comando no terminal:

```bash
npm install
```

5. Agora rode o projeto digitando o seguinte comando no terminal:

```bash
npm run start:dev
```

# Como acessar a documentação

1. Para acessar a documentação certifique-se de que o `docsify` está instalado:

```bash
npm i docsify-cli -g
```

2. Depois basta digitar no seu terminal:

```bash
npm run docs
```

3. agora acesse a documentação através da url `https://localhost:3000`