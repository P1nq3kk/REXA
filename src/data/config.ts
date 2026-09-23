export const portfolioConfig = {
  personal: {
    name: 'ISKRA',
    fullName: 'Команда ISKRA',
    role: 'Веб-студия',
    email: 'hello@iskra.dev',
    phone: '+7 (999) 123-45-67',
    cvLink: '#',
    portrait: '', // Will be replaced by a logo icon in the component
    logo: 'ISKRA',
  },
  hero: {
    badge: "ВЕБ-СТУДИЯ",
    headlinePart1: "Мы — команда ",
    headlinePart2: "Создаем современные сайты.",
    description: "Мы — команда профессионалов ISKRA, специализирующаяся на разработке высокотехнологичных веб-приложений и уникальных цифровых продуктов для вашего бизнеса.",
    techIcons: [
      { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ]
  },
  about: {
    badge: 'О НАС',
    headline: "Мы увлечены созданием\nцифровых решений",
    description: "Уже несколько лет наша команда помогает бизнесу масштабироваться, автоматизировать процессы и привлекать новых клиентов за счет разработки быстрых, надежных и современных веб-платформ.",
    stats: [
      { icon: 'calendar', value: '5+', label: 'Лет на Рынке' },
      { icon: 'code', value: '100+', label: 'Выполненных Проектов' },
      { icon: 'smile', value: '50+', label: 'Довольных Клиентов' },
      { icon: 'trophy', value: '100%', label: 'Удовлетворенность' },
    ]
  },
  skills: {
    badge: 'НАШИ ТЕХНОЛОГИИ',
    headline: 'Стек, которым мы владеем',
    categories: [
      {
        skills: [
          { name: 'HTML', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'CSS', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          { name: 'JavaScript', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        ]
      },
      {
        skills: [
          { name: 'React.js', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Next.js', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
          { name: 'TypeScript', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        ]
      },
      {
        skills: [
          { name: 'Node.js', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Tailwind CSS', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
          { name: 'Git', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        ]
      }
    ]
  },
  projects: {
    badge: 'НАШИ РАБОТЫ',
    headline: 'Некоторые из недавних проектов',
    items: [
      {
        title: 'E-Commerce Платформа',
        description: 'Фуллстек решение для крупного интернет-магазина с современным UI/UX',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
        link: '#',
      },
      {
        title: 'Корпоративный Портал',
        description: 'Приложение для совместного управления задачами и ресурсами компании',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        link: '#',
      },
      {
        title: 'Аналитический Дашборд',
        description: 'Мощная панель управления для отслеживания бизнес-метрик в реальном времени',
        image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop',
        link: '#',
      }
    ]
  },
  contact: {
    badge: "ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ",
    headline: 'Нужен современный сайт?',
    description: "Мы всегда открыты для обсуждения новых проектов и амбициозных задач. Доверьте разработку профессионалам из ISKRA!",
    testimonial: {
      quote: "Команда ISKRA — это исключительные специалисты, которые сдают высококачественную работу точно в срок. Их подход к бизнес-задачам просто выдающийся.",
      author: 'Сара Джонсон',
      role: 'CEO, TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    },
    socials: [
      { name: 'GitHub', icon: 'github', link: '#' },
      { name: 'LinkedIn', icon: 'linkedin', link: '#' },
      { name: 'Twitter/X', icon: 'twitter', link: '#' },
      { name: 'Instagram', icon: 'instagram', link: '#' },
    ]
  },
  nav: [
    { label: 'Главная', href: '#home' },
    { label: 'О нас', href: '#about' },
    { label: 'Технологии', href: '#skills' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Блог', href: '#blog' },
    { label: 'Контакты', href: '#contact' },
  ]
};
