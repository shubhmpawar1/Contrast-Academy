import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseDetailService } from '../../../course-detail/services/course-detail.service';

@Component({
  selector: 'app-lessons-prv-next-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lessons-prv-next-button.component.html',
  styleUrl: './lessons-prv-next-button.component.css'
})
export class LessonsPrvNextButtonComponent {
  @Input() currentLessonId!: string;
  
  private courseDetailService = inject(CourseDetailService);

  get prevId(): string | null {
    return this.courseDetailService.getPreviousLessonId(this.currentLessonId);
  }

  get nextId(): string | null {
    return this.courseDetailService.getNextLessonId(this.currentLessonId);
  }
}
