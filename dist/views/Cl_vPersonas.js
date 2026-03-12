export default class cl_vPersonas {
    vista;
    inEdad;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("persona");
        this.inEdad = document.getElementById("persona_inEdad");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.mostrar();
    }
    get edad() {
        return +this.inEdad.value;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
