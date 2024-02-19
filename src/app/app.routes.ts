import { Routes } from '@angular/router';
import { PortfolioWebComponent } from './template/portfolio-web/portfolio-web.component';
import { AdminComponent } from './template/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioWebComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];
