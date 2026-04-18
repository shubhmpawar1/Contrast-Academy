import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../layout/navbar/navbar/navbar.component';
import { LessonsService, LessonContent } from '../../services/lessons.service';
import { LessonsVideoSectionComponent } from '../../component/lessons-video-section/lessons-video-section.component';

@Component({
  selector: 'app-lessons-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, LessonsVideoSectionComponent],
  templateUrl: './lessons-page.component.html',
  styleUrl: './lessons-page.component.css'
})
export class LessonsPageComponent implements OnInit {
  private lessonsService = inject(LessonsService);
  
  lesson: LessonContent | undefined;

  ngOnInit(): void {
    // For now, loading a default lesson. In a real app, this ID would come from the route.
    this.lesson = this.lessonsService.getLessonById('flexbox-intro');
  }
}
