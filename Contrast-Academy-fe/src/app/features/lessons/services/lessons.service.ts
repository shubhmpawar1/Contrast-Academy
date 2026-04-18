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
    // CSS Lessons
    'flexbox-layout': {
      id: 'flexbox-layout',
      title: 'Introduction to Flexbox',
      description: 'Learn the basics of CSS Flexbox and how to create flexible, one-dimensional layouts with ease.',
      videoUrl: 'https://www.youtube.com/embed/3YW65K6i0m4',
      quiz: {
        question: 'Which property enables Flexbox?',
        options: ['display: flex', 'position: relative', 'float: left', 'layout: block'],
        correctAnswer: 'display: flex'
      },
      task: 'Create a simple navigation bar using justify-content: space-between.'
    },
    // HTML Lessons
    'what-is-html': {
      id: 'what-is-html',
      title: 'What is HTML?',
      description: 'Understanding the structure of the web and how HTML provides the skeleton for every website.',
      videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE',
      quiz: {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Tool Multi Language', 'Home Tool Markup Language'],
        correctAnswer: 'Hyper Text Markup Language'
      },
      task: 'Create your first index.html file with a valid head and body section.'
    },
    'first-html-page': {
      id: 'first-html-page',
      title: 'First HTML Page',
      description: 'Step-by-step guide to creating, saving, and opening your very first HTML document in a browser.',
      videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
      quiz: {
        question: 'Which tag is used to define the root of an HTML document?',
        options: ['<html>', '<body>', '<head>', '<main>'],
        correctAnswer: '<html>'
      },
      task: 'Create a file named hello.html and add an <h1> tag with your name.'
    },
    'basic-tags': {
      id: 'basic-tags',
      title: 'Basic Tags',
      description: 'Learn about headings, paragraphs, lists, and links — the core building blocks of any site.',
      videoUrl: 'https://www.youtube.com/embed/S9S69vU2-hY',
      quiz: {
        question: 'Which tag is used for a paragraph?',
        options: ['<p>', '<div>', '<span>', '<b>'],
        correctAnswer: '<p>'
      },
      task: 'Create a list of your three favorite hobbies using <ul> and <li> tags.'
    },
    'input-types': {
      id: 'input-types',
      title: 'Input Types',
      description: 'Exploring different HTML input types like text, password, checkbox, and radio buttons.',
      videoUrl: 'https://www.youtube.com/embed/fNcJuPIZ2WE',
      quiz: {
        question: 'Which input type is best for passwords?',
        options: ['type="password"', 'type="text"', 'type="hidden"', 'type="secret"'],
        correctAnswer: 'type="password"'
      },
      task: 'Build a form with a text input for name and a checkbox for "Terms and Conditions".'
    },
    'form-validation': {
      id: 'form-validation',
      title: 'Form Validation',
      description: 'Using HTML5 attributes like required, pattern, and min/max to validate user input without JavaScript.',
      videoUrl: 'https://www.youtube.com/embed/hzjS8_AIs_U',
      quiz: {
        question: 'Which attribute makes an input field mandatory?',
        options: ['required', 'mandatory', 'fixed', 'must'],
        correctAnswer: 'required'
      },
      task: 'Add the "required" attribute and a "minlength" of 5 to a username input field.'
    },
    'labels-fieldsets': {
      id: 'labels-fieldsets',
      title: 'Labels & Fieldsets',
      description: 'Organizing forms for better accessibility and user experience using labels and fieldsets.',
      videoUrl: 'https://www.youtube.com/embed/Z57EPrk3Zps',
      quiz: {
        question: 'What is the purpose of the <label> tag?',
        options: ['To associate text with an input', 'To style the input', 'To validate the input', 'To hide the input'],
        correctAnswer: 'To associate text with an input'
      },
      task: 'Wrap a group of related inputs in a <fieldset> with a <legend>.'
    },
    'header-footer': {
      id: 'header-footer',
      title: 'Header & Footer',
      description: 'Learn to use semantic <header> and <footer> tags to define the top and bottom of your page or sections.',
      videoUrl: 'https://www.youtube.com/embed/Xp0hN4N7-YI',
      quiz: {
        question: 'Where should the <footer> tag typically be placed?',
        options: ['At the bottom of a page or section', 'In the head', 'Only at the very top', 'Inside a button'],
        correctAnswer: 'At the bottom of a page or section'
      },
      task: 'Add a footer to your page that includes a copyright symbol (©) and the current year.'
    },
    'articles-sections': {
      id: 'articles-sections',
      title: 'Articles & Sections',
      description: 'Difference between <article> and <section> and when to use each for better semantic structure.',
      videoUrl: 'https://www.youtube.com/embed/N-Z_1u3vAms',
      quiz: {
        question: 'Which tag is intended for independent, distributable content?',
        options: ['<article>', '<section>', '<div>', '<span>'],
        correctAnswer: '<article>'
      },
      task: 'Create a blog post layout using <article> for the post and <section> for its segments.'
    },
    'aside-nav': {
      id: 'aside-nav',
      title: 'Aside & Nav',
      description: 'Implementing sidebars and navigation menus using the proper semantic HTML5 elements.',
      videoUrl: 'https://www.youtube.com/embed/m9uH0y52J_I',
      quiz: {
        question: 'Which tag should wrap your primary site links?',
        options: ['<nav>', '<ul>', '<header>', '<aside>'],
        correctAnswer: '<nav>'
      },
      task: 'Build a sidebar using <aside> that contains a <nav> with three links.'
    },
    // JavaScript Lessons
    'let-const': {
      id: 'let-const',
      title: 'Let & Const',
      description: 'Deep dive into variable declarations in modern JavaScript, focusing on block scope and immutability.',
      videoUrl: 'https://www.youtube.com/embed/PjH6Cg_9O6E',
      quiz: {
        question: 'Which keyword is used for constants?',
        options: ['const', 'let', 'var', 'static'],
        correctAnswer: 'const'
      },
      task: 'Declare a constant variable and try to reassign it in the console to see the error.'
    }
  };

  private lessonOrder: string[] = [
    'flexbox-layout',
    'what-is-html',
    'first-html-page',
    'basic-tags',
    'input-types',
    'form-validation',
    'labels-fieldsets',
    'header-footer',
    'articles-sections',
    'aside-nav',
    'let-const'
  ];

  getLessonById(id: string): LessonContent | undefined {
    return this.lessons[id];
  }

  getPreviousLessonId(id: string): string | null {
    const index = this.lessonOrder.indexOf(id);
    return index > 0 ? this.lessonOrder[index - 1] : null;
  }

  getNextLessonId(id: string): string | null {
    const index = this.lessonOrder.indexOf(id);
    return index !== -1 && index < this.lessonOrder.length - 1 ? this.lessonOrder[index + 1] : null;
  }
}
