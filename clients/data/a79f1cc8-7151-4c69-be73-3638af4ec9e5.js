// os nomes dos parametros devem ser os mesmos dos NAMES dos respectivos inputs no front
function calculaMediaProvas({ p1, p2 }) {
    return { media: (p1 + p2) / 2 };
}

module.exports = calculaMediaProvas;
