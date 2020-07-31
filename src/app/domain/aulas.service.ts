import { Injectable } from "@angular/core";

@Injectable()
export class AulasService {
    private aulas : Array<string> = [];

    constructor() {
        
    }

    Agregar(cadena : string)
    {
        this.aulas.push(cadena);
    }

    buscar()
    {
        return this.aulas;
    }
}