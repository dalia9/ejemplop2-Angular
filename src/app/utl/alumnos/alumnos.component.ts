import { Component, Input} from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent{

  //@Input()alumnosUtl:AlumnosUtl[]=[];
  get alumnos(){
    return this.alumnosutl.alumnos;
  }
  constructor(private alumnosutl:UtlService){}

}
