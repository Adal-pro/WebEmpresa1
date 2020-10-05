import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class InformacionpersService {

  constructor(public http:HttpClient) {
    this.http.get("assets/data/info.paginas.json").subscribe(data =>{
        console.log(data);
     })

   }
}
