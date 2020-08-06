import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ali | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Ali Kariapper',
  subtitle: 'Im a developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'pic.png',
  paragraphOne: 'I am third year Computer Science student with enthusiasm and focus on development',
  paragraphTwo:
    'I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in this diverse field',
  paragraphThree:
    'Feel free to contact me via email at any time and take a look at my resume below',
  resume: 'https://kariappa.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    // img: 'brain.jpg',
    title: 'Smart-Brain Facial Recognition',
    info: 'React App that detects faces using Clarifais facial recognition API',
    info2:
      'PostgreSQL data base stores user login info and communicates with Front-End thorugh Express endpoints',
    url: 'https://smartbrain-facial-recognition.herokuapp.com/',
    repo: 'https://github.com/Kariappa/Smart-Brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    // img: 'movie.jpg',
    title: 'Movie Search',
    info: 'React app for users to search up their favourite movies',
    info2: 'Displays movie cover, rating, release date and description',
    url: 'https://kariappa.github.io/Movie-Search/',
    repo: 'https://github.com/Kariappa/Movie-Search', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logo.png',
    title: 'Two to Tango',
    info:
      'Developed an application in a team of 5 to help connect users of the music streaming service Deezer',
    info2:
      'Organized a data-set of ~140 000 users representing their friendship networks and liked genres of music',
    url: '',
    repo: 'https://github.com/Kariappa/Two-to-Tango', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alikariapper@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alikariapper/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kariappa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
