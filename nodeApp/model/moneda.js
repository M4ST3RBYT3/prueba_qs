let Moneda = class {
    constructor(fecha, venta, compra, pais_idPais) {
      this.fecha = fecha;
      this.venta = venta;
      this.compra = compra;
      this.pais_idPais = pais_idPais;
    }
  };

module.exports = {
    Moneda
}