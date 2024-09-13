// // IMPORTS
const Piloto = require("./domain/Piloto")
const ServicoPilotos = require("./service/ServicoPilotos")

const ServicoAerovias = require("./service/ServicoAerovias")
const Aerovia = require("./domain/Aerovia");

const { 
    AeronavePassageiros,
    AeronaveCarga,
    AeronaveComercial,
    AeronaveParticular
} = require("./domain/Aeronave");

const ServicoAeronaves = require("./service/ServicoAeronaves");

const ServicoPlanos = require("./service/ServicoPlanosVoo");
const PlanoDeVoo = require("./domain/PlanoDeVoo");
// // ESCOPO DAS FUNCIONALIDADES REFERENTE A PILOTOS


// // Exemplo de uso: Pilotos
// const servicoPilotos = new ServicoPilotos();
// const piloto1 = new Piloto('10240', 'João Silva', true);
// const piloto2 = new Piloto('63330', 'Maria Santos', false);
  
// servicoPilotos.adicionaPiloto(piloto1);
// servicoPilotos.adicionaPiloto(piloto2);
  
// console.log("================= PILOTOS =================")
// console.log(servicoPilotos.recupera('10240').exibirDados()); 
// console.log(servicoPilotos.todos()); 
  
// // FIM DO ESCOPO DAS FUNCIONALIDADES DE PILOTOS

// // ESCOPO DAS FUNCIONALIDADES REFERENTE AEROVIAS 

  
// // Exemplo de uso: Aerovias
// const servicoAerovias = new ServicoAerovias();
// const aerovia1 = new Aerovia('001', 'São Paulo', 'Rio de Janeiro', 400);
// const aerovia2 = new Aerovia('002', 'São Paulo', 'Belo Horizonte', 600);
  
// servicoAerovias.adicionaAerovia(aerovia1);
// servicoAerovias.adicionaAerovia(aerovia2);
  
// console.log("\n================= AEROVIAS =================")
// console.log(servicoAerovias.recupera('São Paulo', 'Rio de Janeiro')); // [Aerovia]
// console.log(servicoAerovias.todos()); // [Aerovia, Aerovia]
// // FIM DO ESCOPO DAS FUNCIONALIDADES REFERENTE AEROVIAS 


// // ESCOPO DAS FUNCIONALIDADES REFERENTE A AERONAVES

// // Exemplo de uso: Aero Naves
// console.log("\n================= Aeronaves =================")
// const servicoAeronaves = new ServicoAeronaves();

// const aeronavePassageiros = new AeronavePassageiros('AB123', 850, 12000, 180);
// const aeronaveCarga = new AeronaveCarga('CD456', 700, 15000, 20000);
// const aeronaveParticular = new AeronaveParticular('EF789', 650, 8000, 'John Doe');
// const aeronaveComercial = new AeronaveComercial('GH012', 900, 13000, 'AirFly');

// servicoAeronaves.adicionarAeronave(aeronavePassageiros);
// servicoAeronaves.adicionarAeronave(aeronaveCarga);
// servicoAeronaves.adicionarAeronave(aeronaveParticular);
// servicoAeronaves.adicionarAeronave(aeronaveComercial);

// const todasAeronaves = servicoAeronaves.todas();
// todasAeronaves.forEach(aeronave => {
//     console.log(aeronave.detalhes());
// });
// // FIM DO ESCOPO DAS FUNCIONALIDADES REFERENTE AERONAVES 


// // ESCOPO DAS FUNCIONALIDADES REFERENTE A PLANOS DE VOO

// console.log("\n================= Plano de voos =================")
// const servicoPlanos = new ServicoPlanos();
// const plano1 = new PlanoDeVoo('001', 'P123', 'A001', new Date(), '14:00', 35000, [1, 2, 3], false);
// const plano2 = new PlanoDeVoo('002', 'P456', 'A002', new Date(), '15:00', 36000, [4, 5, 6], true);
  
// servicoPlanos.consiste(plano1);
// servicoPlanos.consiste(plano2);
  
// console.log(servicoPlanos.recupera('001').exibirDados());
// console.log(servicoPlanos.todos());
// // FIM ESCOPO DAS FUNCIONALIDADES REFERENTE A PLANOS DE VOO


















// 

class OcupacaoAerovia {
    constructor() {
      this.ocupacoes = []; // Lista para armazenar as ocupações das aerovias
    }
  
    altitudesLivres(idAerovia, data) {
      // Aqui, deve-se retornar as altitudes livres para a aerovia na data especificada.
      // Para simplificação, vamos retornar um array de altitudes não ocupadas.
      const altitudesOcupadas = this.ocupacoes
        .filter(ocupacao => ocupacao.idAerovia === idAerovia && ocupacao.data.getTime() === data.getTime())
        .map(ocupacao => ocupacao.altitude);
  
      // Exemplo de altitudes disponíveis, pode ser ajustado conforme o cenário
      const altitudesTotais = [30000, 32000, 34000, 36000, 38000];
  
      return altitudesTotais.filter(altitude => !altitudesOcupadas.includes(altitude));
    }
  
    ocupa(idAerovia, data, altitude, slot) {
      // Verifica se a altitude já está ocupada antes de adicionar
      if (this.isOcupado(idAerovia, data, altitude, slot)) {
        return false; // Se já estiver ocupada, retorna falso
      }
      this.ocupacoes.push({ idAerovia, data, altitude, slot });
      return true; // Retorna verdadeiro se a ocupação for bem-sucedida
    }
  
    isOcupado(idAerovia, data, altitude, slot) {
      // Verifica se a aerovia, altitude e slot já estão ocupados
      return this.ocupacoes.some(
        ocupacao => ocupacao.idAerovia === idAerovia &&
                    ocupacao.data.getTime() === data.getTime() &&
                    ocupacao.altitude === altitude &&
                    ocupacao.slot === slot
      );
    }
  }
  
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
  
  // Exemplo de uso com as classes anteriores
//   const servicoAerovias = new ServicoAerovias();
//   const servicoPlanos = new ServicoPlanos();
//   const ocupacaoAerovia = new OcupacaoAerovia();
  
  const sistema = new Sistema();
  
  // Criando e adicionando aerovias
  const aerovia1 = new Aerovia('A001', 'São Paulo', 'Rio de Janeiro', 400);
  servicoAerovias.adicionaAerovia(aerovia1);
  
  // Criando um plano de voo
  const plano1 = new PlanoDeVoo('P001', 'P123', 'A001', new Date(), '14:00', 35000, [1, 2, 3], false);
  
  // Listando altitudes livres antes de aprovar o plano
  sistema.listarAltitudesLivres('A001', new Date());
  
  // Aprovação do plano de voo
  sistema.aprovarPlanoDeVoo(plano1);
  
  // Listando os planos após a aprovação
  sistema.listarPlanos();
  
  // Listando altitudes livres após a aprovação do plano
  sistema.listarAltitudesLivres('A001', new Date());
  