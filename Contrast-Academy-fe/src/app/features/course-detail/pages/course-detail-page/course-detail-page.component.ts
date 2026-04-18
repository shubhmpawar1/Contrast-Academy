import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailService, CourseDetail } from '../../services/course-detail.service';
import { CourseDetailHeroSectionComponent } from '../../componet/course-detail-hero-section/course-detail-hero-section.component';
import { CourseDetailModulesSectionComponent } from '../../componet/course-detail-modules-section/course-detail-modules-section.component';
import { NavbarComponent } from "../../../../layout/navbar/navbar/navbar.component";

@Component({
  selector: 'app-course-detail-page',
  standalone: true,
  imports: [CommonModule, CourseDetailHeroSectionComponent, CourseDetailModulesSectionComponent, NavbarComponent],
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
