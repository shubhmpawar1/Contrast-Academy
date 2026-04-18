import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetail } from '../../services/course-detail.service';

@Component({
  selector: 'app-course-prerequisites-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-prerequisites-section.component.html',
  styleUrl: './course-prerequisites-section.component.css'
})
export class CoursePrerequisitesSectionComponent {
  @Input() course!: CourseDetail;
}
