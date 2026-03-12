//Edad personas
// la edad de varias personas, indicar la edad promedio. 
// Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18
// La salida requerida presenta el siguiente formato:



import Cl_mPromedio from "../models/Cl_mPromedio.js";
import Cl_vPromedio from "../views/Cl_vPromedio.js";
import Cl_cPersonas from "./Cl_cPersonas.js";

export default class Cl_cPromedio {
    private mPromedio: Cl_mPromedio = new Cl_mPromedio();
    private vPromedio: Cl_vPromedio = new Cl_vPromedio();

    constructor() {
        this.vPromedio.btAgregar.onclick = () => this.procesarPersona();
    }

    procesarPersona() {
        new Cl_cPersonas({
            callback: (persona) => {
                if (persona !== null) {
                this.mPromedio.procesar(persona);
                this.vPromedio.reportar({ promedio: this.mPromedio, personas: persona });
                    
                    
                    
                }
            },
        });
    }
}