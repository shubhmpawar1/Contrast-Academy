import { Injectable } from '@angular/core';

export interface CourseModule {
  title: string;
  description: string;
  lessons: number;
  lessonList: string[];
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
      description: 'Learn HTML from the ground up — from basic tags to semantic HTML5, forms, accessibility, and SEO best practices.',
      duration: '4 Weeks',
      level: 'Beginner',
      totalLessons: 32,
      modules: [
        { 
          title: 'HTML Fundamentals', 
          description: 'Tags, elements, attributes, and document structure', 
          lessons: 3,
          lessonList: ['What is HTML?', 'First HTML Page', 'Basic Tags'] 
        },
        { 
          title: 'Forms & Inputs', 
          description: 'Building interactive forms with validation', 
          lessons: 3,
          lessonList: ['Input Types', 'Form Validation', 'Labels & Fieldsets'] 
        },
        { 
          title: 'Semantic HTML5', 
          description: 'Meaningful markup for better SEO and accessibility', 
          lessons: 3,
          lessonList: ['Header & Footer', 'Articles & Sections', 'Aside & Nav'] 
        }
      ],
      prerequisites: ['No prior experience needed', 'A computer with a text editor', 'Curiosity to learn!'],
      ctaText: 'Start Learning HTML Now 🚀'
    },
    'css': {
      id: 'css',
      icon: '🎨',
      title: 'CSS (Styling + Layout Mastery)',
      subtitle: 'Design beautiful, responsive websites',
      description: 'Master CSS from selectors to Flexbox, Grid, animations, and responsive design.',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      totalLessons: 45,
      modules: [
        { 
          title: 'CSS Selectors & Properties', 
          description: 'Mastering selectors, specificity, and the box model', 
          lessons: 3,
          lessonList: ['Class & ID Selectors', 'The Box Model', 'Colors & Typography'] 
        },
        { 
          title: 'Flexbox Layout', 
          description: 'Build flexible, one-dimensional layouts', 
          lessons: 3,
          lessonList: ['Flex Containser', 'Align & Justify', 'Flex Items'] 
        },
        { 
          title: 'CSS Grid', 
          description: 'Create complex two-dimensional layouts with ease', 
          lessons: 3,
          lessonList: ['Grid Areas', 'Columns & Rows', 'Grid Gaps'] 
        }
      ],
      prerequisites: ['Basic understanding of HTML', 'Familiarity with browser DevTools'],
      ctaText: 'Master CSS Layouts Now 🎨'
    },
    'javascript': {
      id: 'javascript',
      icon: '⚡',
      title: 'JavaScript (Frontend + Core)',
      subtitle: 'Become a JavaScript pro',
      description: 'From variables to async/await — master JavaScript fundamentals, DOM manipulation, and build interactive web applications.',
      duration: '8 Weeks',
      level: 'Beginner to Advanced',
      totalLessons: 64,
      modules: [
        { 
          title: 'JS Fundamentals', 
          description: 'Variables, data types, operators, and control flow', 
          lessons: 3,
          lessonList: ['Let & Const', 'Conditional Logic', 'Loops & Iteration'] 
        },
        { 
          title: 'Functions & Scope', 
          description: 'Functions, closures, hoisting, and scope chains', 
          lessons: 3,
          lessonList: ['Arrow Functions', 'Higher Order Functions', 'Lexical Scope'] 
        },
        { 
          title: 'DOM Manipulation', 
          description: 'Select, modify, and interact with the DOM', 
          lessons: 3,
          lessonList: ['Query Selectors', 'Event Listeners', 'Dynamic Content'] 
        }
      ],
      prerequisites: ['Basic HTML & CSS knowledge', 'Logical thinking ability'],
      ctaText: 'Become a JS Expert Now ⚡'
    },
    'angular': {
      id: 'angular',
      icon: '🅰️',
      title: 'Angular Framework',
      subtitle: 'Build enterprise-grade web apps',
      description: 'Master Angular from components to routing, services, RxJS, forms, and state management.',
      duration: '10 Weeks',
      level: 'Intermediate to Advanced',
      totalLessons: 72,
      modules: [
        { 
          title: 'Angular Fundamentals', 
          description: 'Components, templates, data binding, and directives', 
          lessons: 3,
          lessonList: ['Standalone Components', 'Input & Output', 'Signals API'] 
        },
        { 
          title: 'Services & DI', 
          description: 'Dependency injection, services, and HTTP client', 
          lessons: 3,
          lessonList: ['Injectable Services', 'HTTP Interceptors', 'ProvidedIn Root'] 
        },
        { 
          title: 'Routing & Navigation', 
          description: 'Router, guards, lazy loading, and resolvers', 
          lessons: 3,
          lessonList: ['Child Routes', 'Route Guards', 'Dynamic Params'] 
        }
      ],
      prerequisites: ['Strong JavaScript/TypeScript knowledge', 'HTML & CSS proficiency', 'Understanding of REST APIs'],
      ctaText: 'Build with Angular Today 🅰️'
    }
  };

  getCourseById(id: string): CourseDetail | undefined {
    return this.courses[id];
  }
}
