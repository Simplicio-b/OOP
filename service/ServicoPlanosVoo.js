class ServicoPlanos {
    constructor() {
        this.planos = [];
    }

    consista(plano) {
      // Verificação básica do plano de voo
      // if (!plano.id || !plano.matricPiloto || !plano.idAerovia || !plano.data || !plano.horario || plano.altitude <= 0) {
      //   throw new Error("Plano de voo inválido");
      // }
        this.planos.push(plano);
    }

    recuperar(id) {
        return this.planos.find(plano => plano.id === id);
    }

    todos() {
        return this.planos;
    }
}

module.exports = ServicoPlanos