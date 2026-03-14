import Cl_mPersonas from "./Cl_mPersonas";

export default class Cl_mPromedio {
    private totalEdad: number;
    private totalPersonas: number;
    private mayorEdad: number;

    constructor() {
        this.totalEdad = 0;
        this.totalPersonas = 0;
        this.mayorEdad = 0;
    }

    procesar(person: Cl_mPersonas): void {
        if (person.edad >= 18) {
            ++this.mayorEdad;
        }
        this.totalEdad += person.edad;
        this.totalPersonas++;
    }

    calcularPromedio(): number {
        return this.totalEdad / this.totalPersonas;

    }
    registros(): number {
        return this.totalPersonas;

    }

    mayoriaEdad(): number {
        return this.mayorEdad;
    }
}
        
    