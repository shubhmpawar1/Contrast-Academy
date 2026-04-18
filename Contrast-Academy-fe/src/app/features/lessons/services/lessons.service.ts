import { Injectable } from '@angular/core';

export interface LessonQuiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface LessonContent {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  quiz: LessonQuiz;
  task: string;
  prerequisites?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private lessons: { [id: string]: LessonContent } = {
    'flexbox-intro': {
      id: 'flexbox-intro',
      title: 'Introduction to Flexbox',
      description: 'Learn the basics of CSS Flexbox and how to create flexible, one-dimensional layouts with ease. We will cover containers, items, and alignment properties.',
      videoUrl: 'https://www.youtube.com/embed/3YW65K6i0m4', // Sample Flexbox video
      quiz: {
        question: 'Which property is used on the container to enable Flexbox?',
        options: [
          'display: flex',
          'position: relative',
          'float: left',
          'layout: flexbox'
        ],
        correctAnswer: 'display: flex'
      },
      task: 'Create a navigation bar with three links spaced evenly using justify-content: space-between.'
    }
  };

  getLessonById(id: string): LessonContent | undefined {
    return this.lessons[id];
  }
}
