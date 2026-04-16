import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailService, CourseDetail } from '../../services/course-detail.service';

@Component({
  selector: 'app-course-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail-page.component.html',
  styleUrl: './course-detail-page.component.css'
})
export class CourseDetailPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private courseDetailService = inject(CourseDetailService);

  course: CourseDetail | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course = this.courseDetailService.getCourseById(id);
    }

    // If course not found, navigate back to courses page
    if (!this.course) {
      this.router.navigate(['/courses']);
    }
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }
}
