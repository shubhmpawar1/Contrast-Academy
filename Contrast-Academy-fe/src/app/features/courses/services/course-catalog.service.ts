import { Injectable } from '@angular/core';

export interface CourseCatalogItem {
  icon: string;
  title: string;
  description: string;
  badge: string;
  buttonText: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseCatalogService {

  getCourses(): CourseCatalogItem[] {
    return [
      {
        icon: '📄',
        title: 'HTML Mastery Course',
        description: 'Master the backbone of the web with our multi-level curriculum.',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      },
      {
        icon: '🎨',
        title: 'CSS (Styling + Layout Mastery)',
        description: 'Learn to style, layout, and animate beautiful responsive websites.',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      },
      {
        icon: '⚡',
        title: 'JavaScript (Frontend + Core)',
        description: 'Become a pro at logic, DOM manipulation, and building interactive apps.',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      }
    ];
  }
}
