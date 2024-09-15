class ServicoAeronaves {
    constructor() {
        this.aeronaves = [];
    }
    
    todas() {
        return this.aeronaves;
    }

    recupera(prefixo) {
        return this.aeronaves.find(aeronave => aeronave.prefixo === prefixo);
    }

    adicionarAeronave(aeronave) {
        this.aeronaves.push(aeronave);
    }
}

module.exports = ServicoAeronaves
