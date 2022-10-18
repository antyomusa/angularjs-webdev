import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileRoutingModule } from './profile.routing.module';
import { UpdateComponent } from './update/update.component';
import { LayoutsModule } from 'app/core/layouts/layouts.module';



@NgModule({
  declarations: [
    ProfileComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
