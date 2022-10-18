import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobUpdateRoutingModule } from './job-update-routing.module';
import { JobUpdateComponent } from './job-update.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    JobUpdateComponent
  ],
  imports: [
    CommonModule,
    JobUpdateRoutingModule,
    SharedModule
  ],
  exports: [
    JobUpdateComponent
  ]
})
export class JobUpdateModule { }
