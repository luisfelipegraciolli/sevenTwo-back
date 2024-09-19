const { v4: uuid4 } = require("uuid");
const fs = require("fs");
const uuid = uuid4();
try {
    const fullPath = `${process.cwd()}/clients/data/${uuid}.js`;
    fs.writeFileSync(fullPath, "");
    console.log(`> ARQUIVO CRIADO;`);
    console.log(`> CAMINHO: ${fullPath};`);
    console.log(`> NOME: ${uuid}.js`);
} catch (error) {
    console.log("Ocorreu um erro. Tente novamente.");
}
