import { v4 as uuidv4 } from 'uuid';
export class Entidad {

    public Id: string; 
    public Denominacion: string;
    public Nif: string;

    constructor(denominacion: string, nif: string, id?: string) {
        this.Id = id || uuidv4();
        this.Denominacion = denominacion;
        this.Nif = nif;
    }
}