import { Component } from '@angular/core';
import {InformacionpersService} from "../../services/informacionpers.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {

constructor(public _is: InformacionpersService){

}
}
