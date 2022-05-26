# Teste Contele

## Sobre o projeto:
O projeto consiste em uma aplicação em NodeJS de cadastro de usuários.

### Tecnologias utilizadas:
* NodeJS
* Express
* Knex
* Postgres
* Docker Compose

## Rodando o projeto:

Para clonar o projeto, copiar a url e utilizar com o comando:\
```git clone {url}```

Para instalar as dependências, utilizar o comando:\
```yarn```

Após a instalação das dependências, para iniciar o servidor, utilizar:\
```yarn dev```

O servidor rodará, por padrão, na porta 8080, para alterar é necessario mudar o numero no arquivo .env

## Banco de Dados

Para a criação do banco de dados, é necessário ter o Docker e o Docker Compose instalados, que podem ser encontrados nestes links:

* Docker
* Docker Compose

Se já estiverem instalados, criar e iniciar o container com o comando: \
``` docker-compose up```

Para iniciar o banco de dados com a criação da tabela, utilizar o comando:\
```yarn knex migrate:latest```

Para popular o banco de dados com alguns dados pré determinados para testes: 

``` yarn knex seed:make 001_users```


