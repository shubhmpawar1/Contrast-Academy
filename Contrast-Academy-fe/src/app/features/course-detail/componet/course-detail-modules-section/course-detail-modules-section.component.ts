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
    // In a real app, you'd map the lesson title to an ID. 
    // Here we'll navigate to our sample flexbox lesson.
    this.router.navigate(['/lesson', 'flexbox-intro']);
  }
}
