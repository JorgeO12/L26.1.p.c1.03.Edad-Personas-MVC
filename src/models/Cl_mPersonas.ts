export default class Cl_mPersonas {
    private _edad: number;

    constructor(edad: number) {
        this._edad = edad;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get edad(): number {
        return this._edad;
    }
    }