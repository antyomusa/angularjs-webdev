import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from 'app/core/layouts/layouts.module';
import { CoreModule } from 'app/core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    LayoutsModule
  ]
})
export class SharedModule { }
