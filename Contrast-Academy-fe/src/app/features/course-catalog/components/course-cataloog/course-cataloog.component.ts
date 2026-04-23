import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { CourseCatalogService, CourseCatalogItem } from '../../services/course-catalog.service';
import { CourseCatalogService, CourseCatalogItem } from '../../../../services/course-catalog.service';
@Component({
  selector: 'app-course-cataloog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-cataloog.component.html',
  styleUrl: './course-cataloog.component.css'
})
export class CourseCataloogComponent {
  private router = inject(Router);
  // courseCatalogService = inject(CourseCatalogService);
  // courses: CourseCatalogItem[] = this.courseCatalogService.getCourses();
  private courseCatalogService = inject(CourseCatalogService);
  courses: CourseCatalogItem[] = [];

  ngOnInit(): void {
    this.courseCatalogService.getCourses().subscribe((data: any[]) => {
      this.courses = data.map(course => ({
        id: course.id,
        slug: course.slug,
        title: course.title,
        description: course.description,

        // UI-only fields (temporary fallback)
        icon: '📘',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      }));
    });
  }


  trackByTitle(index: number, course: CourseCatalogItem): string {
    return course.title;
  }

  goToCourse(slug: string): void {
    this.router.navigate(['/course', slug]);
  }
}
