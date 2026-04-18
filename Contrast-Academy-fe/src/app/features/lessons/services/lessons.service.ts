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
    'what-is-css': {
      id: 'what-is-css',
      title: 'What is CSS?',
      description: 'Understand how CSS styles HTML elements and controls layout, colors, spacing, and visual presentation.',
      videoUrl: 'https://www.youtube.com/embed/yfoY53QXEnI',
      quiz: {
        question: 'What does CSS stand for?',
        options: [
          'Cascading Style Sheets',
          'Computer Style Syntax',
          'Creative Styling System',
          'Colorful Style Sheets'
        ],
        correctAnswer: 'Cascading Style Sheets'
      },
      task: 'Create an HTML file and apply basic color and font styling using inline CSS.'
    },

    'css-selectors': {
      id: 'css-selectors',
      title: 'CSS Selectors',
      description: 'Learn how to target elements using class, id, element, and advanced selectors.',
      videoUrl: 'https://www.youtube.com/embed/l1mER1bV0N0',
      quiz: {
        question: 'Which selector targets an element by ID?',
        options: ['#id', '.class', '*', 'element'],
        correctAnswer: '#id'
      },
      task: 'Style elements using class and id selectors in a sample HTML page.'
    },

    'box-model': {
      id: 'box-model',
      title: 'CSS Box Model',
      description: 'Understand content, padding, border, and margin — the foundation of layout and spacing.',
      videoUrl: 'https://www.youtube.com/embed/rIO5326FgPE',
      quiz: {
        question: 'Which property controls space outside an element?',
        options: ['margin', 'padding', 'border', 'width'],
        correctAnswer: 'margin'
      },
      task: 'Create a box with padding, border, and margin applied visibly.'
    },

    'colors-backgrounds': {
      id: 'colors-backgrounds',
      title: 'Colors & Backgrounds',
      description: 'Apply colors, gradients, and background images to enhance UI.',
      videoUrl: 'https://www.youtube.com/embed/u-aNSjSxX0Y',
      quiz: {
        question: 'Which property sets background color?',
        options: ['background-color', 'color', 'bgcolor', 'fill'],
        correctAnswer: 'background-color'
      },
      task: 'Design a card with background color and gradient.'
    },

    // 🧱 LAYOUT BASICS
    'display-position': {
      id: 'display-position',
      title: 'Display & Position',
      description: 'Learn block, inline, inline-block, and positioning techniques.',
      videoUrl: 'https://www.youtube.com/embed/jx5jmI0UlXU',
      quiz: {
        question: 'Which position value fixes element on screen?',
        options: ['fixed', 'absolute', 'relative', 'static'],
        correctAnswer: 'fixed'
      },
      task: 'Create a fixed header that stays on top while scrolling.'
    },

    'flexbox-layout': {
      id: 'flexbox-layout',
      title: 'Introduction to Flexbox',
      description: 'Master one-dimensional layouts using Flexbox.',
      videoUrl: 'https://www.youtube.com/embed/3YW65K6i0m4',
      quiz: {
        question: 'Which property enables Flexbox?',
        options: ['display: flex', 'position: relative', 'float: left', 'layout: block'],
        correctAnswer: 'display: flex'
      },
      task: 'Create a responsive navbar using justify-content: space-between.'
    },

    'flexbox-advanced': {
      id: 'flexbox-advanced',
      title: 'Advanced Flexbox',
      description: 'Learn align-items, flex-grow, flex-wrap, and complex layouts.',
      videoUrl: 'https://www.youtube.com/embed/JJSoEo8JSnc',
      quiz: {
        question: 'Which property controls alignment on cross axis?',
        options: ['align-items', 'justify-content', 'flex-wrap', 'gap'],
        correctAnswer: 'align-items'
      },
      task: 'Build a card layout with wrapping using flex-wrap.'
    },

    'grid-layout': {
      id: 'grid-layout',
      title: 'CSS Grid',
      description: 'Create powerful two-dimensional layouts using CSS Grid.',
      videoUrl: 'https://www.youtube.com/embed/jV8B24rSN5o',
      quiz: {
        question: 'Which property defines grid columns?',
        options: [
          'grid-template-columns',
          'grid-columns',
          'columns',
          'grid-layout'
        ],
        correctAnswer: 'grid-template-columns'
      },
      task: 'Create a 3-column layout using CSS Grid.'
    },

    // 📱 RESPONSIVE DESIGN
    'media-queries': {
      id: 'media-queries',
      title: 'Media Queries',
      description: 'Make layouts responsive for mobile, tablet, and desktop.',
      videoUrl: 'https://www.youtube.com/embed/2KL-z9A56SQ',
      quiz: {
        question: 'Which keyword is used in media queries?',
        options: ['@media', '@screen', '@responsive', '@query'],
        correctAnswer: '@media'
      },
      task: 'Create a layout that changes from column to row on larger screens.'
    },

    'responsive-units': {
      id: 'responsive-units',
      title: 'Responsive Units',
      description: 'Use %, em, rem, vh, and vw for scalable design.',
      videoUrl: 'https://www.youtube.com/embed/_-aDOAMmDHI',
      quiz: {
        question: 'Which unit is relative to root font size?',
        options: ['rem', 'em', '%', 'px'],
        correctAnswer: 'rem'
      },
      task: 'Convert a layout from px to rem and %.'
    },

    // 🎨 UI & EFFECTS
    'typography': {
      id: 'typography',
      title: 'Typography',
      description: 'Style text using fonts, sizes, weights, spacing, and line height.',
      videoUrl: 'https://www.youtube.com/embed/K3cKkHj9l9o',
      quiz: {
        question: 'Which property controls text spacing?',
        options: ['letter-spacing', 'font-size', 'line-height', 'font-weight'],
        correctAnswer: 'letter-spacing'
      },
      task: 'Design a clean blog text layout with proper typography.'
    },

    'transitions': {
      id: 'transitions',
      title: 'CSS Transitions',
      description: 'Create smooth animations between states.',
      videoUrl: 'https://www.youtube.com/embed/zHUpx90NerM',
      quiz: {
        question: 'Which property defines animation duration?',
        options: ['transition-duration', 'animation-time', 'speed', 'duration'],
        correctAnswer: 'transition-duration'
      },
      task: 'Add hover transition to a button.'
    },

    'animations': {
      id: 'animations',
      title: 'CSS Animations',
      description: 'Use keyframes to create complex animations.',
      videoUrl: 'https://www.youtube.com/embed/1PnVor36_40',
      quiz: {
        question: 'Which rule defines animation frames?',
        options: ['@keyframes', '@frames', '@animation', '@motion'],
        correctAnswer: '@keyframes'
      },
      task: 'Create a bouncing ball animation.'
    },

    // ⚡ ADVANCED
    'variables': {
      id: 'variables',
      title: 'CSS Variables',
      description: 'Use custom properties for reusable and maintainable styles.',
      videoUrl: 'https://www.youtube.com/embed/PHO6TBq_auI',
      quiz: {
        question: 'How do you declare a variable?',
        options: [
          '--main-color: red;',
          '$color: red;',
          'var color = red;',
          '@color red'
        ],
        correctAnswer: '--main-color: red;'
      },
      task: 'Create a theme using CSS variables.'
    },

    'best-practices': {
      id: 'best-practices',
      title: 'CSS Best Practices',
      description: 'Write clean, scalable, and maintainable CSS using naming conventions and structure.',
      videoUrl: 'https://www.youtube.com/embed/DjNq3eD7V6I',
      quiz: {
        question: 'Which naming convention is widely used?',
        options: ['BEM', 'OOP', 'MVC', 'REST'],
        correctAnswer: 'BEM'
      },
      task: 'Refactor a messy CSS file into structured BEM format.'
    },
    // HTML Lessons
    // 🔰 BASICS
    'what-is-html': {
      id: 'what-is-html',
      title: 'What is HTML?',
      description: 'Understand how HTML structures the web, acting as the backbone of every website by defining elements and content layout.',
      videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE',
      quiz: {
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Tool Multi Language',
          'Home Tool Markup Language'
        ],
        correctAnswer: 'Hyper Text Markup Language'
      },
      task: 'Write a short paragraph explaining what HTML is and where it is used.'
    },

    'first-html-page': {
      id: 'first-html-page',
      title: 'First HTML Page',
      description: 'Learn how to create, save, and run your first HTML file in a browser environment.',
      videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
      quiz: {
        question: 'Which tag defines the root of an HTML document?',
        options: ['<html>', '<body>', '<head>', '<main>'],
        correctAnswer: '<html>'
      },
      task: 'Create hello.html with a heading and open it in your browser.'
    },

    'html-structure': {
      id: 'html-structure',
      title: 'HTML Document Structure',
      description: 'Deep dive into <!DOCTYPE>, <html>, <head>, and <body> — the essential structure of any HTML document.',
      videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
      quiz: {
        question: 'Where do metadata and title tags go?',
        options: ['<head>', '<body>', '<footer>', '<section>'],
        correctAnswer: '<head>'
      },
      task: 'Create a proper HTML5 structure including title and meta charset.'
    },

    'basic-tags': {
      id: 'basic-tags',
      title: 'Basic Tags',
      description: 'Learn commonly used tags like headings, paragraphs, links, and lists.',
      videoUrl: 'https://www.youtube.com/embed/S9S69vU2-hY',
      quiz: {
        question: 'Which tag creates a hyperlink?',
        options: ['<a>', '<p>', '<link>', '<href>'],
        correctAnswer: '<a>'
      },
      task: 'Create a page with headings, paragraph, and a clickable link.'
    },

    // 🧱 CONTENT ELEMENTS
    'images': {
      id: 'images',
      title: 'Images in HTML',
      description: 'Learn how to embed and optimize images using the <img> tag and its attributes.',
      videoUrl: 'https://www.youtube.com/embed/7xTGNNLPyMI',
      quiz: {
        question: 'Which attribute specifies image source?',
        options: ['src', 'href', 'link', 'alt'],
        correctAnswer: 'src'
      },
      task: 'Add an image with alt text and width/height attributes.'
    },

    'lists': {
      id: 'lists',
      title: 'Lists',
      description: 'Understand ordered, unordered, and description lists.',
      videoUrl: 'https://www.youtube.com/embed/1PnVor36_40',
      quiz: {
        question: 'Which tag is used for ordered list?',
        options: ['<ol>', '<ul>', '<li>', '<dl>'],
        correctAnswer: '<ol>'
      },
      task: 'Create both ordered and unordered lists with 5 items each.'
    },

    'tables': {
      id: 'tables',
      title: 'Tables',
      description: 'Create structured tabular data using table, row, and column tags.',
      videoUrl: 'https://www.youtube.com/embed/pQN-pnXPaVg',
      quiz: {
        question: 'Which tag defines a table row?',
        options: ['<tr>', '<td>', '<th>', '<table>'],
        correctAnswer: '<tr>'
      },
      task: 'Build a table with 3 rows and 3 columns including headers.'
    },

    // 🧾 FORMS
    'forms-basics': {
      id: 'forms-basics',
      title: 'Forms Basics',
      description: 'Understand how forms collect user data using inputs, buttons, and labels.',
      videoUrl: 'https://www.youtube.com/embed/fNcJuPIZ2WE',
      quiz: {
        question: 'Which tag creates a form?',
        options: ['<form>', '<input>', '<button>', '<fieldset>'],
        correctAnswer: '<form>'
      },
      task: 'Create a form with name and email input fields.'
    },

    'input-types': {
      id: 'input-types',
      title: 'Input Types',
      description: 'Explore different types like text, password, email, radio, and checkbox.',
      videoUrl: 'https://www.youtube.com/embed/fNcJuPIZ2WE',
      quiz: {
        question: 'Which type is used for email validation?',
        options: ['email', 'text', 'mail', 'input'],
        correctAnswer: 'email'
      },
      task: 'Build a form with at least 4 different input types.'
    },

    'form-validation': {
      id: 'form-validation',
      title: 'Form Validation',
      description: 'Use HTML5 validation attributes like required, minlength, and pattern.',
      videoUrl: 'https://www.youtube.com/embed/hzjS8_AIs_U',
      quiz: {
        question: 'Which attribute makes a field mandatory?',
        options: ['required', 'must', 'validate', 'compulsory'],
        correctAnswer: 'required'
      },
      task: 'Add required validation to all fields in your form.'
    },

    // 🧩 SEMANTIC HTML
    'semantic-html': {
      id: 'semantic-html',
      title: 'Semantic HTML',
      description: 'Learn why semantic tags improve SEO, accessibility, and maintainability.',
      videoUrl: 'https://www.youtube.com/embed/kGW8Al_cga4',
      quiz: {
        question: 'Which is a semantic tag?',
        options: ['<article>', '<div>', '<span>', '<b>'],
        correctAnswer: '<article>'
      },
      task: 'Convert a div-based layout into semantic HTML structure.'
    },

    'header-footer': {
      id: 'header-footer',
      title: 'Header & Footer',
      description: 'Define top and bottom sections using semantic tags.',
      videoUrl: 'https://www.youtube.com/embed/Xp0hN4N7-YI',
      quiz: {
        question: 'Where is footer placed?',
        options: [
          'At bottom of page or section',
          'Inside head',
          'Top only',
          'Inside nav'
        ],
        correctAnswer: 'At bottom of page or section'
      },
      task: 'Add header and footer to your webpage layout.'
    },

    'nav-aside': {
      id: 'nav-aside',
      title: 'Nav & Aside',
      description: 'Use navigation and sidebar elements effectively.',
      videoUrl: 'https://www.youtube.com/embed/m9uH0y52J_I',
      quiz: {
        question: 'Which tag wraps navigation links?',
        options: ['<nav>', '<aside>', '<ul>', '<header>'],
        correctAnswer: '<nav>'
      },
      task: 'Create a navigation bar with 5 links.'
    },

    // 🎥 MEDIA
    'audio-video': {
      id: 'audio-video',
      title: 'Audio & Video',
      description: 'Embed multimedia using <audio> and <video> tags.',
      videoUrl: 'https://www.youtube.com/embed/3JluqTojuME',
      quiz: {
        question: 'Which tag plays video?',
        options: ['<video>', '<media>', '<movie>', '<play>'],
        correctAnswer: '<video>'
      },
      task: 'Embed a video with controls enabled.'
    },

    // ⚡ ADVANCED
    'iframes': {
      id: 'iframes',
      title: 'iFrames',
      description: 'Embed external content like YouTube or maps using iframe.',
      videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      quiz: {
        question: 'What does iframe do?',
        options: [
          'Embeds another webpage',
          'Styles content',
          'Creates forms',
          'Adds animation'
        ],
        correctAnswer: 'Embeds another webpage'
      },
      task: 'Embed a YouTube video using iframe.'
    },

    'meta-tags': {
      id: 'meta-tags',
      title: 'Meta Tags & SEO',
      description: 'Control page metadata, responsiveness, and SEO using meta tags.',
      videoUrl: 'https://www.youtube.com/embed/PlxWf493en4',
      quiz: {
        question: 'Which meta tag makes site responsive?',
        options: ['viewport', 'charset', 'author', 'description'],
        correctAnswer: 'viewport'
      },
      task: 'Add viewport and description meta tags to your page.'
    },
    // JavaScript Lessons
    // 🔰 BASICS
    'what-is-javascript': {
      id: 'what-is-javascript',
      title: 'What is JavaScript?',
      description: 'Understand the role of JavaScript in web development and how it enables interactivity in web pages.',
      videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      quiz: {
        question: 'What is JavaScript mainly used for?',
        options: [
          'Styling web pages',
          'Structuring content',
          'Adding interactivity',
          'Database management'
        ],
        correctAnswer: 'Adding interactivity'
      },
      task: 'Write a simple script that shows an alert message in the browser.'
    },

    'let-const': {
      id: 'let-const',
      title: 'Let & Const',
      description: 'Understand block scope, reassignment, and best practices for variable declaration.',
      videoUrl: 'https://www.youtube.com/embed/PjH6Cg_9O6E',
      quiz: {
        question: 'Which keyword is used for constants?',
        options: ['const', 'let', 'var', 'static'],
        correctAnswer: 'const'
      },
      task: 'Declare variables using let and const, and test reassignment behavior.'
    },

    'data-types': {
      id: 'data-types',
      title: 'Data Types',
      description: 'Explore primitive and reference data types in JavaScript.',
      videoUrl: 'https://www.youtube.com/embed/edlFjlzxkSI',
      quiz: {
        question: 'Which is NOT a primitive type?',
        options: ['Object', 'String', 'Number', 'Boolean'],
        correctAnswer: 'Object'
      },
      task: 'Create variables for each primitive type and log their typeof.'
    },

    'operators': {
      id: 'operators',
      title: 'Operators',
      description: 'Learn arithmetic, comparison, and logical operators.',
      videoUrl: 'https://www.youtube.com/embed/IsG4Xd6LlsM',
      quiz: {
        question: 'Which operator checks strict equality?',
        options: ['===', '==', '=', '!='],
        correctAnswer: '==='
      },
      task: 'Write examples using all comparison operators.'
    },

    // 🔁 CONTROL FLOW
    'conditionals': {
      id: 'conditionals',
      title: 'Conditionals',
      description: 'Control flow using if, else, and switch statements.',
      videoUrl: 'https://www.youtube.com/embed/s9wW2PpJsmQ',
      quiz: {
        question: 'Which keyword is used for multiple conditions?',
        options: ['switch', 'if', 'for', 'while'],
        correctAnswer: 'switch'
      },
      task: 'Create a program that checks even or odd number.'
    },

    'loops': {
      id: 'loops',
      title: 'Loops',
      description: 'Iterate using for, while, and do-while loops.',
      videoUrl: 'https://www.youtube.com/embed/s9wW2PpJsmQ',
      quiz: {
        question: 'Which loop runs at least once?',
        options: ['do-while', 'for', 'while', 'foreach'],
        correctAnswer: 'do-while'
      },
      task: 'Print numbers from 1 to 10 using different loops.'
    },

    // 🧩 FUNCTIONS
    'functions': {
      id: 'functions',
      title: 'Functions',
      description: 'Create reusable blocks of code using functions.',
      videoUrl: 'https://www.youtube.com/embed/N8ap4k_1QEQ',
      quiz: {
        question: 'Which keyword defines a function?',
        options: ['function', 'def', 'func', 'method'],
        correctAnswer: 'function'
      },
      task: 'Write a function that adds two numbers.'
    },

    'arrow-functions': {
      id: 'arrow-functions',
      title: 'Arrow Functions',
      description: 'Use modern arrow syntax and understand lexical this.',
      videoUrl: 'https://www.youtube.com/embed/h33Srr5J9nY',
      quiz: {
        question: 'Arrow functions use which symbol?',
        options: ['=>', '->', '=', '::'],
        correctAnswer: '=>'
      },
      task: 'Convert a normal function into an arrow function.'
    },

    // 📦 ARRAYS & OBJECTS
    'arrays': {
      id: 'arrays',
      title: 'Arrays',
      description: 'Work with array methods like map, filter, and reduce.',
      videoUrl: 'https://www.youtube.com/embed/R8rmfD9Y5-c',
      quiz: {
        question: 'Which method creates a new array?',
        options: ['map', 'push', 'pop', 'shift'],
        correctAnswer: 'map'
      },
      task: 'Use map to double all numbers in an array.'
    },

    'objects': {
      id: 'objects',
      title: 'Objects',
      description: 'Store structured data using key-value pairs.',
      videoUrl: 'https://www.youtube.com/embed/PFmuCDHHpwk',
      quiz: {
        question: 'How do you access object property?',
        options: ['obj.key', 'obj->key', 'obj:key', 'obj(key)'],
        correctAnswer: 'obj.key'
      },
      task: 'Create an object representing a user and log properties.'
    },

    // 🌐 DOM
    'dom-basics': {
      id: 'dom-basics',
      title: 'DOM Basics',
      description: 'Interact with HTML elements using JavaScript.',
      videoUrl: 'https://www.youtube.com/embed/0ik6X4DJKCc',
      quiz: {
        question: 'Which method selects element by ID?',
        options: [
          'getElementById',
          'querySelectorAll',
          'getElements',
          'selectId'
        ],
        correctAnswer: 'getElementById'
      },
      task: 'Change text content of an element using JavaScript.'
    },

    'events': {
      id: 'events',
      title: 'Events',
      description: 'Handle user interactions like clicks, input, and keyboard events.',
      videoUrl: 'https://www.youtube.com/embed/XF1_MlZ5l6M',
      quiz: {
        question: 'Which event triggers on click?',
        options: ['click', 'hover', 'press', 'change'],
        correctAnswer: 'click'
      },
      task: 'Create a button that shows alert on click.'
    },

    // ⏳ ASYNC JS
    'async-js': {
      id: 'async-js',
      title: 'Async JavaScript',
      description: 'Understand callbacks, promises, and async/await.',
      videoUrl: 'https://www.youtube.com/embed/PoRJizFvM7s',
      quiz: {
        question: 'Which keyword handles async functions?',
        options: ['async', 'await', 'promise', 'delay'],
        correctAnswer: 'async'
      },
      task: 'Create an async function that returns data after delay.'
    },

    'fetch-api': {
      id: 'fetch-api',
      title: 'Fetch API',
      description: 'Make API calls and handle responses.',
      videoUrl: 'https://www.youtube.com/embed/Oive66jrwBs',
      quiz: {
        question: 'Which method is used to fetch data?',
        options: ['fetch()', 'get()', 'request()', 'call()'],
        correctAnswer: 'fetch()'
      },
      task: 'Fetch data from a public API and log it.'
    },

    // ⚡ ADVANCED
    'es6-features': {
      id: 'es6-features',
      title: 'ES6 Features',
      description: 'Learn destructuring, spread, rest, and template literals.',
      videoUrl: 'https://www.youtube.com/embed/NCwa_xi0Uuc',
      quiz: {
        question: 'Which operator spreads elements?',
        options: ['...', '*', '&', '%'],
        correctAnswer: '...'
      },
      task: 'Use destructuring to extract values from an object.'
    },

    'closures': {
      id: 'closures',
      title: 'Closures',
      description: 'Understand scope and function memory in JavaScript.',
      videoUrl: 'https://www.youtube.com/embed/3a0I8ICR1Vg',
      quiz: {
        question: 'Closures allow access to?',
        options: [
          'Outer scope',
          'Global only',
          'Local only',
          'None'
        ],
        correctAnswer: 'Outer scope'
      },
      task: 'Write a function that returns another function using closure.'
    }

  };

  getLessonById(id: string): LessonContent | undefined {
    return this.lessons[id];
  }
}
