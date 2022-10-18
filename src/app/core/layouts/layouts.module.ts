import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { TopbarAdminComponent } from './topbar-admin/topbar-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { LoginContentComponent } from './login-content/login-content.component';
import { JobListContentComponent } from './job-list-content/job-list-content.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    FooterComponent,
    ProfileContentComponent,
    TopbarAdminComponent,
    FooterAdminComponent,
    LoginContentComponent,
    JobListContentComponent,
    WelcomeContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    FooterComponent,
    ProfileContentComponent,
    TopbarAdminComponent,
    FooterAdminComponent,
    LoginContentComponent,
    JobListContentComponent,
    WelcomeContentComponent
  ]
})
export class LayoutsModule { }
