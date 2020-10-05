
import {RouterModule,  Routes } from '@angular/router';


import {
 AboutComponent,
 BodyComponent,
 InformacionComponent
} from "./components/index.paginas";

const app_routes: Routes =[
  {path:'home',component:InformacionComponent },
  {path:'about', component: AboutComponent},
  {path:'body', component: BodyComponent},
  {path: '**',pathMatch: 'full',redirectTo:'home'}
];
export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
