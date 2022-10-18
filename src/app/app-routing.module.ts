import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContentComponent } from './core/layouts/admin-content/admin-content.component';
import { JobListContentComponent } from './core/layouts/job-list-content/job-list-content.component';
import { WelcomeContentComponent } from './core/layouts/welcome-content/welcome-content.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/module/login/login.module').then((x) => x.LoginModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../app/module/profile/profile.module').then((x) => x.ProfileModule)
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule)
  // },
  {
    path: 'admin/report',
    loadChildren: () => import('../app/module/admin/report/report.module').then((x) => x.ReportModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
  },
  {
    path: 'formulir',
    loadChildren: () => import('../app/module/formulir/formulir.module').then((x) => x.FormulirModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule)
  },
  // {
  //   path: 'home',
  //   component: WelcomeContentComponent,
  //   children: [
  //     {
  //       loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule)
  //     }
  //   ]
  // },
  {
    path: 'beranda',
    loadChildren: () => import('../app/module/beranda/beranda.module').then((x) => x.BerandaModule)
  },
  {
    path: 'administrator',
    loadChildren: () => import('../app/module/administrator/administrator.module').then((x) => x.AdministratorModule)
  },
  {
    path: 'job-list',
    loadChildren: () => import('../app/module/job-list/job-list.module').then((x) => x.JobListModule)
  },
  {
    path: 'job-update',
    loadChildren: () => import('../app/module/job-update/job-update.module').then((x) => x.JobUpdateModule)
  },
  // {
  //   path: 'admin',
  //   component: AdminContentComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule)
  //     }
  //   ],
  // },
  // {
  //   path: 'job-list',
  //   component: JobListContentComponent,
  //   children: [
  //     {
  //       loadChildren: () => import('../app/module/job-list/job-list.module').then((x) => x.JobListModule)
  //     }
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
