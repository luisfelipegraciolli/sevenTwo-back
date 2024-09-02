# SevenTwo-Back API

API desenvolvida para projeto de pratica dentro da Focus Consultoria

## Overview

Prove endpoints para manusear empresas e autenticação. Ela tem como objetivo a criação de formulários personalizados para cada empresa cadastrada. A Autenticação é feita por via de um JWT.A API todas operações CRUD

## URL

https://seventwo-back.vercel.app/

## Autenticação

Para acessar as rotas você necessita da autenticação via JWT. Envie o token no header `Authorization` com o formato
`Bearer <token>`
Mais detalhes em <a href="#auth">auth</a>

## Rotas

### empresa

#### GET /empresa/{id}

Busca por uma única empresa por seu ID

##### Parâmetros:

-   `id`: Identificador da empresa gerado no Banco de Dados

##### Resposta:

Retorna um json contendo todos os campos necessários para o Formulário.Ex:

```json
{
    "tituloForm": "Reserva de Mesa",
    "descriptionForm": "Reserve sua mesa para jantar conosco.",
    "placeholderCamposForm": {
        "nome": "Nome",
        "dataReserva": "Data da reserva",
        "horario": "Horário"
    },
    "camposForm": {
        "nome": "name",
        "dataReserva": "reservation_date",
        "horario": "time"
    },
    "typeOfCampo": {
        "nome": "text",
        "dataReserva": "date",
        "horario": "time"
    }
}
```

##### Status: 200

#### POST /empresa

Cria empresa com campos passados por um Json

##### Parâmetros obrigatórios no Body:

    -   username: String
    -   password: String
    -   tituloForm: String
    -   descriptionForm: String
    -   placeholderCamposForm: json
    -   camposForm: json
    -   typeOfCampo: json

##### Exemplo de Body para uma requisição

```json
{
    "username": "financial_consultant",
    "password": "money_matters",
    "tituloForm": "Solicitação de Consultoria",
    "descriptionForm": "Preencha o formulário para agendar uma consulta.",
    "placeholderCamposForm": {
        "nome": "Nome completo",
        "telefone": "Telefone",
        "assunto": "Assunto da consulta"
    },
    "camposForm": {
        "nome": "full_name",
        "telefone": "phone",
        "assunto": "subject"
    },
    "typeOfCampo": {
        "nome": "text",
        "telefone": "tel",
        "assunto": "select"
    }
}
```

##### Resposta:

```json
{
    "message": "Empresa Criada com sucesso"
}
```

##### Status: 201

#### PATCH /empresa/{id}

Busca por uma única empresa por seu ID e atualiza seu conteúdo

##### Parâmetros:

-   `id`: Identificador da empresa gerado no Banco de Dados

##### Exemplo de body para uma requisição

```json
{
    "username": "financial_consultant_AI",
    "password": "money_matters_2.127B",
    "tituloForm": "Solicitação de Consultoria",
    "descriptionForm": "Preencha o formulário para agendar uma consulta.",
    "placeholderCamposForm": {
        "nome": "Nome completo",
        "telefone": "Telefone",
        "assunto": "Assunto da consulta"
    },
    "camposForm": {
        "nome": "full_name",
        "telefone": "phone",
        "assunto": "subject"
    },
    "typeOfCampo": {
        "nome": "text",
        "telefone": "tel",
        "assunto": "select"
    }
}
```

##### Resposta

```json
{
    "message": "Empresa atualizada com sucesso"
}
```

##### Status: 201

#### DELETE /empresa/{id}

Deleta empresa com o ID do parâmetro

##### Parâmetros:

-   `id`: Identificador da empresa gerado no Banco de Dados

##### Resposta:

```json
{
    "messagem": "Empresa deletada com sucesso!"
}
```

##### Status: 200

### auth

#### GET /auth/login

Autoriza usuário a realizar as operações do CRUD usando JWT

##### Parâmetros obrigatórios no Body:

    -   username: String
    -   password: String

##### Exemplo de requisição

```ts
axios.get('https://api.example.com/protected-route', {
  headers: {
    Authorization: Bearer ${token}, // Inclui o token no header Authorization
  },
})
```

##### Resposta

```json
{
    "msg": "autorizado",
    "token": "{token}"
}
```

##### Status: 200
