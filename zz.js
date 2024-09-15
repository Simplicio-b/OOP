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
// Class Sistema
const Sistema = require("./sistema")

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
    const piloto2 = new Piloto('PIL456', 'Maria', true);
    const piloto3 = new Piloto('PIL433', 'José', false);
    sistema.servicoPilotos.adicionarPiloto(piloto1);
    sistema.servicoPilotos.adicionarPiloto(piloto2);
    sistema.servicoPilotos.adicionarPiloto(piloto3);

    // Add some aerovias
    const aerovia1 = new Aerovia('AV001', 'São Paulo', 'Rio de Janeiro', 700);
    const aerovia2 = new Aerovia('AV002', 'Rio de Janeiro', 'São Paulo', 700);
    const aerovia3 = new Aerovia('AV011', 'São Paulo', 'Recife', 2000);
    const aerovia4 = new Aerovia('AV012', 'Recife', 'São Paulo', 2000);
    sistema.servicoAerovias.adicionarAerovia(aerovia1);
    sistema.servicoAerovias.adicionarAerovia(aerovia2);
    sistema.servicoAerovias.adicionarAerovia(aerovia3);
    sistema.servicoAerovias.adicionarAerovia(aerovia4);


    // Create and approve a flight plan
    // const planoDeVoo = new PlanoDeVoo('PL001', 'PIL123', 'AV001', new Date(), '12:00', 30000, [1, 2], false);
    // const planoDeVoo1 = new PlanoDeVoo('PL002', 'PIL456', 'AV011', new Date(), '18:00', 25000, [1, 2], false);
    // sistema.aprovarPlanoDeVoo(planoDeVoo);
    // sistema.aprovarPlanoDeVoo(planoDeVoo1);

    // List aircraft, pilots, and flight plans
    // console.log("SERVICO AERONAVES\n")
    // console.log(sistema.listarAeronaves());
    // console.log("\nSERVICO PILOTOS\n")
    // console.log(sistema.servicoPilotos.todos());
    // console.log(sistema.servicoPilotos.recupera('PIL123'))
    // console.log("\nSERVICO PLANOS DE VOO\n")
 
    // console.log(sistema.servicoPlanos.recuperar("PL002"));

    console.log("\n\n==========================SERVICO AEROVIAS =======================\n")
    // console.log(sistema.servicoAerovias.todas())

    /* • Listar as aerovias existentes entre dois aeroportos.
        o Deve apresentar na tela a lista de todas as aerovias que partem do aeroporto A para o
        aeroporto B.
    */
    // console.log(sistema.servicoAerovias.recupera("São Paulo", "Recife"), "\n")
    /* • Listar as altitudes livres em uma determinada aerovia em um determinado horário.
        o Deve apresentar na tela a lista de altitudes livres em uma determinada aerovia em um
        determinado horário.
    */
    // console.log(sistema.listarAltitudesLivres("São Paulo", "Recife"), "\n")
    /* 
        Submeter um plano de voo para aprovação (retorna o número do plano aprovado).
        o Deve permitir que o piloto submeta um plano de voo completo. O sistema analisa se todos
        os dados são consistentes, se a aerovia/altitude estão livres nos horários solicitados e todas
        as restrições que se aplicam a aeronave foram respeitadas (ver seção: detalhamento das
        entidades). Em caso positivo deve atribuir um identificador numérico para o plano de voo,
        armazenar o mesmo no sistema e marcar a respectiva aerovia/altitude como ocupada nos
        horários indicados. Por fim deve retornar o identificador do plano de voo aprovado.
    */
    const planoDeVoo0 = new PlanoDeVoo('PL433', 'PIL456', 'AV011', new Date(), '12:00', 30000, [1, 2], false);
    const planoDeVoo1 = new PlanoDeVoo('PL002', 'PIL433', 'AV001', new Date(), '18:00', 25000, [1, 2], false);
    const planoDeVoo2 = new PlanoDeVoo('PL008', 'PIL000', 'AV012', new Date(), '18:00', 25000, [1, 2], false);
 
    sistema.aprovarPlanoDeVoo(planoDeVoo0, aeronave3)
    // sistema.aprovarPlanoDeVoo(planoDeVoo1, aeronave2)
    // sistema.aprovarPlanoDeVoo(planoDeVoo2, aeronave3)
    // console.log(sistema.listarPlanos(), "\n");

    // • Listar um plano a partir do número.
   
    // console.log(Object.getPrototypeOf(aeronave1))
    // console.log(Object.getPrototypeOf(aeronave2))
    // console.log()
    // console.log(sistema.servicoPlanos.recuperar('PL002'), "\n");


    // REGRAS DE NEGOCIO 

    

    /* 
        REGRA DE NEGOCIO ALTITUDES

        Como já foi visto no enunciado geral, as aerovias são divididas em altitudes. Por simplicidade
        iremos assumir que todas as aerovias são divididas em 10 altitudes começando em 25.000 pés
        até 35.000 pés. 

    	REGRA DE NEGOCIO PARA PLANO DE VOO

        Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. Aeronaves particulares
        de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. Aeronaves de carga só podem
        voar entre a meia noite e as 6:00 da manhã.

        Para que um plano de voo possa ser aprovado as seguintes condições tem de ser satisfeitas:
        • A habilitação do piloto tem de estar ativa;
        • A aeronave tem de ter autonomia para voar o trecho (a autonomia tem de ser 10% maior
        que o tamanho da aerovia);
        • A altitude escolhida tem de ser compatível com o tipo de aeronave;
        • Não pode haver restrições de horário para o tipo de aeronave;
        • Os slots de horário necessários têm de estar livres.

    */
}

// Run the test
testarSistema();
