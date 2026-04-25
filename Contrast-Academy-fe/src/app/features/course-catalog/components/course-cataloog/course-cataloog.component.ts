import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CourseCatalogService, CourseCatalogItem } from '../../services/course-catalog.service';

@Component({
  selector: 'app-course-cataloog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-cataloog.component.html',
  styleUrl: './course-cataloog.component.css'
})
export class CourseCataloogComponent {
  private router = inject(Router);
  courseCatalogService = inject(CourseCatalogService);
  courses: CourseCatalogItem[] = this.courseCatalogService.getCourses();

  trackByTitle(index: number, course: CourseCatalogItem): string {
    return course.title;
  }

  goToCourse(id: string) {
    this.router.navigate(['/course', id]);
  }
}
