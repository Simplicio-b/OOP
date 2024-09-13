class ServicoAeronaves {
    constructor() {
        this.aeronaves = [];
    }
    
    todas() {
        return this.aeronaves;
    }

    adicionarAeronave(aeronave) {
        this.aeronaves.push(aeronave);
    }
}

module.exports = ServicoAeronaves
