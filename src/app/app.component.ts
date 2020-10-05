import { Component } from '@angular/core';
import {InformacionpersService} from "./services/informacionpers.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _is: InformacionpersService){

  }
  //title = 'web1';
}
