class ServicoPilotos {
  constructor() {
    this.pilotos = [];
  }

  recupera(matricula) {
    return this.pilotos.find(piloto => piloto.matricula === matricula);
  }

  todos() {
    return this.pilotos;
  }

  adicionarPiloto(piloto) {
    this.pilotos.push(piloto);
  }

  pilotoApto(matricula) {
    const piloto = this.recupera(matricula)

    // validando se o piloto existe
    if(piloto == undefined || piloto == null) {
      return false
    }

    // validando se a matricula do piloto esta ativa
    if(!piloto.habilitacaoAtiva) {
      return false
    }

    return true
  }

}

module.exports = ServicoPilotos