import { Injectable } from '@angular/core';

export interface CourseCatalogItem {
  id: string;
  slug: string;
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
        id: 'html',
        slug: 'html-mastery',
        icon: '📄',
        title: 'HTML Mastery Course',
        description: 'Master the backbone of the web with our multi-level curriculum.',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      },
      {
        id: 'css',
        slug: 'css-mastery',
        icon: '🎨',
        title: 'CSS (Styling + Layout Mastery)',
        description: 'Learn to style, layout, and animate beautiful responsive websites.',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      },
      {
        id: 'javascript',
        slug: 'javascript-mastery',
        icon: '⚡',
        title: 'JavaScript (Frontend + Core)',
        description: 'Become a pro at logic, DOM manipulation, and building interactive apps.',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      },
      {
        id: 'angular',
        slug: 'angular-framework',
        icon: 'A',
        title: 'Angular Framework',
        description: 'Build scalable, enterprise-grade web apps with Angular.',
        badge: 'AVAILABLE NOW',
        buttonText: 'Start Learning 🎯'
      }
    ];
  }
}
