class ServicoAeronaves {
    constructor() {
        this.aeronaves = [];
    }
    
    todas() {
        return this.aeronaves;
    }

    recupera(prefixo) {
        return this.aeronaves.find(aeronave => aeronave.prefixo === prefixo);
    }

    adicionarAeronave(aeronave) {
        this.aeronaves.push(aeronave);
    }

    // Calcula autonomia segura(autonomia maior que 10% da distancia a ser percorrida)
    autonomiaSegura(autonomiaAeroNave, distanciaAserPercorida) {
        const autonomiaSegura = distanciaAserPercorida + (distanciaAserPercorida * 0.1)

        if(autonomiaAeroNave < distanciaAserPercorida) {
            return false
        }

        if(autonomiaAeroNave < autonomiaSegura) {
            return false
        }

        return true
    }

}

module.exports = ServicoAeronaves
