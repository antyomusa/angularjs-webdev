import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { SederhanaComponent } from './sederhana/sederhana.component';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';


@NgModule({
  declarations: [
    SederhanaComponent,
    LoginComponent,
    DaftarComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModule { }
