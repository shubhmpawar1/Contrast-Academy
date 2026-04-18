import { Injectable } from '@angular/core';

export interface CourseLessonRef {
  id: string;
  title: string;
}

export interface CourseModule {
  title: string;
  description: string;
  lessons: CourseLessonRef[];
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
          lessons: [
            { id: 'what-is-html', title: 'What is HTML?' },
            { id: 'first-html-page', title: 'First HTML Page' },
            { id: 'html-structure', title: 'HTML Structure' },
            { id: 'basic-tags', title: 'Basic Tags' }
          ]
        },
        {
          title: 'Content Elements',
          description: 'Working with images, lists, and tables',
          lessons: [
            { id: 'images', title: 'Images' },
            { id: 'lists', title: 'Lists' },
            { id: 'tables', title: 'Tables' }
          ]
        },
        {
          title: 'Forms & Inputs',
          description: 'Building interactive forms with validation',
          lessons: [
            { id: 'forms-basics', title: 'Forms Basics' },
            { id: 'input-types', title: 'Input Types' },
            { id: 'form-validation', title: 'Form Validation' }
          ]
        },
        {
          title: 'Semantic HTML5',
          description: 'Meaningful markup for better SEO and accessibility',
          lessons: [
            { id: 'semantic-html', title: 'Semantic HTML' },
            { id: 'header-footer', title: 'Header & Footer' },
            { id: 'nav-aside', title: 'Nav & Aside' }
          ]
        },
        {
          title: 'Media & Advanced',
          description: 'Embed multimedia, iframes, and meta tags',
          lessons: [
            { id: 'audio-video', title: 'Audio & Video' },
            { id: 'iframes', title: 'iFrames' },
            { id: 'meta-tags', title: 'Meta Tags' }
          ]
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
          title: 'CSS Fundamentals',
          description: 'Understanding how CSS works, selectors, and core styling concepts',
          lessons: [
            { id: 'what-is-css', title: 'What is CSS?' },
            { id: 'css-selectors', title: 'CSS Selectors' },
            { id: 'colors-backgrounds', title: 'Colors & Backgrounds' },
            { id: 'typography', title: 'Typography' }
          ]
        },

        // 🧱 STRUCTURE & BOX MODEL
        {
          title: 'Box Model & Layout Basics',
          description: 'Master spacing, sizing, and element positioning',
          lessons: [
            { id: 'box-model', title: 'CSS Box Model' },
            { id: 'display-position', title: 'Display & Position' },
            { id: 'responsive-units', title: 'Responsive Units' }
          ]
        },

        // ⚡ FLEXBOX
        {
          title: 'Flexbox Layout',
          description: 'Build flexible, one-dimensional responsive layouts',
          lessons: [
            { id: 'flexbox-layout', title: 'Introduction to Flexbox' },
            { id: 'flexbox-advanced', title: 'Advanced Flexbox' }
          ]
        },

        // 🧩 GRID
        {
          title: 'CSS Grid System',
          description: 'Create complex two-dimensional layouts using CSS Grid',
          lessons: [
            { id: 'grid-layout', title: 'CSS Grid Basics' }
          ]
        },

        // 📱 RESPONSIVE DESIGN
        {
          title: 'Responsive Design',
          description: 'Make websites adaptable across all screen sizes',
          lessons: [
            { id: 'media-queries', title: 'Media Queries' },
            { id: 'responsive-units', title: 'Responsive Units (Deep Dive)' }
          ]
        },

        // 🎨 UI & EFFECTS
        {
          title: 'UI Styling & Effects',
          description: 'Enhance user interfaces with transitions and animations',
          lessons: [
            { id: 'transitions', title: 'CSS Transitions' },
            { id: 'animations', title: 'CSS Animations' }
          ]
        },

        // ⚙️ ADVANCED CSS
        {
          title: 'Advanced CSS',
          description: 'Write scalable and maintainable CSS for production',
          lessons: [
            { id: 'variables', title: 'CSS Variables' },
            { id: 'best-practices', title: 'CSS Best Practices' }
          ]
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
          title: 'JavaScript Fundamentals',
          description: 'Learn core syntax, variables, and data types',
          lessons: [
            { id: 'what-is-javascript', title: 'What is JavaScript?' },
            { id: 'let-const', title: 'Let & Const' },
            { id: 'data-types', title: 'Data Types' },
            { id: 'operators', title: 'Operators' }
          ]
        },

        {
          title: 'Control Flow',
          description: 'Decision making and loops in JavaScript',
          lessons: [
            { id: 'conditionals', title: 'Conditionals' },
            { id: 'loops', title: 'Loops' }
          ]
        },

        {
          title: 'Functions',
          description: 'Reusable logic and modern syntax',
          lessons: [
            { id: 'functions', title: 'Functions' },
            { id: 'arrow-functions', title: 'Arrow Functions' }
          ]
        },

        {
          title: 'Data Structures',
          description: 'Work with arrays and objects',
          lessons: [
            { id: 'arrays', title: 'Arrays' },
            { id: 'objects', title: 'Objects' }
          ]
        },

        {
          title: 'DOM & Events',
          description: 'Interact with web pages dynamically',
          lessons: [
            { id: 'dom-basics', title: 'DOM Basics' },
            { id: 'events', title: 'Events' }
          ]
        },

        {
          title: 'Asynchronous JavaScript',
          description: 'Handle async operations and APIs',
          lessons: [
            { id: 'async-js', title: 'Async JavaScript' },
            { id: 'fetch-api', title: 'Fetch API' }
          ]
        },

        {
          title: 'Advanced JavaScript',
          description: 'Modern JS and deep concepts',
          lessons: [
            { id: 'es6-features', title: 'ES6 Features' },
            { id: 'closures', title: 'Closures' }
          ]
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
          title: 'Angular Basics',
          description: 'Introduction and setup of Angular',
          lessons: [
            { id: 'what-is-angular', title: 'What is Angular?' },
            { id: 'angular-setup', title: 'Angular Setup & CLI' },
            { id: 'project-structure', title: 'Project Structure' }
          ]
        },

        {
          title: 'Components & Templates',
          description: 'Building UI using components and bindings',
          lessons: [
            { id: 'components', title: 'Components' },
            { id: 'data-binding', title: 'Data Binding' },
            { id: 'directives', title: 'Directives' }
          ]
        },

        {
          title: 'Services & Routing',
          description: 'Application architecture and navigation',
          lessons: [
            { id: 'services-di', title: 'Services & Dependency Injection' },
            { id: 'routing', title: 'Routing' }
          ]
        },

        {
          title: 'Forms Handling',
          description: 'Managing user input and validation',
          lessons: [
            { id: 'template-forms', title: 'Template Driven Forms' },
            { id: 'reactive-forms', title: 'Reactive Forms' }
          ]
        },

        {
          title: 'API Integration',
          description: 'Working with backend services',
          lessons: [
            { id: 'http-client', title: 'HTTP Client' }
          ]
        },

        {
          title: 'Advanced Angular',
          description: 'Performance and advanced concepts',
          lessons: [
            { id: 'lifecycle-hooks', title: 'Lifecycle Hooks' },
            { id: 'pipes', title: 'Pipes' },
            { id: 'lazy-loading', title: 'Lazy Loading' }
          ]
        }

      ],
      prerequisites: ['Strong JavaScript/TypeScript knowledge', 'HTML & CSS proficiency', 'Understanding of REST APIs'],
      ctaText: 'Build with Angular Today 🅰️'
    }
  };

  getAllCourses(): CourseDetail[] {
    return Object.values(this.courses);
  }

  getCourseById(id: string): CourseDetail | undefined {
    return this.courses[id];
  }

  // Helper method to get the linear array of all lesson IDs in a course
  getCourseLessonIds(courseId: string): string[] {
    const course = this.courses[courseId];
    if (!course) return [];

    return course.modules.flatMap(module => module.lessons.map(l => l.id));
  }

  // Helper to find which course a lesson belongs to, and then get the previous ID
  getPreviousLessonId(currentLessonId: string): string | null {
    for (const courseId of Object.keys(this.courses)) {
      const allIds = this.getCourseLessonIds(courseId);
      const index = allIds.indexOf(currentLessonId);
      if (index > 0) {
        return allIds[index - 1]; // Found in this course, has a previous element
      } else if (index === 0) {
        return null; // Found in this course, but it's the first element
      }
    }
    return null;
  }

  // Helper to find which course a lesson belongs to, and then get the next ID
  getNextLessonId(currentLessonId: string): string | null {
    for (const courseId of Object.keys(this.courses)) {
      const allIds = this.getCourseLessonIds(courseId);
      const index = allIds.indexOf(currentLessonId);
      if (index !== -1 && index < allIds.length - 1) {
        return allIds[index + 1]; // Found in this course, has a next element
      } else if (index === allIds.length - 1) {
        return null; // Found in this course, but it's the last element
      }
    }
    return null;
  }
}
