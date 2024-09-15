class PlanoDeVoo {
  constructor(id, matriculaPiloto, idAerovia, data, horario, altitude, slots, cancelado = false) {
      this.id = id;
      this.matriculaPiloto = matriculaPiloto;
      this.idAerovia = idAerovia;
      this.data = data;
      this.horario = horario;
      this.altitude = altitude;
      this.slots = slots;
      this.cancelado = cancelado;
  }
}
  

module.exports = PlanoDeVoo