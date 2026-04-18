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
  
  currentQuestionIndex: number = 0;
  selectedOptions: { [index: number]: string } = {};
  isQuestionSubmitted: boolean = false;
  isQuizFinished: boolean = false;
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lesson']) {
      this.resetQuiz();
    }
  }

  get currentQuiz() {
    return this.lesson.quizzes[this.currentQuestionIndex];
  }

  get isLastQuestion() {
    return this.currentQuestionIndex === this.lesson.quizzes.length - 1;
  }

  get correctAnswersCount() {
    return Object.keys(this.selectedOptions)
      .filter(i => this.isCorrect(Number(i)))
      .length;
  }

  selectOption(option: string): void {
    if (!this.isQuestionSubmitted && !this.isQuizFinished) {
      this.selectedOptions[this.currentQuestionIndex] = option;
    }
  }

  submitQuestion(): void {
    if (this.selectedOptions[this.currentQuestionIndex]) {
      this.isQuestionSubmitted = true;
    }
  }

  nextQuestion(): void {
    if (this.isLastQuestion) {
      this.isQuizFinished = true;
    } else {
      this.currentQuestionIndex++;
      this.isQuestionSubmitted = false;
    }
  }

  isCorrect(index: number): boolean {
    if (!this.lesson.quizzes) return false;
    return this.selectedOptions[index] === this.lesson.quizzes[index].correctAnswer;
  }

  get allCorrect(): boolean {
    if (!this.lesson.quizzes) return true;
    return this.correctAnswersCount === this.lesson.quizzes.length;
  }
  
  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedOptions = {};
    this.isQuestionSubmitted = false;
    this.isQuizFinished = false;
  }
}
