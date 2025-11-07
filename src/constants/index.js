export const navLinks = [
  {
    id: 1,
    name: 'Inicio',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre mí',
    href: '#about',
  },
  {
    id: 3,
    name: 'Mi trabajo',
    href: '#work',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
    {
    title: 'Delivery Peru',
    desc: 'Delivery Perú es una plataforma en línea diseñada para conectar a los usuarios con una amplia variedad de restaurantes en todo el país. Con una interfaz intuitiva y un sistema de seguimiento en tiempo real, permite realizar pedidos de comida, abarrotes, productos de farmacia y más, con entregas rápidas y seguras.',
    subdesc:
      'Desarrollada con el stack MERN (MongoDB, Express, React, Node.js) y optimizada con Vite, ofrece una experiencia rápida, fluida y segura para realizar pedidos en línea.',
    href: 'https://mfcndpf.onrender.com',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
      {
        id: 2,
        name: 'Express',
        path: 'assets/express.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node JS',
        path: '/assets/Node.png',
      },
    ],
  },
    {
    title: 'Refugio del Sol',
    desc: 'Refugio del Sol es un hotel temático inspirado en la cultura inca, desarrollado con React, Spring Boot 3, Java, MySQL y Bootstrap, logrando un equilibrio entre tradición y tecnología. Su diseño combina elementos andinos en colores y patrones, mientras que la seguridad está garantizada mediante JWT. Este proyecto destaca por su enfoque en experiencia de usuario y autenticidad cultural.',
    subdesc:
      '',
    href: 'https://mfcnhtl.onrender.com',
    texture: '/textures/project/videoHotelCorto.mp4',
    logo: '/assets/logoRdS.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.png',
      },
      {
        id: 2,
        name: 'Spring Boot',
        path: 'assets/spring.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node JS',
        path: '/assets/Node.png',
      },
    ],
  },
  {
    title: 'Análisis Sala Emergencias',
    desc: 'Panel interactivo desarrollado en Power BI para monitorear en tiempo real el funcionamiento de la sala de emergencias, mostrando pacientes atendidos, tiempos de espera, niveles de triage, ocupación de camas y carga del personal médico. Facilita la toma de decisiones rápidas y mejora la eficiencia operativa mediante alertas y análisis comparativos. Tecnologías: Power BI, PostgreSQL y Microsoft Excel.',
    subdesc:
      '',
    href: 'https://app.powerbi.com/view?r=eyJrIjoiMTllNDZjNzAtNjM4Yi00MzAyLWFhOTQtZTljMWZmOTVmOTZkIiwidCI6ImU4ZjJiOTgxLTJkZDUtNDU4MS1iOThlLTJlZDA1M2Y2ZGM3ZiIsImMiOjR9',
    texture: '/textures/project/hospitalbi.mp4',
    logo: '/assets/hospital.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Powe BI',
        path: '/assets/powerbi.png',
      },
      {
        id: 2,
        name: 'Postgre',
        path: 'assets/postgree.png',
      },
      {
        id: 3,
        name: 'Excel',
        path: '/assets/excel.png',
      },
    ],
  },
  {
    title: 'Análisis Ventas Pizzas',
    desc: 'Panel interactivo desarrollado en Power BI para analizar en tiempo real las ventas de pizzas, incluyendo ingresos por día, sabores más vendidos, rendimiento por local, horarios pico y comportamiento de los clientes. Optimiza la toma de decisiones comerciales y permite ajustar estrategias de marketing y producción con base en datos históricos y actuales. Tecnologías: Power BI, PostgreSQL y Microsoft Excel.',
    subdesc:
      '',
    href: 'https://app.powerbi.com/view?r=eyJrIjoiY2JiODVkNWYtYzdkOS00YmVlLWI0MjMtNjdmMDc4NDBiYWY1IiwidCI6ImU4ZjJiOTgxLTJkZDUtNDU4MS1iOThlLTJlZDA1M2Y2ZGM3ZiIsImMiOjR9',
    texture: '/textures/project/pizzabi.mp4',
    logo: '/assets/pizza.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Powe BI',
        path: '/assets/powerbi.png',
      },
      {
        id: 2,
        name: 'Postgre',
        path: 'assets/postgree.png',
      },
      {
        id: 3,
        name: 'Excel',
        path: '/assets/excel.png',
      },
    ],
  },
  {
    title: 'Refugio del Sol',
    desc: 'Refugio del Sol es un hotel temático inspirado en la cultura inca, desarrollado con React, Spring Boot 3, Java, MySQL y Bootstrap, logrando un equilibrio entre tradición y tecnología. Su diseño combina elementos andinos en colores y patrones, mientras que la seguridad está garantizada mediante JWT. Este proyecto destaca por su enfoque en experiencia de usuario y autenticidad cultural.',
    subdesc:
      '',
    href: 'https://mfcnhtl.onrender.com',
    texture: '/textures/project/videoHotelCorto.mp4',
    logo: '/assets/logoRdS.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.png',
      },
      {
        id: 2,
        name: 'Spring Boot',
        path: 'assets/spring.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node JS',
        path: '/assets/Node.png',
      },
    ],
  }

  /*,
  {
    title: 'Delivery Peru - Admin',
    desc: 'Delivery Perú es una plataforma en línea diseñada para conectar a los usuarios con una amplia variedad de restaurantes en todo el país. Con una interfaz intuitiva y un sistema de seguimiento en tiempo real, permite realizar pedidos de comida, abarrotes, productos de farmacia y más, con entregas rápidas y seguras.',
    subdesc:
      'Interfez de Admin desarrollada con el stack MERN (MongoDB, Express, React, Node.js) y optimizada con Vite, ofrece una experiencia rápida, fluida y segura para realizar pedidos en línea.',
    href: 'https://mfcndpa.onrender.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
      {
        id: 2,
        name: 'Express',
        path: 'assets/express.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node JS',
        path: '/assets/Node.png',
      },
    ],
  }*/
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Grupo Consigue Ventas',
    pos: 'Desarrollador Web',
    duration: 'Julio 2025 - Octubre 2025',
    title: 'Desarrollo de paginas Wordpress, Elementor Pro, Woocommerce. Implementación de buenas prácticas de usabilidad (UX/UI) y compatibilidad móvil (responsive design).',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Grupo CEU Perú S.A.C.',
    pos: 'Desarrollador FullStack',
    duration: 'Abril 2025 - Junio 2025',
    title: 'Desarrollo Backend Django. Desarrollo Frontend TypeScript, React. Levantamiento de servicios Docker, Docker Composer, Portainer.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'MPQ - Cusco',
    pos: 'Asistente Informática',
    duration: 'Ene 2024 - Nov 2024',
    title: 'Administración de Sistemas Institucionales (SIGA, SIAF, SIADEG, etc.). Gestión de la red informática, Soporte TI.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 4,
    name: 'MPQ - Cusco',
    pos: 'Asistente Informática',
    duration: 'Oct 2021 - Dic 2022',
    title: 'Administración de Sistemas Institucionales (SIGA, SIAF, SIADEG, etc.). Gestión de la red informática, Soporte TI.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 5,
    name: 'MPQ - Cusco',
    pos: 'Practicante Informática',
    duration: 'May 2021 - Set 2023',
    title: 'Administración de Sistemas Institucionales (SIGA, SIAF, SIADEG, etc.). Gestión de la red informática, Soporte TI.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  }
];
