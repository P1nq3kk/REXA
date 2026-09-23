export const portfolioConfig = {
  personal: {
    name: 'ISKRA',
    fullName: 'Команда ISKRA',
    role: 'Веб-студия',
    email: 'iskradevelopmentt@gmail.com',
    phone: '+7 706 677 8297',
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
        title: 'Aura Motors',
        description: 'Корпоративный сайт автосалона: онлайн-каталог и запись на обслуживание.',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop',
        link: 'https://aura-motors.onrender.com/',
      },
      {
        title: 'Vertex Construction',
        description: 'Сайт строительной компании с портфолио объектов и услугами.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        link: 'https://vertex-construction.onrender.com/',
      },
      {
        title: 'Dentis Lux',
        description: 'Современный сайт стоматологической клиники с онлайн-записью.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop',
        link: 'https://dentis-lux.onrender.com/',
      }
    ]
  },
  contact: {
    badge: "ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ",
    headline: 'Нужен современный сайт?',
    description: "Мы всегда открыты для обсуждения новых проектов и амбициозных задач. Доверьте разработку профессионалам из ISKRA!",
    testimonial: {
      quote: "Ребята из ISKRA разработали для нас отличный корпоративный сайт. Работать с ними было одно удовольствие: все этапы сдали точно в срок, учли наши пожелания и предложили классные идеи по дизайну. Однозначно рекомендую!",
      author: 'Михаил Воронов',
      role: 'Директор по развитию, СтройИнвест',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
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
