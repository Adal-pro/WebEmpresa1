import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {HttpClient} from "@angular/common/http";
//Rutas

import {app_routing} from "./app.routes";

//Servicios

import {InformacionpersService} from "./services/informacionpers.service";

//Componentes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/about/about.component';
import { InformacionComponent } from './components/Producto/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
   // HttpClient
  ],
  providers: [
    InformacionpersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
