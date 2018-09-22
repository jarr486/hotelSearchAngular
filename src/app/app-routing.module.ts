//Importando la utilidad modulos del core angular
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const app_routes:Routes=[
  { path: 'home', component: InicioComponent },
  { path: 'about', component: AcercadeComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home' }
];


@NgModule({
  
  imports:[
      RouterModule.forRoot(app_routes, {useHash:true} )
  ],
  exports:[
      RouterModule
  ]
  
})

export class AppRoutingModule{ }



