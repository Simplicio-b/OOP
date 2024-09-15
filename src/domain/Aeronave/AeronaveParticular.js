const Aeronave = require("./Aeronave");

class AeronaveParticular extends Aeronave {
    constructor(prefixo, velocidadeCruzeiro, autonomia, respManutencao) {
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.respManutencao = respManutencao;
    }
}

module.exports = AeronaveParticular