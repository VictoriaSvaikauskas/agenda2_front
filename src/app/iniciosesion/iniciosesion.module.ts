import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciosesionRoutingModule } from './iniciosesion-routing.module';
import { IniciosesionComponent } from './iniciosesion.component';


@NgModule({
  declarations: [
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    IniciosesionRoutingModule
  ]
})
export class IniciosesionModule { }
