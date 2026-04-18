import { Component, Input } from '@angular/core';
import { LessonContent } from '../../services/lessons.service';


@Component({
  selector: 'app-lesson-description',
  standalone: true,
  imports: [],
  templateUrl: './lesson-description.component.html',
  styleUrl: './lesson-description.component.css'
})
export class LessonDescriptionComponent {
  @Input() lesson!: LessonContent;
}
