import Cl_mPersonas from "../models/Cl_mPersonas";
import Cl_mPromedio from "../models/Cl_mPromedio";

export default class Cl_vPromedio {
    vista: HTMLElement;
    lblPromedio: HTMLElement;
    btAgregar: HTMLButtonElement;
    lblRegistros: HTMLElement;

    constructor() {
        this.vista = document.getElementById("promedio") as HTMLElement;
        this.lblPromedio = document.getElementById("promedio_lblPromedio") as HTMLElement;
        this.btAgregar = document.getElementById("promedio_btAgregar") as HTMLButtonElement;
        this.lblRegistros = document.getElementById("promedio_lblRegistros") as HTMLElement;
        this.mostrar();
    }

    reportar({ promedio, personas }: { promedio: Cl_mPromedio; personas: Cl_mPersonas }): void {
        this.lblPromedio!.innerText = `${promedio.calcularPromedio().toFixed(2)}`;
        this.lblRegistros!.innerHTML = `${promedio.registros()}`;
    }

    mostrar(): void {
        this.vista.hidden = false;
    }

    ocultar(): void {
        this.vista.hidden = true;
    }

}