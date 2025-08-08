import { Routes } from '@angular/router';
import { AboutComponent } from '../naoMart/about/about.component';
import { CoursesComponent } from '../naoMart/courses/courses.component';
import { ContactComponent } from '../naoMart/contact/contact.component';
import { WelcomeComponent } from '../naoMart/welcome/welcome.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: WelcomeComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];
