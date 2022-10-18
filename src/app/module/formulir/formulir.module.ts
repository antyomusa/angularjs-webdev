import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulirRoutingModule } from './formulir-routing.module';
import { SimpleComponent } from './simple/simple.component';


@NgModule({
  declarations: [
    SimpleComponent
  ],
  imports: [
    CommonModule,
    FormulirRoutingModule
  ]
})
export class FormulirModule { }
