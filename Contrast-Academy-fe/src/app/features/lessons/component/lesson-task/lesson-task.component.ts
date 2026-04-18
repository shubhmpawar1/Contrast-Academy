import { Component, Input } from '@angular/core';
import { LessonContent } from '../../services/lessons.service';

@Component({
  selector: 'app-lesson-task',
  standalone: true,
  imports: [],
  templateUrl: './lesson-task.component.html',
  styleUrl: './lesson-task.component.css'
})
export class LessonTaskComponent {
  @Input() lesson!: LessonContent;
}
