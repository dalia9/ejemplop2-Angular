import { Component } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../services/utl.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent{

/*   alumnosUtl:AlumnosUtl[]=[
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

  ] */

  regAlum:AlumnosUtl={
    nombre:'',
    edad:0
  }

  constructor(){

  }



}
