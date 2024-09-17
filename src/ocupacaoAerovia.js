class OcupacaoAerovia {
    constructor() {
        this.ocupacoes = [];
    }


    #filtrarOcupacoesPorIdEDataHorario(idAerovia, data, horario) {
        const hora = Number.parseInt(horario.split(":")[0])
        const ocupacoesIdeData = this.ocupacoes.filter(element => (element.idAerovia == idAerovia && element.data == data))
        const ocupacaoIdDataEHora = ocupacoesIdeData.filter(e => e.slot.indexOf(hora) !== -1)
    
        return ocupacaoIdDataEHora
    }

    altitudesLivres(idAerovia, data, horario) {
        const altitudes = Array.from({ length: 11 }, () => 24).map((element, index) => (element + (1+ index)) * 1000)
        const ocupacoesPorIdEData = this.#filtrarOcupacoesPorIdEDataHorario(idAerovia, data, horario)
       
        if(this.ocupacoes.length == 0 || ocupacoesPorIdEData == 0) {
            return altitudes
        }
        var arr = ocupacoesPorIdEData.map(e => e.altitude);
        var altitudesLivres = altitudes.filter((este, i) => arr.indexOf(este) == -1);

        return altitudesLivres;
    }

    ocuparAerovia(idAerovia, data, altitude, slot) {
        this.ocupacoes.push({ idAerovia, data, altitude, slot });
    }

    isOcupado(idAerovia, data, altitude, slot) {
        if(this.ocupacoes.length == 0) {
           return false
        }
        const number = (n) => n > 10 ? n : `0${n}`
        const horarios = slot.map(e => `${number(e)}:00`)

        /* 
            BUSCANDO AS ALTITUDES LIVRES POR ID, DATA, HORA.
            ESPERO RECEBER UM ARRAY DE ARRAYS (CONTENDO TODAS AS ALTITUDESLIVRES)
        */
        const altitutdeLivrePorSlot = horarios.map(hora => this.altitudesLivres(idAerovia, data, hora));
        /* 
            AGORA VOU FAZER UM MAP NO ARRAY QUE ME RETORNA AS ALTITUDES LIVRES VALIDANDO SE MINHA altitude EXISTE
            DENTRO DELA CASO EXISTE O indexOf ME RETORNARA A POSICAO DO VALOR altitude DENTRO DO ARRAY CASO N
            EXISTA ME RETORNARA UM -1 

            APOS ISSO FACO UM FILTRO VALIDANDO SE NO NOVO ARRAY GERADO PELO MAP EXISTE UM -1 
            CASO EXISTA UM VALOR -1 SIGNIFICA QUE  uma OU n PARTES DO SLOT ESTA COMPROMETIDA
            ASSIM A ALTITUDE ESTA OCUPADA
        */
        const alt_ocupada = altitutdeLivrePorSlot.map(el => el.indexOf(altitude)).filter(val => val == -1); 

        if(alt_ocupada.length > 0) {
            return true
        }

        return false
    }
}

module.exports = OcupacaoAerovia
