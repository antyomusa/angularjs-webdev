import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerandaRoutingModule } from './beranda-routing.module';
import { BerandaComponent } from './beranda.component';
import { SharedModule } from 'app/shared/shared.module';
import { LayoutsModule } from 'app/core/layouts/layouts.module';
import { CoreModule } from 'app/core/core.module';


@NgModule({
  declarations: [
    BerandaComponent
  ],
  imports: [
    CommonModule,
    BerandaRoutingModule,
    SharedModule,
    // CoreModule
  ]
})
export class BerandaModule { }
