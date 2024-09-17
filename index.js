// IMPORTS AERONAVES
const { 
    AeronavePassageiros,
    AeronaveCarga,
    AeronaveParticular
} = require("./src/domain/Aeronave");

// Class Piloto
const Piloto = require("./src/domain/Piloto")
// Class Aerovia
const Aerovia = require("./src/domain/Aerovia");

// Class Sistema
const Sistema = require("./src/sistema")

// OcupacaoAeroVia

const OcupacaoAerovia = require("./src/ocupacaoAerovia")

// Test implementation
function testarSistema() {
    const sistema = new Sistema();

    // Add some aircraft
    const aeronave1 = new AeronavePassageiros('AB123', 900, 12000, 'LATAM', 180);
    const aeronave2 = new AeronaveCarga('CD456', 700, 15000, 'GOL', 10);
    const aeronave3 = new AeronaveParticular('PT456', 1000, 2200, "ANY-IMP");
    sistema.servicoAeronaves.adicionarAeronave(aeronave1);
    sistema.servicoAeronaves.adicionarAeronave(aeronave2);
    sistema.servicoAeronaves.adicionarAeronave(aeronave3);

    // Add some pilots
    const piloto1 = new Piloto('PIL123', 'João', true);
    const piloto2 = new Piloto('PIL433', 'José', false);
    sistema.servicoPilotos.adicionarPiloto(piloto1);
    sistema.servicoPilotos.adicionarPiloto(piloto2);

    // Add some aerovias
    const aerovia1 = new Aerovia('AV001', 'São Paulo', 'Rio de Janeiro', 700);
    const aerovia2 = new Aerovia('AV002', 'Rio de Janeiro', 'São Paulo', 700);
    const aerovia3 = new Aerovia('AV011', 'São Paulo', 'Recife', 2000);
    const aerovia4 = new Aerovia('AV012', 'Recife', 'São Paulo', 2000);
    sistema.servicoAerovias.adicionarAerovia(aerovia1);
    sistema.servicoAerovias.adicionarAerovia(aerovia2);
    sistema.servicoAerovias.adicionarAerovia(aerovia3);
    sistema.servicoAerovias.adicionarAerovia(aerovia4);



    // console.log("\n\n==========================SERVICO AEROVIAS =======================\n")

    // console.log(sistema.listarAltitudesLivres("AV001", "15/06/2024"))
 
    // const plan = sistema.aprovarPlanoDeVoo(aeronave1, piloto1, aerovia4, 29000, "15/09/2024", "15:00")
    // console.log("Plan :", plan)

    // console.log(sistema.listarAltitudesLivres("AV001", "15/06/2024"))



    console.log("\n\n==========================SERVICO OCUPACAO AEROVIA =======================\n")
    const oa = new OcupacaoAerovia();

    // console.log(oa.altitudesLivres("0", "15/09/2024", "10:00"))


    oa.ocuparAerovia("0", "15/09/2024", 26000, [1, 2])
    oa.ocuparAerovia("0", "15/09/2024", 30000, [0, 1])
    oa.ocuparAerovia("0", "15/09/2024", 28000, [3, 4])
    oa.ocuparAerovia("0", "15/09/2024", 28000, [7, 8])
    oa.ocuparAerovia("0", "15/09/2024", 30000, [5, 8])
    oa.ocuparAerovia("0", "15/09/2024", 32000, [9, 10])
    oa.ocuparAerovia("0", "15/09/2024", 34000, [11, 12])
    // this.ocupacaoAerovia.ocuparAerovia(aerovia.id, data, altitude, slots)

    // console.log(oa.altitudesLivres("0", "15/09/2024", "03:00"))
    // console.log(oa.altitudesLivres("0", "15/09/2024", "08:00"))

    console.log(oa.isOcupado("0", "15/09/2024", 30000, [1, 2]))
    console.log(oa.isOcupado("0", "15/09/2024", 30000, [15, 18]))
    
}

// Run the test
testarSistema();
