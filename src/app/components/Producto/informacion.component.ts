import { Component } from '@angular/core';
import {InformacionpersService} from "../../services/informacionpers.service";
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',

})
export class InformacionComponent  {
  anio:number = new Date().getFullYear();
  date:number= new Date().getDate();
  mes:number = new Date().getMonth()+1;
  constructor(public _is:InformacionpersService){

  }




}
