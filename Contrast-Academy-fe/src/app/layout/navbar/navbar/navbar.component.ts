import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CourseDetailService, CourseDetail } from '../../../features/course-detail/services/course-detail.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private courseService = inject(CourseDetailService);
  courses: CourseDetail[] = this.courseService.getAllCourses();
}
