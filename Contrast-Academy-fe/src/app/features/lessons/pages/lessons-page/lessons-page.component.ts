import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../../layout/navbar/navbar/navbar.component';
import { LessonsService, LessonContent } from '../../services/lessons.service';
import { LessonsVideoSectionComponent } from '../../component/lessons-video-section/lessons-video-section.component';
import { LessonDescriptionComponent } from '../../component/lesson-description/lesson-description.component';
import { LessonTaskComponent } from '../../component/lesson-task/lesson-task.component';
import { LessonsQuickQuizComponent } from '../../component/lessons-quick-quiz/lessons-quick-quiz.component';
import { LessonsPrvNextButtonComponent } from '../lessons-prv-next-button/lessons-prv-next-button.component';

@Component({
  selector: 'app-lessons-page',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    LessonsVideoSectionComponent, 
    LessonDescriptionComponent,
    LessonTaskComponent,
    LessonsQuickQuizComponent,
    LessonsPrvNextButtonComponent
  ],
  templateUrl: './lessons-page.component.html',
  styleUrl: './lessons-page.component.css'
})
export class LessonsPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private lessonsService = inject(LessonsService);
  
  lesson: LessonContent | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.lesson = this.lessonsService.getLessonById(id);
    }
  }
}
