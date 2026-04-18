import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonContent } from '../../services/lessons.service';

@Component({
  selector: 'app-lesson-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson-task.component.html',
  styleUrl: './lesson-task.component.css'
})
export class LessonTaskComponent implements OnDestroy {
  @Input() lesson!: LessonContent;

  isTimerRunning: boolean = false;
  timeElapsed: number = 0; // In seconds
  timerInterval: any;

  ngOnDestroy(): void {
    this.pauseTimer();
  }

  toggleTimer(): void {
    if (this.isTimerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer(): void {
    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  }

  pauseTimer(): void {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  resetTimer(): void {
    this.pauseTimer();
    this.timeElapsed = 0;
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.timeElapsed / 60);
    const seconds = this.timeElapsed % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
