import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DaftarComponent } from './daftar/daftar.component';
import { SederhanaComponent } from './sederhana/sederhana.component';

const routes: Routes = [
  {
    path: 'sederhana',
    component: SederhanaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'daftar',
    component: DaftarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
