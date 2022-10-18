import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from './module/forms/forms.module';
import { FormulirModule } from './module/formulir/formulir.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from './core/layouts/layouts.module';
import { ProfileModule } from './module/profile/profile.module';
import { BerandaModule } from './module/beranda/beranda.module';
import { CoreModule } from './core/core.module';
import { JobListModule } from './module/job-list/job-list.module';
import { LoginModule } from './module/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    SharedModule
    // FormsModule,
    // FormulirModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
