import { Component} from '@angular/core';
import {InformacionpersService} from "../../services/informacionpers.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

})
export class AboutComponent {

  constructor(public _is:InformacionpersService){

  }
}
