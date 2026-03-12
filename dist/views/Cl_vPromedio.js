export default class Cl_vPromedio {
    vista;
    lblPromedio;
    btAgregar;
    lblRegistros;
    constructor() {
        this.vista = document.getElementById("promedio");
        this.lblPromedio = document.getElementById("promedio_lblPromedio");
        this.btAgregar = document.getElementById("promedio_btAgregar");
        this.lblRegistros = document.getElementById("promedio_lblRegistros");
        this.mostrar();
    }
    reportar({ promedio, personas }) {
        this.lblPromedio.innerText = `${promedio.calcularPromedio().toFixed(2)}`;
        this.lblRegistros.innerHTML = `${promedio.registros()}`;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
