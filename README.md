# sevenTwo-back

API dsenvolvida para projeto de pratica dentro da Focus Consultoria

# https://seventwo-back.vercel.app/

# Rotas

## /empresa

-   GET /empresa/:id retorna todos os campos do forms dessa empresa em JSON pelo id passado

-   POST /empresa Cria empresa com campos (Obrigatorios)

    -   username: String
    -   password: String
    -   tituloForm: String
    -   descriptionForm: String
    -   placeholderCamposForm: json
    -   camposForm: json
    -   typeOfCampo: json

-   PATCH /empresa:id Edita os campos que forem passados (Passar json completo)

-   DELETE /empresa:id Deleta empresa com o ID passado

## /auth/login

-   POST /auth/login autoriza usuario a realizar as operações do CRUD usa JWT
