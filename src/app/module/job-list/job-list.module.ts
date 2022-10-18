import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListRoutingModule } from './job-list-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { JobListComponent } from './job-list.component';
import { CoreModule } from 'app/core/core.module';


@NgModule({
  declarations: [
    JobListComponent
  ],
  imports: [
    CommonModule,
    JobListRoutingModule,
    SharedModule
  ],
  exports: [
    JobListComponent
  ]
})
export class JobListModule { }
