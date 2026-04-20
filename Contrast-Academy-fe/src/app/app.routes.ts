import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard.page/dashboard.page.component';
import { CourseCatalogPageComponent } from './features/course-catalog/pages/course-catalog/course-catalog.page';
import { CourseDetailPageComponent } from './features/course-detail/pages/course-detail-page/course-detail-page.component';
import { LessonsPageComponent } from './features/lessons/pages/lessons-page/lessons-page.component';
import { RegisterPageComponent } from './features/auth/pages/register-page/register-page/register-page.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page/login-page.component';
import { CourseAssignComponent } from './features/course-assign/pages/course-assign/course-assign.component';
import { adminGuard } from './core/guards/admin.guard';
import { NotFoundPageComponent } from './features/not-found/pages/not-found-page/not-found-page.component';


export const routes: Routes = [
    {
        path: '', component: RegisterPageComponent
    },
    {
        path: 'register', component: RegisterPageComponent
    },
    {
        path: 'login', component: LoginPageComponent
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
    },
    {
        path: 'lesson/:id',
        component: LessonsPageComponent
    },
    {
        path: 'course-assign',
        component: CourseAssignComponent,
        canActivate: [adminGuard]
    },
    {
        path: '404',
        component: NotFoundPageComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }

];
