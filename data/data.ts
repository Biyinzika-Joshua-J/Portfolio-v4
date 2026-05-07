import { url } from 'inspector';
import IconReact from '@/components/icons/React';
import IconBrandJavascript from '@/components/icons/JavaScript';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';

// TODO: Add sell online project
// TODO: Add new articles
// TODO: Update favicon

export const ProjectsData = [
  {
    title: '',
    description:
      'Property management software for Ugandan property managers and landlords, with tenant file management, rent tracking, and maintenance ticket handling.',
    image: '/logos/tenaar.png',
    url: 'https://tenaar.com',
    height: 32,
    width: 108,
    animation: 'scale-110'
  },

  {
    title: 'Posiboo',
    description:
      'A JSON/HTML to PDF generation API that allows you to create PDFs from JSON or HTML templates.',
    image: '/logos/posiboo.png',
    url: 'https://posiboo.com',
    height: 30,
    width: 30,
    animation: 'scale-110',
    type: undefined
  },

  {
    title: 'Organi',
    description:
      'A platform that helps you add a blog to your web app in less than 5 minutes. Fun fact: Organi currently powers the josh-codes.dev/blog blog.',
    image: '/logos/organi.png',
    url: 'https://organi.tenaar.com',
    height: 30,
    width: 30,
    animation: 'scale-110',
    type: undefined,
    status: 'In development'
  },

  /*{
    title: 'Sell Online',
    description: 'A ShadCN UI Kit built for Solo-developers, Indie-hackers and everybody else who sucks at design and wants to ship fast.',
    // image: '/logos/posiboo.png',
    url: 'https://josh-codes.dev/sell-online',
    height: 30,
    width: 30,
    animation: 'scale-110',
    type: 'Business'
  }, */

  {
    title: 'Tabioo',
    description: 'A tool for designing entity relationship diagrams for databases.',
    image: '/logos/tabioo.ico',
    url: 'https://tabioo.josh-codes.dev/',
    height: 30,
    width: 30,
    animation: 'scale-110',
    status: 'Inactive'
  },

  {
    title: 'Sorting Algorithms Visualizer',
    description:
      'A web app that visualizes sorting algorithms like bubble sort, selection sort, insertion sort, merge sort and quick sort.',
    image: '',
    url: 'https://cs-sorting-algorithms-visualizer.netlify.app/',
    height: 30,
    width: 30,
    animation: 'scale-110',
    type: 'Side Project'
  },

  {
    title: 'Recursive Descent Parser',
    description:
      'A JavaScript implementation of a recursive descent parser that parses a language with similar syntax to JavaScript and creates an AST.',
    image: '/logos/github.jpg',
    url: 'https://github.com/Biyinzika-Joshua-J/Predictive-Recursive-Descent-Parser',
    height: 30,
    width: 30,
    animation: 'scale-110',
    type: 'Side Project'
  },

  {
    title: 'Inverted Index Algorithm',
    description:
      'A Python implementation of an inverted index algorithm that creates an inverted index from a collection of documents and allows for searching the documents.',
    image: '/logos/github.jpg',
    url: 'https://github.com/Biyinzika-Joshua-J/Expansive_Search',
    height: 30,
    width: 30,
    animation: 'scale-110',
    type: 'Side Project'
  },

  {
    title: '',
    description:
      'A platform that aggregates remote jobs into one place. Features state of the art web scraping.',
    image: '/logos/remotla_logo.webp',
    url: 'https://beta.remotla.com',
    animation: 'rotate-6',
    status: 'Discontinued'
  }
];

export const ArticlesData = [
  {
    title: 'React useEffect hook',
    description:
      'React useEffect hook is a function that takes two arguments, a function and an array of dependencies. It is used to perform side effects in function components.',
    icon: IconReact,
    url: 'https://medium.com/@joshuabiyinzika22/reacts-useeffect-hook-c71844d95e1d',
    height: 30,
    width: 30,
    animation: 'scale-110',
    medium: 'Medium'
  },
  {
    title: 'React useState hook',
    description:
      'React useState hook is a function that takes an initial state and returns an array with two elements. The first element is the current state and the second element is a function that updates the state.',
    icon: IconReact,
    url: 'https://medium.com/@joshuabiyinzika22/reacts-usestate-hook-574001ef0b10',
    height: 30,
    width: 30,
    animation: '-rotate-6'
  },
  {
    title: 'JavaScript Event Loop',
    description:
      'JavaScript event loop is a mechanism that allows JavaScript to perform non-blocking operations. It is responsible for executing code, collecting and processing events, and executing queued sub-tasks.',
    icon: IconBrandJavascript,
    url: 'https://medium.com/@joshuabiyinzika22/javascripts-event-loop-everything-you-need-to-know-23f440d6be41',
    height: 30,
    width: 30,
    animation: 'rotate-6'
  },
  {
    title: 'Hoisting in JavaScript',
    description:
      'Hoisting in JavaScript is a mechanism that allows you to access functions and variables before they are declared. It is a default behavior in JavaScript that moves declarations to the top of the scope.',
    icon: IconBrandJavascript,
    url: 'https://medium.com/@joshuabiyinzika22/what-is-hoisting-in-javascript-everything-you-need-to-know-8e933473d88d',
    height: 30,
    width: 30,
    animation: 'scale-110'
  },
  {
    title: 'This keyword in JavaScript',
    description:
      'The this keyword in JavaScript refers to the object that is executing the current function. It is a reference to the object that the function is a method of.',
    icon: IconBrandJavascript,
    url: 'https://medium.com/@joshuabiyinzika22/wth-is-the-javascript-this-keyword-everything-you-need-to-know-e69f33c14522',
    height: 30,
    width: 30,
    animation: 'rotate-12'
  }
];

export const SiteDescription =
  'Software engineer with 4 years of experience building and shipping web products, developer tools, APIs, and backend systems. I work mainly with TypeScript, Next.js, Python, Rust, and PostgreSQL, with a focus on clean architecture, performance, and real product impact.';
