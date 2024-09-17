// IMPORTS AERONAVES
const { 
    AeronavePassageiros,
    AeronaveCarga,
    AeronaveParticular
} = require("./src/domain/Aeronave");

const Piloto = require("./src/domain/Piloto")
const Aerovia = require("./src/domain/Aerovia");
const Sistema = require("./src/sistema")

//  TESTE DE IMPLMENTACAO
function testarSistema() {
    const sistema = new Sistema();

    // Add Aeronaves
    const aeronave1 = new AeronavePassageiros('AB123', 900, 12000, 'LATAM', 180);
    const aeronave2 = new AeronaveCarga('CD456', 700, 15000, 'GOL', 10);
    const aeronave3 = new AeronaveParticular('PT456', 1000, 2200, "ANY-IMP");
    sistema.servicoAeronaves.adicionarAeronave(aeronave1);
    sistema.servicoAeronaves.adicionarAeronave(aeronave2);
    sistema.servicoAeronaves.adicionarAeronave(aeronave3);

    // Add pilots
    const piloto1 = new Piloto('PIL123', 'João', true);
    const piloto2 = new Piloto('PIL433', 'José', false);
    sistema.servicoPilotos.adicionarPiloto(piloto1);
    sistema.servicoPilotos.adicionarPiloto(piloto2);

    // Add aerovias
    const aerovia1 = new Aerovia('AV001', 'São Paulo', 'Rio de Janeiro', 700);
    // const aerovia2 = new Aerovia('AV002', 'Rio de Janeiro', 'São Paulo', 700);
    // const aerovia3 = new Aerovia('AV011', 'São Paulo', 'Recife', 2000);
    const aerovia4 = new Aerovia('AV012', 'Recife', 'São Paulo', 2000);
    sistema.servicoAerovias.adicionarAerovia(aerovia1);
    // sistema.servicoAerovias.adicionarAerovia(aerovia2);
    // sistema.servicoAerovias.adicionarAerovia(aerovia3);
    sistema.servicoAerovias.adicionarAerovia(aerovia4);


    console.log("\n\n========================== TESTANDO =======================\n")

    // LISTAR AEROVIAS EXISTENTES
    console.log(sistema.servicoAerovias.todas(), "\n")

    // LISTA ALTITUDES LIVRES
    console.log("ALTITUDES LIVRES \n", sistema.listarAltitudesLivres("AV012", "15/09/2024", "15:00"), "\n")
 
    // CRIAR PLANO DE VOO
    const plan1 = sistema.aprovarPlanoDeVoo(aeronave1, piloto1, aerovia4, 29000, "15/09/2024", "15:00")
    console.log("Plan :", plan1)

    console.log(sistema.listarAltitudesLivres("AV012", "15/09/2024", "16:00"), "\n")

    const plan2 = sistema.aprovarPlanoDeVoo(aeronave1, piloto1, aerovia4, 29000, "15/09/2024", "15:00")
    console.log("CRIACAO DE PLANO COM ERRO :", plan2, "\n")

    // BUSCAR PLANO DE VOO A PARTIR DE UM NUMERO
    console.log("BUSCANDO PLANO DE VOO POR ID:", sistema.servicoPlanos.recuperar(plan1.id), "\n")
    
}

testarSistema();
