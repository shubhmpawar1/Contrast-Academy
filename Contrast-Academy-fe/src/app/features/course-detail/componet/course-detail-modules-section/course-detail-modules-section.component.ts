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

  goToLesson(lessonId: string): void {
    this.router.navigate(['/lesson', lessonId]);
  }
}
