import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {RegisterComponent} from './app/register/register.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  }
];
