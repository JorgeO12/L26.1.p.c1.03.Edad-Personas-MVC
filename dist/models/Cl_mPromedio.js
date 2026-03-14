export default class Cl_mPromedio {
    totalEdad;
    totalPersonas;
    mayorEdad;
    constructor() {
        this.totalEdad = 0;
        this.totalPersonas = 0;
        this.mayorEdad = 0;
    }
    procesar(person) {
        if (person.edad >= 18) {
            ++this.mayorEdad;
        }
        this.totalEdad += person.edad;
        this.totalPersonas++;
    }
    calcularPromedio() {
        return this.totalEdad / this.totalPersonas;
    }
    registros() {
        return this.totalPersonas;
    }
    mayoriaEdad() {
        return this.mayorEdad;
    }
}
