const PlanoDeVoo = require("./domain/PlanoDeVoo");

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


    aprovarPlanoDeVoo(aeronave, piloto, aerovia, altitude, data, hora) {
        const tipoAeronave = this.servicoAeronaves.tipoAeronave(aeronave.prefixo)
        const altitudePermitidaDaAeronave = this.servicoAeronaves.altitudePermitidaPorTipoDeAeronave(tipoAeronave)
        const tempoDeViagem = this.servicoAerovias.tempoDeViagem(aerovia.tamanho, aeronave.velocidadeCruzeiro)
        // console.log(aeronave)
        // console.log(aerovia)
        // console.log(tipoAeronave + "\n")
        // console.log(`MIN: ${min}, MAX: ${max}\n`)
        // console.log("TEMPO DE VIAGEM: ", tempoDeViagem , "HRS")
        // console.log("TEMPO DE VIAGEM: ", tempoDeViagem * 60 , "minutos")

        const slots = this.servicoAerovias.montagemSlot(hora, tempoDeViagem)
        // Logic to approve flight plan (e.g., check for conflicts, availability, etc.)
       
        // VALIDA REGRAS DA AERONAVE ALTITUDE
        if(!this.servicoPlanos.validaPlanoDeVooPorAltitudePermitidaDaAeronave(altitude, altitudePermitidaDaAeronave)) {
            console.log("PLANO DE VOO IRREGULAR - ALTITUDE INVALIDA")
            return
        }
        console.log("ALTITUDE VALIDA \n")

        if(this.servicoAeronaves.restricoesDeHorarioPorTipoDeAeroNave(tipoAeronave, hora)) {
            console.log("PLANO DE VOO IRREGULAR - HORIRO INVALIDO")
            return
        }
        console.log("HORARIO VALIDO \n")

        // VALIDA SE O PILOTO ESTA ATIVO
        if(!this.servicoPilotos.pilotoApto(piloto.matricula)) {
            console.log("PLANO DE VOO IRREGULAR - PILOTO INAPTO")
            return
        }
        console.log("PILOTO APTO \n")

        // VALIDANDO A AUTONOMIA DA AERONAVE
        if(!this.servicoAeronaves.autonomiaSegura(aeronave.autonomia, aerovia.tamanho)) {
            console.log("PLANO DE VOO IRREGULAR - A AERONAVE NAO POSSUI AUTONOMIA SUFICIENTE")
            return
        }
        console.log("AUTONOMIA SEGURA \n")
        
        // const planoDeVoo0 = new PlanoDeVoo('PL433', 'PIL456', 'AV011', new Date(), '12:00', 29000, [1, 2], false);

        return this.servicoPlanos.consista(new PlanoDeVoo(
            this.servicoPlanos.criarIdPlanoDeVoo(), 
            piloto.matricula,
            aerovia.id,
            data,
            hora,
            altitude,
            slots,
            false
        ));
    }

    listarPlanos() {
        return this.servicoPlanos.todos();
    }
}

module.exports = Sistema