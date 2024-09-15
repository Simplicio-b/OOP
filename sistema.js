// Service class for Aeronaves
const ServicoAeronaves = require("./service/ServicoAeronaves");
// Service class for Pilotos
const ServicoPilotos = require('./service/ServicoPilotos');
// Service class for Aerovias
const ServicoAerovias = require("./service/ServicoAerovias")
// Service class for PlanoDeVoo
const ServicoPlanos = require("./service/ServicoPlanosVoo");
// Service class for OcupacaoAerovia
const OcupacaoAerovia = require('./ocupacaoAerovia');

class Sistema {
    constructor() {
        this.servicoAeronaves = new ServicoAeronaves();
        this.servicoPilotos = new ServicoPilotos();
        this.servicoAerovias = new ServicoAerovias();
        this.servicoPlanos = new ServicoPlanos();
        this.ocupacaoAerovia = new OcupacaoAerovia();
    }

    listarAeronaves() {
        return this.servicoAeronaves.todas();
    }

    listarAltitudesLivres(idAerovia, data) {
        return this.ocupacaoAerovia.altitudesLivres(idAerovia, data);
    }


    aprovarPlanoDeVoo(plano, aeronave) {
        const { 
            id, 
            idAerovia, 
            matriculaPiloto, 
            altitude, 
            data, 
            horario, 
            slots, 
            cancelado 
        } = plano

        const {

        } = aeronave

        console.log(`
            ============ DADOS DO PLANBO DE VOO ============
            id: ${id}, 
            idAerovia: ${idAerovia}, 
            matriculaPiloto: ${matriculaPiloto}, 
            altitude: ${altitude}, 
            data: ${data}, 
            horario: ${horario}, 
            slots: ${slots}, 
            cancelado: ${cancelado} 
        `)
        
        // Logic to approve flight plan (e.g., check for conflicts, availability, etc.)
        // VALIDA SE O PILOTO ESTA ATIVO
        if(!this.servicoPilotos.pilotoApto(matriculaPiloto)) {
            console.log("PLANO DE VOO IRREGULAR  - PILOTO INAPTO")
            return
        }

        console.log("PILOTO APTO")
        
        this.servicoPlanos.consista(plano);
    }

    listarPlanos() {
        return this.servicoPlanos.todos();
    }
}

module.exports = Sistema