const Aeronave = require("./Aeronave");

class AeronaveComercial extends Aeronave {
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA) {
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.nomeCIA = nomeCIA;
    }
}

module.exports = AeronaveComercial