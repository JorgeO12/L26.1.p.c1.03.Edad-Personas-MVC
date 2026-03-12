export default class cl_vPersonas {
    vista: HTMLElement;
    inEdad: HTMLInputElement;
    btAceptar: HTMLButtonElement;
    btCancelar: HTMLButtonElement;

    constructor() {
        this.vista = document.getElementById("persona") as HTMLElement;
        this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
        this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
        this.mostrar();
    } 

    get edad(): number {
        return +this.inEdad.value;
    }

    mostrar(): void {
        this.vista.hidden = false;
    }

    ocultar(): void {
        this.vista.hidden = true;
    }
    
}