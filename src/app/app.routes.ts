import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BedsComponent } from './pages/beds/beds.component';
import { WardsComponent } from './pages/wards/wards.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'beds',
    component:BedsComponent
  },
  {
    path:'wards',
    component:WardsComponent
  }
];
