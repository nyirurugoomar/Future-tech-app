import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path: 'about', component:AboutComponent}
];
