const AeronaveComercial = require("./AeronaveComercial");

class AeronavePassageiros extends AeronaveComercial {
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, maxPassageiros) {
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        this.maxPassageiros = maxPassageiros;
    }
}

module.exports = AeronavePassageiros