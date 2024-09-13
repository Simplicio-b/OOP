class ServicoAerovias {
  constructor() {
      this.aerovias = [];
  }

  recupera(origem, destino) {
      return this.aerovias.filter(aerovia => aerovia.origem === origem && aerovia.destino === destino);
  }

  adicionarAerovia(aerovia) {
      this.aerovias.push(aerovia);
  }

  todas() {
      return this.aerovias;
  }
}

module.exports = ServicoAerovias;
