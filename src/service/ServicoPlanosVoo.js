const Utils = require("../utils/utils");

class ServicoPlanos {
    constructor() {
        this.planos = [];
    }

    consista(plano) {
        this.planos.push(plano);
        return plano;
    }

    recuperar(id) {
        return this.planos.find(plano => plano.id === id);
    }

    todos() {
        return this.planos;
    }

    criarIdPlanoDeVoo() {
        const id = Utils.uuid()
        return `PLV-${id}`
    }

    validaPlanoDeVooPorAltitudePermitidaDaAeronave(altitudePlano, altitudeAeroNave = { min: 25000, max: 35000 }) {
        const { min, max } = altitudeAeroNave
        if(altitudePlano > 35000 || altitudePlano < 25000) {
            return false
        }

        if(altitudePlano > max || altitudePlano < min) {
            return false
        }

        return true;
    }
}

module.exports = ServicoPlanos