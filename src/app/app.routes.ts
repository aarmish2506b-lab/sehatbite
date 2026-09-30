import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { HOME } from './home/home';
import { ABOUTUS } from './aboutus/aboutus';
import { CONTACTUS } from './contactus/contactus';
import { GALLERY } from './gallery/gallery';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HOME },
  { path: 'dashboard', component: Dashboard },
  { path: 'aboutus', component: ABOUTUS },
  { path: 'contactus', component: CONTACTUS },
  { path: 'gallery', component: GALLERY },
];