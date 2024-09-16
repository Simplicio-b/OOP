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

  tempoDeViagem(tamanhoAerovia, velocidadeDeCruzeiro) {
    return tamanhoAerovia / velocidadeDeCruzeiro  
  }

  montagemSlot(horaInicial, tempoDeViagem) {
    const slots = []
    const horaInicialViagem =  Number.parseInt(horaInicial.split(":")[0])
    const horaFinalViagem = Math.ceil(horaInicialViagem + tempoDeViagem)

    for (let slot = horaInicialViagem; slot <= horaFinalViagem; slot++) {
        slots.push(slot)
    }
    return slots
  }

}

module.exports = ServicoAerovias;
