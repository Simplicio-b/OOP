const AeronaveComercial = require("./AeronaveComercial");

class AeronaveCarga extends AeronaveComercial {
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, pesoMax) {
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        this.pesoMax = pesoMax;
    }
}


module.exports = AeronaveCarga