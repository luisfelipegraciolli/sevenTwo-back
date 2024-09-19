# Como criar arquivos estaticos de clientes?

1. `npm run new-client`

```bash
npm run new-client

> seventytwo@0.0.0 new-client
> node clients/generate-client-file.js

> ARQUIVO CRIADO;
> CAMINHO: [CWD]/clients/data/[UUID].js;
> NOME: [UUID].js
```

Copie esse UUID.

2. no POSTMAN:

-   Faz um POST pra criar o cliente e, alem das outras informacoes, insere essa aqui:

```json
{
    // ...
    "path": "[UUID]"
    // ...
}
```

3. altere o arquivo criado no passo 1, seguindo o seguinte modelo:

```js
// os nomes dos parametros devem ser os mesmos dos NAMES dos respectivos inputs no front
function calculaMediaProvas({ p1, p2 }) {
    // passar em forma de objeto!!!!
    return { media: (p1 + p2) / 2 };
}

module.exports = calculaMediaProvas;
// o nome da funcao nao importa
```

4. Para receber o output dessa regra de negocio, fazer o seguinte:

```plaintext
POST /submit/[id_da_empresa]
no body, coloque os parametros (no caso da funcao de exemplo em 3 fica:)
{
  "p1": 5,
  "p2": 7
}
ao enviar a requisicao, a resposta sera:
{
  "media": 6
}
```
