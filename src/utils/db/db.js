const db = {
  mainInfo: {
    name: 'LUIS FELIPE',
    profession: 'DEVELOPER & DESING',
    devname: '@Alstordev',
    rights: '2023. All rights reserved.',
  },
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
    { hobby: 'APPLE', id: Math.random() },
    { hobby: 'TRAVEL', id: Math.random() },
  ],
  cv: { href: 'https://drive.google.com/file/d/14i8A6iS_pYSvMd-8JFsyz5judEeWyBss/view?usp=sharing' },
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
      phrase: 'Improve the positioning of a website.',
      projects: 3,
      id: Math.random(),
    },
  ],
  skills: {
    technicalSkills: [
      { icon: 'html', text: 'HTML', percent: 75, ariaLabel: 'HTML skill', id: Math.random() },
      { icon: 'css', text: 'CSS', percent: 75, ariaLabel: 'CSS skill', id: Math.random() },
      { icon: 'animation', text: 'Anima...', percent: 75, ariaLabel: 'Animation skill', id: Math.random() },
      { icon: 'javascript', text: 'JS', percent: 75, ariaLabel: 'JavaScript skill', id: Math.random() },
      { icon: 'figma', text: 'Figma', percent: 75, ariaLabel: 'Figma skill', id: Math.random() },
      { icon: 'react', text: 'React', percent: 75, ariaLabel: 'React skill', id: Math.random() },
      { icon: 'nextjs', text: 'Next', percent: 75, ariaLabel: 'Next.js skill', id: Math.random() },
      { icon: 'nodejs', text: 'Node', percent: 75, ariaLabel: 'Node.js skill', id: Math.random() },
      { icon: 'mongodb', text: 'Mongo', percent: 75, ariaLabel: 'MongoDB skill', id: Math.random() },
      { icon: 'express', text: 'Express', percent: 75, ariaLabel: 'Express.js skill', id: Math.random() },
    ],
    softSkills: [
      { text: 'Communication', percent: 80, ariaLabel: 'Communication skill', id: Math.random() },
      { text: 'Teamwork', percent: 75, ariaLabel: 'Teamwork skill', id: Math.random() },
      { text: 'Creativity', percent: 99, ariaLabel: 'Creativity skill', id: Math.random() },
      { text: 'Dedication', percent: 95, ariaLabel: 'Dedication skill', id: Math.random() },
      { text: 'Adaptability', percent: 75, ariaLabel: 'Adaptability skill', id: Math.random() },
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
      percent: 55,
      href: 'https://github.com/luisfelipemillanprado/luisfelipemillanprado.github.io',
      id: Math.random(),
    },
  ],
  contacts: ['Cuba, Cienfuegos', '+53 55193306', 'luisfelipemillanprado@gmail.com'],
  alertEmailMessage: {
    error: 'Check your internet and try again',
    success: 'Message sent succesfully',
  },
  alertEmailType: { error: 'error', success: 'success' },
};
export default db;
