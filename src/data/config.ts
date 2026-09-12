export const portfolioConfig = {
  personal: {
    name: 'Алекс',
    fullName: 'Алекс Разработчик',
    role: 'Веб-разработчик',
    email: 'hello@alexdev.com',
    phone: '+1 (555) 123-4567',
    cvLink: '#',
    portrait: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    logo: 'CodeCraft',
  },
  hero: {
    badge: "Я ВЕБ-РАЗРАБОТЧИК",
    headlinePart1: "Привет, я ",
    headlinePart2: "Я создаю проекты для веба.",
    description: "Я увлеченный веб-разработчик, специализирующийся на создании исключительных цифровых продуктов с использованием современных технологий.",
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
    badge: 'ОБО МНЕ',
    headline: "Я увлечен созданием\nцифровых решений",
    description: "Имея более 4 лет опыта в веб-разработке, я помогаю компаниям и частным лицам воплощать их идеи в жизнь с помощью чистого, эффективного и удобного кода.",
    stats: [
      { icon: 'calendar', value: '4+', label: 'Года Опыта' },
      { icon: 'code', value: '50+', label: 'Выполненных Проектов' },
      { icon: 'smile', value: '30+', label: 'Довольных Клиентов' },
      { icon: 'trophy', value: '100%', label: 'Удовлетворенность' },
    ]
  },
  skills: {
    badge: 'МОИ НАВЫКИ',
    headline: 'Технологии, которыми я владею',
    categories: [
      {
        skills: [
          { name: 'HTML', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'CSS', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          { name: 'JavaScript', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        ]
      },
      {
        skills: [
          { name: 'React.js', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Next.js', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
          { name: 'TypeScript', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        ]
      },
      {
        skills: [
          { name: 'Node.js', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Tailwind CSS', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
          { name: 'Git', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        ]
      }
    ]
  },
  projects: {
    badge: 'МОИ РАБОТЫ',
    headline: 'Некоторые из недавних проектов',
    items: [
      {
        title: 'E-Commerce Платформа',
        description: 'Фуллстек решение для интернет-магазина с современным UI/UX',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
        link: '#',
      },
      {
        title: 'Приложение для задач',
        description: 'Приложение для совместного управления задачами',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        link: '#',
      },
      {
        title: 'Крипто-Дашборд',
        description: 'Дашборд для отслеживания криптовалют в реальном времени',
        image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop',
        link: '#',
      }
    ]
  },
  contact: {
    badge: "ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ",
    headline: 'Есть проект на примете?',
    description: "Я всегда открыт для обсуждения новых проектов и возможностей. Давайте создадим что-то потрясающее вместе!",
    testimonial: {
      quote: "Алекс — исключительный разработчик, который сдает высококачественную работу в срок. Его внимание к деталям и навыки решения проблем выдающиеся.",
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
    { label: 'Обо мне', href: '#about' },
    { label: 'Навыки', href: '#skills' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Блог', href: '#blog' },
    { label: 'Контакты', href: '#contact' },
  ]
};
