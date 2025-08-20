import { url } from 'inspector';
import IconReact from '@/components/icons/React';
import IconBrandJavascript from '@/components/icons/JavaScript';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';

// TODO: Add sell online project
// TODO: Add new articles
// TODO: Update favicon

export const ProjectsData = [
  {
    title: 'Posiboo',
    description:
      'A ShadCN UI Kit built for Solo-developers, Indie-hackers and everybody else who sucks at design and wants to ship fast.',
    image: '/logos/posiboo.png',
    url: 'https://posiboo.com',
    height: 30,
    width: 30,
    animation: 'scale-110',
    type: undefined
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
    title: '',
    description:
      'A platform that aggregates remote jobs into one place. Features state of the art web scraping.',
    image: '/logos/remotla_logo.webp',
    url: 'https://beta.remotla.com',
    animation: 'rotate-6'
  },
  {
    title: 'Tabioo',
    description: 'A tool for designing entity relationship diagrams for databases.',
    image: '/logos/tabioo.ico',
    url: 'https://tabioo.com',
    height: 30,
    width: 30,
    animation: 'scale-110'
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
  "I'm a software engineer shipping startups like a madman. Every project is a small bet, you never know what hits. I write about my journey and share my learnings. My tools of trade are React, Next.js and TypeScript for the frontend, then Python and Django for the backend. Database of choice is PostgreSQL.";
