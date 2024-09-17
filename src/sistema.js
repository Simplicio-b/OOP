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

    listarAltitudesLivres(idAerovia, data, horario) {
        return this.ocupacaoAerovia.altitudesLivres(idAerovia, data, horario);
    }

    aprovarPlanoDeVoo(aeronave, piloto, aerovia, altitude, data, hora) {
        const tipoAeronave = this.servicoAeronaves.tipoAeronave(aeronave.prefixo)
        const altitudePermitidaDaAeronave = this.servicoAeronaves.altitudePermitidaPorTipoDeAeronave(tipoAeronave)
        const tempoDeViagem = this.servicoAerovias.tempoDeViagem(aerovia.tamanho, aeronave.velocidadeCruzeiro)
        const slots = this.servicoAerovias.montagemSlot(hora, tempoDeViagem)
 

        // VALIDA REGRAS DE HORARIO
        if(this.servicoAeronaves.restricoesDeHorarioPorTipoDeAeroNave(tipoAeronave, hora)) {
            console.log("PLANO DE VOO IRREGULAR - HORARIO INVALIDO")
            return
        }
        // console.log("HORARIO VALIDO \n")

        // VALIDA REGRAS DA AERONAVE ALTITUDE
        if(!this.servicoPlanos.validaPlanoDeVooPorAltitudePermitidaDaAeronave(altitude, altitudePermitidaDaAeronave)) {
            console.log("PLANO DE VOO IRREGULAR - ALTITUDE INVALIDA")
            return
        }
        // console.log("ALTITUDE VALIDA \n")


        // VALIDA SE O PILOTO ESTA ATIVO
        if(!this.servicoPilotos.pilotoApto(piloto.matricula)) {
            console.log("PLANO DE VOO IRREGULAR - PILOTO INAPTO")
            return
        }
        // console.log("PILOTO APTO \n")

        // VALIDANDO A AUTONOMIA DA AERONAVE
        if(!this.servicoAeronaves.autonomiaSegura(aeronave.autonomia, aerovia.tamanho)) {
            console.log("PLANO DE VOO IRREGULAR - A AERONAVE NAO POSSUI AUTONOMIA SUFICIENTE")
            return
        }
        // console.log("AUTONOMIA SEGURA \n")
        
        // VALIDANDO OCUPACAO DA AEROVIA
        if(this.ocupacaoAerovia.isOcupado(aerovia.id, data, altitude, slots)) {
            console.log("PLANO DE VOO IRREGULAR - AEROVIA OCUPADA")
            return
        }
        // console.log("AEROVIA DISPONIVEL \n")

        this.ocupacaoAerovia.ocuparAerovia(aerovia.id, data, altitude, slots)

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