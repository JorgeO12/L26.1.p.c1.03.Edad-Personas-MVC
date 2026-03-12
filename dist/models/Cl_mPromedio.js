export default class Cl_mPromedio {
    totalEdad;
    totalPersonas;
    constructor() {
        this.totalEdad = 0;
        this.totalPersonas = 0;
    }
    procesar(person) {
        this.totalEdad += person.edad;
        this.totalPersonas++;
    }
    calcularPromedio() {
        return this.totalEdad / this.totalPersonas;
    }
    registros() {
        return this.totalPersonas;
    }
}
