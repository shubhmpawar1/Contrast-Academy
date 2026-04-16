import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard.page/dashboard.page.component';
import { CourseCatalogPageComponent } from './features/courses/pages/course-catalog/course-catalog.page';

export const routes: Routes = [
    {
        path: '', component: DashboardPageComponent
    },
    {
        path: 'courses', component: CourseCatalogPageComponent
    },
    {
        path: 'dashboard', component: DashboardPageComponent
    },

];
