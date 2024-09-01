# sevenTwo-back
API dsenvolvida para projeto de pratica dentro da Focus Consultoria

# Rotas
- GET /empresa/:id retorna todos os campos do forms dessa empresa em JSON pelo id passado

- POST /empresa Cria empresa com campos (Obrigatorios)
    - username: String
    - password: String
    - tituloForm: String
    - descriptionForm: String
    - placeholderCamposForm: json
    - camposForm: json
    - typeOfCampo: json

- PATCH /empresa:id Edita os campos que forem passados (Passar json completo)

- DELETE /empresa:id Deleta empresa com o ID passado
