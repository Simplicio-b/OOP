class ServicoAerovias {
  constructor() {
      this.aerovias = [];
  }

  recupera(origem, destino) {
      return this.aerovias.filter(aerovia => aerovia.origem === origem && aerovia.destino === destino);
  }

  recuperaPorId(idAerovia) {
      return this.aerovias.find(aerovia => aerovia.id === idAerovia);
  }

  adicionarAerovia(aerovia) {
      this.aerovias.push(aerovia);
  }

  todas() {
      return this.aerovias;
  }

  /* tempo da viagem em horas 
    tamanhoAerovia - km
    velocidadeDeCruzeiro - km/hora
  */
  tempoDeViagem(tamanhoAerovia, velocidadeDeCruzeiro) {
    return tamanhoAerovia / velocidadeDeCruzeiro  
  }

  /* 
    logica para montar o slots

    hora inicial - 15
    tempo de viagem - 1 ou 1,25

    entao hora inicial + tempo de viagem = horaFinal

    se hora final == hora fechada 16:00 
    fechamos o slot - 1 e 2 coms => [15, 16]
    
    se hora final == 16:25

    fechamos os slots = [15, 16, 17]
  */
  montagemSlot(horaInicial, tempoDeViagem) {
    console.log(horaInicial)
    console.log(tempoDeViagem)

    console.log()
  }

}

module.exports = ServicoAerovias;
