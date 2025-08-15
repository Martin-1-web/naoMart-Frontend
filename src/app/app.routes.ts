import { Routes } from '@angular/router';
import { AboutComponent } from '../naoMart/about/about.component';
import { MainContentComponent } from '../naoMart/main-content/main-content.component';

export const routes: Routes = [
    {path: 'home', component: MainContentComponent},
    {path: 'about', component: AboutComponent}
];
