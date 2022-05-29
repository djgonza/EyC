import { v4 as uuidv4 } from 'uuid';
export class Centro {
  public Id: string;
  public Denominacion: string;
  public Nima: string;
  public Entidad: string | undefined;

  constructor(denominacion: string, nima: string, entidad?: string, id?: string) {
    this.Id = id || uuidv4();
    this.Denominacion = denominacion;
    this.Nima = nima;
    this.Entidad = entidad;
  }
}
