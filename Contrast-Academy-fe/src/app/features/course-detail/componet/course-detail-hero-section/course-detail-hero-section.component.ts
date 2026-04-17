import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetail } from '../../services/course-detail.service';

@Component({
  selector: 'app-course-detail-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail-hero-section.component.html',
  styleUrl: './course-detail-hero-section.component.css'
})
export class CourseDetailHeroSectionComponent {
  @Input() course!: CourseDetail;
}
