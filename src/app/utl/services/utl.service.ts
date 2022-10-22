import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:22
    },

    {
      nombre:'Veronica',
      edad:25
    },

    {
      nombre:'Luisa',
      edad:20
    }

  ]

  get alumnos():AlumnosUtl[]{
    return [...this.alumnos] //con los tres puntos le decimos que hacemos una separacion en el arreglo
  }

  constructor() { }

  agregarNuevoAlumno(pedro:AlumnosUtl){ //argumeto es una variable
    this._alumnosUtl.push(pedro);
   
  }
  
  muestra(){
    console.log('nombre');
  }
}
