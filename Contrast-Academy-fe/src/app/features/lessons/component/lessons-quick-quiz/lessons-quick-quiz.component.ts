import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonContent } from '../../services/lessons.service';

@Component({
  selector: 'app-lessons-quick-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lessons-quick-quiz.component.html',
  styleUrl: './lessons-quick-quiz.component.css'
})
export class LessonsQuickQuizComponent implements OnChanges {
  @Input() lesson!: LessonContent;
  
  selectedOption: string | null = null;
  isSubmitted: boolean = false;
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lesson']) {
      // Reset quiz state when we navigate to a new lesson
      this.selectedOption = null;
      this.isSubmitted = false;
    }
  }

  selectOption(option: string): void {
    if (!this.isSubmitted) {
      this.selectedOption = option;
    }
  }

  submitAnswer(): void {
    if (this.selectedOption) {
      this.isSubmitted = true;
    }
  }

  get isCorrect(): boolean {
    return this.selectedOption === this.lesson.quiz.correctAnswer;
  }
}
