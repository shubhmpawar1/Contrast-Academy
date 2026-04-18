import { Injectable } from '@angular/core';

export interface CourseModule {
  title: string;
  description: string;
  lessons: number;
}

export interface CourseDetail {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  totalLessons: number;
  modules: CourseModule[];
  prerequisites: string[];
  ctaText: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {

  private courses: { [id: string]: CourseDetail } = {
    'html': {
      id: 'html',
      icon: '📄',
      title: 'HTML Mastery Course',
      subtitle: 'Master the backbone of the web',
      description: 'Learn HTML from the ground up — from basic tags to semantic HTML5, forms, accessibility, and SEO best practices. Build a strong foundation for your web development career.',
      duration: '4 Weeks',
      level: 'Beginner',
      totalLessons: 32,
      modules: [
        { title: 'HTML Fundamentals', description: 'Tags, elements, attributes, and document structure', lessons: 8 },
        { title: 'Forms & Inputs', description: 'Building interactive forms with validation', lessons: 6 },
        { title: 'Semantic HTML5', description: 'Meaningful markup for better SEO and accessibility', lessons: 8 },
        { title: 'Tables & Media', description: 'Working with tables, images, audio, and video', lessons: 5 },
        { title: 'Projects & Practice', description: 'Build real-world HTML pages from scratch', lessons: 5 }
      ],
      prerequisites: ['No prior experience needed', 'A computer with a text editor', 'Curiosity to learn!'],
      ctaText: 'Start Learning HTML Now 🚀'
    },
    'css': {
      id: 'css',
      icon: '🎨',
      title: 'CSS (Styling + Layout Mastery)',
      subtitle: 'Design beautiful, responsive websites',
      description: 'Master CSS from selectors to Flexbox, Grid, animations, and responsive design. Learn to create stunning layouts and bring your designs to life with pure CSS.',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      totalLessons: 45,
      modules: [
        { title: 'CSS Selectors & Properties', description: 'Mastering selectors, specificity, and the box model', lessons: 8 },
        { title: 'Flexbox Layout', description: 'Build flexible, one-dimensional layouts', lessons: 7 },
        { title: 'CSS Grid', description: 'Create complex two-dimensional layouts with ease', lessons: 8 },
        { title: 'Responsive Design', description: 'Media queries, mobile-first, and fluid layouts', lessons: 10 },
        { title: 'Animations & Transitions', description: 'Bring your UI to life with CSS animations', lessons: 7 },
        { title: 'Projects', description: 'Build responsive websites from Figma designs', lessons: 5 }
      ],
      prerequisites: ['Basic understanding of HTML', 'Familiarity with browser DevTools'],
      ctaText: 'Master CSS Layouts Now 🎨'
    },
    'javascript': {
      id: 'javascript',
      icon: '⚡',
      title: 'JavaScript (Frontend + Core)',
      subtitle: 'Become a JavaScript pro',
      description: 'From variables to async/await — master JavaScript fundamentals, DOM manipulation, event handling, ES6+ features, and build interactive web applications from scratch.',
      duration: '8 Weeks',
      level: 'Beginner to Advanced',
      totalLessons: 64,
      modules: [
        { title: 'JS Fundamentals', description: 'Variables, data types, operators, and control flow', lessons: 10 },
        { title: 'Functions & Scope', description: 'Functions, closures, hoisting, and scope chains', lessons: 8 },
        { title: 'DOM Manipulation', description: 'Select, modify, and interact with the DOM', lessons: 10 },
        { title: 'ES6+ Features', description: 'Arrow functions, destructuring, spread, modules', lessons: 10 },
        { title: 'Async JavaScript', description: 'Promises, async/await, and fetch API', lessons: 10 },
        { title: 'OOP in JavaScript', description: 'Prototypes, classes, and design patterns', lessons: 8 },
        { title: 'Projects', description: 'Build interactive apps: Todo, Quiz, Weather App', lessons: 8 }
      ],
      prerequisites: ['Basic HTML & CSS knowledge', 'Logical thinking ability'],
      ctaText: 'Become a JS Expert Now ⚡'
    },
    'angular': {
      id: 'angular',
      icon: '🅰️',
      title: 'Angular Framework',
      subtitle: 'Build enterprise-grade web apps',
      description: 'Master Angular from components to routing, services, RxJS, forms, and state management. Learn to build scalable, production-ready single-page applications.',
      duration: '10 Weeks',
      level: 'Intermediate to Advanced',
      totalLessons: 72,
      modules: [
        { title: 'Angular Fundamentals', description: 'Components, templates, data binding, and directives', lessons: 12 },
        { title: 'Services & DI', description: 'Dependency injection, services, and HTTP client', lessons: 10 },
        { title: 'Routing & Navigation', description: 'Router, guards, lazy loading, and resolvers', lessons: 10 },
        { title: 'Reactive Forms', description: 'Template-driven and reactive forms with validation', lessons: 10 },
        { title: 'RxJS & Observables', description: 'Reactive programming with RxJS operators', lessons: 12 },
        { title: 'State Management', description: 'Managing state with NgRx and signals', lessons: 8 },
        { title: 'Projects', description: 'Build a full-stack dashboard application', lessons: 10 }
      ],
      prerequisites: ['Strong JavaScript/TypeScript knowledge', 'HTML & CSS proficiency', 'Understanding of REST APIs'],
      ctaText: 'Build with Angular Today 🅰️'
    }
  };

  getCourseById(id: string): CourseDetail | undefined {
    return this.courses[id];
  }
}
