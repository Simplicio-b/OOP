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
}

module.exports = ServicoPilotos