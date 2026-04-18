import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonContent } from '../../services/lessons.service';

@Component({
  selector: 'app-lessons-quick-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lessons-quick-quiz.component.html',
  styleUrl: './lessons-quick-quiz.component.css'
})
export class LessonsQuickQuizComponent {
  @Input() lesson!: LessonContent;
}
