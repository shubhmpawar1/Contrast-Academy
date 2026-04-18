import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CourseDetail } from '../../services/course-detail.service';


@Component({
  selector: 'app-course-detail-modules-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail-modules-section.component.html',
  styleUrl: './course-detail-modules-section.component.css'
})
export class CourseDetailModulesSectionComponent {
  private router = inject(Router);

  @Input() course!: CourseDetail;

  goToLesson(lesson: string): void {
    // Generate a URL-friendly slug from the lesson title
    const slug = lesson
      .toLowerCase()
      .replace(/ & /g, '-')
      .replace(/ /g, '-')
      .replace(/\?/g, '');
      
    this.router.navigate(['/lesson', slug]);
  }
}
