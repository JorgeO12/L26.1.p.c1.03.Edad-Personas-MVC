export default class Cl_mPersonas {
    _edad;
    constructor(edad) {
        this._edad = edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get edad() {
        return this._edad;
    }
}
