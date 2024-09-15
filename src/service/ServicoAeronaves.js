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

    tipoAeronave(prefixo) {
        const aeronave = this.recupera(prefixo)
        return aeronave.constructor.name
    }

    #altitudePermitidaAeronavePassageiros() {
        return { min: 28000, max: 35000 }
    }

    #altitudePermitidaAeronaveCarga() {
        return { min: 25000, max: 35000 }
    }

    #altitudePermitidaAeronaveParticular() {
        return { min: 25000, max: 27000 }
    }

    altitudePermitidaPorTipoDeAeronave(tipoAeronave) {
        switch (tipoAeronave) {
            case "AeronavePassageiros":
                return this.#altitudePermitidaAeronavePassageiros()
            
            case "AeronaveParticular":
                return this.#altitudePermitidaAeronaveParticular()

            case "AeronaveCarga": 
                return this.#altitudePermitidaAeronaveCarga()
        
            default:
                return { min: 25000, max: 35000 };
        }  
    }

}

module.exports = ServicoAeronaves
