class OcupacaoAerovia {
    constructor() {
        this.ocupacoes = [];
    }

    altitudesLivres(idAerovia, data) {
        // Logic to return available altitudes for the given aerovia and date
        return [];
    }

    ocuparAerovia(idAerovia, data, altitude, slot) {
        // Logic to occupy a specific aerovia at a certain time slot
        this.ocupacoes.push({ idAerovia, data, altitude, slot });
    }

    isOcupado(idAerovia, data, altitude, slot) {
        // Logic to check if the aerovia is occupied
        return this.ocupacoes.some(ocupacao => ocupacao.idAerovia === idAerovia && ocupacao.data === data && ocupacao.altitude === altitude && ocupacao.slot === slot);
    }
}

module.exports = OcupacaoAerovia
