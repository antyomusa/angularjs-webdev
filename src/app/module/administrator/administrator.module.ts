import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { SharedModule } from 'app/shared/shared.module';
import { CoreModule } from 'app/core/core.module';


@NgModule({
  declarations: [
    AdministratorComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SharedModule
  ]
})
export class AdministratorModule { }
