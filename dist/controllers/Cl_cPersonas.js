import Cl_mPersonas from "../models/Cl_mPersonas.js";
import Cl_vPersonas from "../views/Cl_vPersonas.js";
export default class Cl_cPersonas {
    vista = new Cl_vPersonas();
    callback;
    constructor({ callback }) {
        this.callback = callback;
        this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
        this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mPersonas(this.vista.edad));
        this.vista.ocultar();
    }
}
