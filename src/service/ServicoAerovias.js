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
}

module.exports = ServicoAerovias;
