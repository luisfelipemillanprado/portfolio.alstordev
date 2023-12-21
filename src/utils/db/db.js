const db = {
  details: [
    { specification: 'Age : 24 years', id: Math.random() },
    { specification: 'Job : Freelancer', id: Math.random() },
    { specification: 'Phone : +53 55193306', id: Math.random() },
    { specification: 'Developer name : @alstordev', id: Math.random() },
    { specification: 'Idioms : Spanish, English', id: Math.random() },
    { specification: 'Graduate : Software Engineer', id: Math.random() },
  ],
  hobbies: [
    { hobby: 'CINEMA', id: Math.random() },
    { hobby: 'CARS', id: Math.random() },
    { hobby: 'COFFEE', id: Math.random() },
    { hobby: 'MUSIC', id: Math.random() },
    { hobby: 'READ', id: Math.random() },
    { hobby: 'SPORTS', id: Math.random() },
    { hobby: 'MAC OS', id: Math.random() },
    { hobby: 'TRAVEL', id: Math.random() },
  ],
  webparts: [
    {
      icon: 'design',
      title: 'Design',
      phrase: 'Create a unique digital product.',
      projects: 3,
      id: Math.random(),
    },
    {
      icon: 'front-end',
      title: 'Frontend',
      phrase: 'Unique interfaces with Nextjs 14.',
      projects: 3,
      id: Math.random(),
    },
    {
      icon: 'back-end',
      title: 'Backend',
      phrase: 'Safe and functional logic with nodejs.',
      projects: 3,
      id: Math.random(),
    },
    {
      icon: 'seo',
      title: 'Seo',
      phrase: 'Improve the positioning of a website',
      projects: 3,
      id: Math.random(),
    },
  ],
  skills: {
    technicalSkills: [
      { icon: 'html', text: 'HTML', percent: 75, id: Math.random() },
      { icon: 'css', text: 'CSS', percent: 75, id: Math.random() },
      { icon: 'animation', text: 'Anim...', percent: 75, id: Math.random() },
      { icon: 'javascript', text: 'JS', percent: 75, id: Math.random() },
      { icon: 'figma', text: 'Figma', percent: 75, id: Math.random() },
      { icon: 'react', text: 'React', percent: 75, id: Math.random() },
      { icon: 'nextjs', text: 'Next', percent: 75, id: Math.random() },
      { icon: 'nodejs', text: 'Node', percent: 75, id: Math.random() },
      { icon: 'mongodb', text: 'Mongo', percent: 75, id: Math.random() },
      { icon: 'express', text: 'Express', percent: 75, id: Math.random() },
    ],
    softSkills: [
      { text: 'Communication', percent: 80, id: Math.random() },
      { text: 'Teamwork', percent: 75, id: Math.random() },
      { text: 'Creativity', percent: 99, id: Math.random() },
      { text: 'Dedication', percent: 95, id: Math.random() },
      { text: 'Adaptability', percent: 75, id: Math.random() },
    ],
  },
  projects: [
    {
      cover: 'pet-shelter',
      title: 'Pet Shelter',
      percent: 90,
      href: 'https://github.com/luisfelipemillanprado/Take-me-Home',
      id: Math.random(),
    },
    {
      cover: 'bit-coin',
      title: 'Bitcoin',
      percent: 99,
      href: 'https://github.com/luisfelipemillanprado/luisfelipemillanprado.github.io',
      id: Math.random(),
    },
    {
      cover: 'work-portfolio',
      title: 'Portfolio',
      percent: 99,
      href: 'https://github.com/luisfelipemillanprado/work-portfolio',
      id: Math.random(),
    },
    {
      cover: 'ti',
      title: 'Ticket',
      percent: 30,
      href: 'https://github.com/luisfelipemillanprado/luisfelipemillanprado.github.io',
      id: Math.random(),
    },
  ],
  contacts: ['Cuba, Cienfuegos', '+53 55193306', 'luisfelipemillanprado@gmail.com'],
  alertEmailMessage: {
    error: 'Check your internet and try again',
    success: 'Message sent succesfully',
    default: 'Internal error, try again later',
  },
  alertEmailType: { error: 'error', warning: 'warning', success: 'success' },
  alertTypeError: { connectTimeout: 'UND_ERR_CONNECT_TIMEOUT', notConnect: 'EAI_AGAIN' },
};
export default db;
