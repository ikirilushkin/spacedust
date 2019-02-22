import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CatalogComponent} from './catalog/catalog.component';
import {ExoplanetComponent} from './exoplanet/exoplanet.component';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import {ExoplanetNewComponent} from './exoplanet-new/exoplanet-new.component';
import {RoleGuardService as RoleGuard} from './auth/role-guard.service';

export const ROUTES: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'exoplanet/:id',
    component: ExoplanetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-exoplanet',
    component: ExoplanetNewComponent,
    canActivate: [RoleGuard],
    data: {expectedRole: 'admin'},
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
];
