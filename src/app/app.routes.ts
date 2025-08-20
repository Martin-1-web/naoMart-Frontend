import { Routes } from '@angular/router';
import { WelcomeComponent } from '../demo/welcome/welcome.component';
import { CoursesComponent } from '../demo/courses/courses.component';
import { AboutComponent } from '../demo/about/about.component';
import { ContactComponent } from '../demo/contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: WelcomeComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];
