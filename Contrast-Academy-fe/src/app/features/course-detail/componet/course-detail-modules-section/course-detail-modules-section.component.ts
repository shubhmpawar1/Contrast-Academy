import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetail } from '../../services/course-detail.service';


@Component({
  selector: 'app-course-detail-modules-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail-modules-section.component.html',
  styleUrl: './course-detail-modules-section.component.css'
})
export class CourseDetailModulesSectionComponent {
  @Input() course!: CourseDetail;
}
