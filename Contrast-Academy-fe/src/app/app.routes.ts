import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard.page/dashboard.page.component';
import { CoursePageComponent } from './features/courses/pages/course-page/course-page.component';

export const routes: Routes = [
    {
        path: '', component: DashboardPageComponent
    },
    {
        path: 'courses', component: CoursePageComponent
    }
];
