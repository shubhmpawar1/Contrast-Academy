import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard.page/dashboard.page.component';
import { CourseCatalogPageComponent } from './features/course-catalog/pages/course-catalog/course-catalog.page';
import { CourseDetailPageComponent } from './features/course-detail/pages/course-detail-page/course-detail-page.component';

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
    {
        path: 'course/:id',
        component: CourseDetailPageComponent
    }

];
