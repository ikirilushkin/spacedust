import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import {ExoplanetComponent} from './exoplanet/exoplanet.component';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';

export const ROUTES: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'exoplanet/:id',
    component: ExoplanetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
];
