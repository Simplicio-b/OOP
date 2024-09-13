// IMPORTS AERONAVES
const { 
    AeronavePassageiros,
    AeronaveCarga,
    AeronaveParticular
} = require("./domain/Aeronave");

// Class Piloto
const Piloto = require("./domain/Piloto")
// Class Aerovia
const Aerovia = require("./domain/Aerovia");
// Class PlanoDeVoo
const PlanoDeVoo = require("./domain/PlanoDeVoo");

// Service class for Aeronaves
const ServicoAeronaves = require("./service/ServicoAeronaves");
// Service class for Pilotos
const ServicoPilotos = require('./service/ServicoPilotos');
// Service class for Aerovias
const ServicoAerovias = require("./service/ServicoAerovias")
// Service class for PlanoDeVoo
const ServicoPlanos = require("./service/ServicoPlanosVoo");

// Class OcupacaoAerovia
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


// Class Sistema
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

    aprovarPlanoDeVoo(plano) {
        // Logic to approve flight plan (e.g., check for conflicts, availability, etc.)
        this.servicoPlanos.consista(plano);
    }

    listarPlanos() {
        return this.servicoPlanos.todos();
    }
}

// Test implementation
function testarSistema() {
    const sistema = new Sistema();

    // Add some aircraft
    const aeronave1 = new AeronavePassageiros('AB123', 850, 12000, 'LATAM',180);
    const aeronave2 = new AeronaveCarga('CD456', 700, 15000, 'GOL', 20000);
    const aeronave3 = new AeronaveParticular('PT456', 1000, 10000, "ANY");
    sistema.servicoAeronaves.adicionarAeronave(aeronave1);
    sistema.servicoAeronaves.adicionarAeronave(aeronave2);
    sistema.servicoAeronaves.adicionarAeronave(aeronave3);

    // Add some pilots
    const piloto1 = new Piloto('PIL123', 'João', true);
    const piloto2 = new Piloto('PIL456', 'Maria', true);
    const piloto3 = new Piloto('PIL433', 'José', false);
    sistema.servicoPilotos.adicionarPiloto(piloto1);
    sistema.servicoPilotos.adicionarPiloto(piloto2);
    sistema.servicoPilotos.adicionarPiloto(piloto3);

    // Add some aerovias
    const aerovia1 = new Aerovia('AV001', 'São Paulo', 'Rio de Janeiro', 500);
    const aerovia2 = new Aerovia('AV011', 'São Paulo', 'Recife', 2000);
    sistema.servicoAerovias.adicionarAerovia(aerovia1);
    sistema.servicoAerovias.adicionarAerovia(aerovia2);


    // Create and approve a flight plan
    const planoDeVoo = new PlanoDeVoo('PL001', 'PIL123', 'AV001', new Date(), '12:00', 30000, [1, 2], false);
    const planoDeVoo1 = new PlanoDeVoo('PL002', 'PIL456', 'AV011', new Date(), '18:00', 25000, [1, 2], false);
    sistema.aprovarPlanoDeVoo(planoDeVoo);
    sistema.aprovarPlanoDeVoo(planoDeVoo1);



    // List aircraft, pilots, and flight plans
    console.log("SERVICO AERONAVES\n")
    console.log(sistema.listarAeronaves());
    console.log("\nSERVICO PILOTOS\n")
    console.log(sistema.servicoPilotos.todos());
    console.log(sistema.servicoPilotos.recupera('PIL123'))
    console.log("\nSERVICO AEROVIAS\n")
    console.log(sistema.servicoAerovias.todas())
    console.log(sistema.servicoAerovias.recupera("São Paulo", "Recife") )
    console.log("\nSERVICO PLANOS DE VOO\n")
    console.log(sistema.listarPlanos());
    console.log(sistema.servicoPlanos.recuperar("PL002"));
}

// Run the test
testarSistema();
