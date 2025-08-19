import { Routes } from '@angular/router';
import { WelcomeComponent } from '../demo/welcome/welcome.component';
import { CoursesComponent } from '../demo/courses/courses.component';

export const routes: Routes = [
    {path: 'home', component: WelcomeComponent},
    {path: 'courses', component: CoursesComponent}
];
