import { Component, Input } from '@angular/core';
import { CourseDetail } from '../../services/course-detail.service';

@Component({
  selector: 'app-course-enroll-cta',
  standalone: true,
  imports: [],
  templateUrl: './course-enroll-cta.component.html',
  styleUrl: './course-enroll-cta.component.css'
})
export class CourseEnrollCtaComponent {
  @Input() course!: CourseDetail;
}
