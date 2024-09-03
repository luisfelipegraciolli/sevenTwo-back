# SevenTwo-Back API

API desenvolvida para projeto de pratica dentro da Focus Consultoria

## Overview

Prove endpoints para manusear empresas e autenticação. Ela tem como objetivo a criação de formulários personalizados para cada empresa cadastrada. A Autenticação é feita por via de um JWT. A API todas operações CRUD

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

Retorna um json contendo todos os campos necessários para o Formulário. Ex:

```json
{
    "title": "Formulário de Contato",
    "description": "Entre em contato conosco para qualquer dúvida ou sugestão.",
    "fields": [
        {
            "name": "nome",
            "label": "Nome",
            "type": "text",
            "placeholder": "Digite seu nome",
            "required": true,
            "_id": "66d66071e3ce58ddaa5adc8a"
        },
        {
            "name": "email",
            "label": "E-mail",
            "type": "email",
            "placeholder": "Digite seu e-mail",
            "required": true,
            "_id": "66d66071e3ce58ddaa5adc8a"
        },
        {
            "name": "assunto",
            "label": "Assunto",
            "type": "text",
            "placeholder": "Digite o assunto",
            "required": true,
            "_id": "66d66071e3ce58ddaa5adc8a"
        },
        {
            "name": "mensagem",
            "label": "Mensagem",
            "type": "textarea",
            "placeholder": "Digite sua mensagem",
            "required": true,
            "_id": "66d66071e3ce58ddaa5adc8a"
        }
    ],
    "submitText": "Enviar"
}
```

##### Status: 200

#### POST /empresa

Cria empresa com campos passados por um Json

##### Parâmetros obrigatórios no Body:

-   username: String
-   password: String
-   title: String
-   fields: Array de Objects (Json) do tipo <code>{<br>name: String,<br>
    label: String,<br>type: ['text', 'date', 'time', 'textarea'],<br> required: Boolean<br>
    }</code>

##### Exemplo de Body para uma requisição

```json
{
    "title": "Formulário de Cadastro",
    "description": "Preencha os campos abaixo para se cadastrar.",
    "fields": [
        {
            "name": "nome",
            "label": "Nome",
            "type": "text",
            "placeholder": "Digite seu nome",
            "required": true
        },
        {
            "name": "email",
            "label": "E-mail",
            "type": "email",
            "placeholder": "Digite seu e-mail",
            "required": true
        },
        {
            "name": "senha",
            "label": "Senha",
            "type": "password",
            "placeholder": "Digite sua senha",
            "required": true
        },
        {
            "name": "confirmar_senha",
            "label": "Confirmar Senha",
            "type": "password",
            "placeholder": "Confirme sua senha",
            "required": true
        }
    ],
    "submitText": "Cadastrar"
}
```

##### Resposta:

```json
{
    "message": "Empresa Criada com sucesso",
    "_id": "66d66071e3ce58ddaa5adc86323923cdd1"
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
    "username": "financial_consultant",
    "password": "money_matters_2.127B",
    "tituloForm": "Solicitação de Consultoria"
}
```

```json
{
    "username": "financial_consultant_AI",
    "password": "money_matters_2.127B",
    "tituloForm": "Solicitação de Consultoria"
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
    "message": "Empresa deletada com sucesso!"
}
```

##### Status: 200

### auth

#### POST /auth/login

Autoriza usuário a realizar as operações do CRUD usando JWT

##### Parâmetros obrigatórios no Body:

    -   username: String
    -   password: String

##### Exemplo de requisição usando a biblioteca _axios_

```js
axios.get("https://seventwo-back/rota-protegida", {
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
```

##### Resposta

```json
{
    "message": "autorizado",
    "token": "{token}",
    "_id": "66d656baa51be0a2ba08ac27"
}
```

##### Status: 200
