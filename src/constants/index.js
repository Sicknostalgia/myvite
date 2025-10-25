export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Zisterhof Management Ltd',
    position: 'Upwork Client, Cyprus',
    img: 'assets/upwork.png',
    review:
      'Jetro is new to Minecraft mod development but has quickly learned the necessary skills to start with. He is communicative, responsive, and dedicated to delivering a great product. We highly recommend Jetro for any Minecraft mod development needs.',
  },
  {
    id: 2,
    name: 'Mary Moon',
    position: 'Upwork Client, Australia',
    img: 'assets/upwork.png',
    review:
      'we had a great experience working with Jetro. He was communicative, polite, and always professional throughout the project. He delivered exactly what was needed and met the deadline without any issues. I really appreciated his attention to detail and responsiveness. Would definitely work with him again!',
  },
  {
    id: 3,
    name: 'Johnathan Cabrera',
    position: 'Freelance Client, PH',
    img: 'assets/freelance.svg',
    review:
      'Jetro has arsenal of idea and has a good sense in creative side of game development. Though things need time, but is dedicated to work. Has integrity and take the task seriously.',
  },
  {
    id: 4,
    name: 'Victoria Vargas',
    position: 'Upwork Client, USA',
    img: 'assets/upwork.png',
    review:
      'Jetro take explain what is achievable and what is not. He is very honest and hardworking. I highly recommend him to anyone looking for a reliable developer.',
  },
];

export const myProjects = [
   {
    title: 'Zombievolve Demo Development Live Sessions',
    desc: 'Zombievolve is my top-down game project, and lately, I’ve been working on a training feature a demo prototype that uses a bullseye target instead of a moving enemy. I’m also adding an object pooling system to make the bullseye more efficient. It’s a live look at how I build and test new ideas for the game step by step.',
    subdesc:
      'Built using Unity’s Profiler for performance testing, an object pooling system from GitHub, and Aseprite for the bullseye animation.',
    href: 'https://youtube.com/live/3PtZEBI2C54',
    texture: '/textures/project/zombievolvegame.mov',
    logo: '/assets/mob rolling logo.svg',
    logoStyle: {
      backgroundColor: '#9260f5ff',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/unity.png',
      },
      {
        id: 2,
        name: 'Aseprite',
        path: 'assets/aseprite.png',
      },
      {
        id: 3,
        name: 'Youtube',
        path: '/assets/youtubewhite.svg',
      },
      {
        id: 4,
        name: 'Github',
        path: '/assets/github.svg',
      },
    ],
  },
   {
    title: 'Work Dilemma - Decision-Making Game App',
    desc: 'Work Dilemma is a small game-app I created and published on itch.io. It’s designed to help you decide what to do when you’re feeling indecisive whether to work overtime, take a break, skip work, or even have a quick chitchat. It’s not just a game, but a playful little decision-maker for everyday moments of hesitation.',
    subdesc:
      'Developed with Unity, Work Dilemma uses DoTween for smooth UI game feel, Aseprite for the interface assets, and Cinemachine for dynamic screen shakes and transitions',
    href: 'https://unnu.itch.io/work-dilemma',
    texture: '/textures/project/workdilemma.mov',
    logo: '/assets/workdilemmalogo.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/unity.png',
      },
      {
        id: 2,
        name: 'Aseprite',
        path: 'assets/aseprite.png',
      },
      {
        id: 3,
        name: 'itch.io',
        path: '/assets/itch.png',
      },
      {
        id: 4,
        name: 'Dotween',
        path: '/assets/dotweenlogo.svg',
      },
    ],
  },
  {
    title: 'Shepherd’s Leap Environment Asset Creation Live Sessions',
    desc: 'Shepherd’s Leap is my upcoming 3D adventure puzzle game, and lately, I’ve been creating a low-poly environment asset for it. It’s part of my ongoing journey to shape the game’s world while practicing and refining my creative process a calm, behind-the-scenes look at how Shepherd’s Leap begins to take form.',
    subdesc:
      'Created with Blender and shared through my YouTube and Facebook live sessions, Shepherd’s Leap showcases the process of building a low-poly world one environment asset at a time.',
    href: 'https://youtube.com/live/eaLEbHGn-J8',
    texture: '/textures/project/shepherds.mov',
    logo: '/assets/shepherdsleap.svg',
    logoStyle: {
      backgroundColor: '#d58353db',
      border: '0.2px solid #d58353db',
      //boxShadow: '0px 0px 60px 0px #d58353db',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/unity.png',
      },
      {
        id: 2,
        name: 'Blender',
        path: 'assets/blenderlogo.svg',
      },
      {
        id: 3,
        name: 'Youtube',
        path: '/assets/youtubewhite.svg',
      },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'Zombievolve Menu Background Creation Live Sessions',
    desc: 'Zombievolve is my top-down game project, and lately, I’ve been focusing on crafting its menu background from scratch. In my YouTube live sessions, I walk you through the creative process from sketching ideas and building the scene to adding those small details that set the mood of the game. It’s a chill, behind-the-scenes look at how Zombievolve’s world starts to take shape, one layer at a time.',
    subdesc:
      'Created with Aseprite for the Unity game engine, Zombievolve’s menu background is a hand-drawn pixel art scene that sets the tone for the game’s world',
    href: 'https://youtube.com/live/8ew8ytpgkD8',
    texture: '/textures/project/gamebackground.mov',
    logo: '/assets/logorizal.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/unity.png',
      },
      {
        id: 2,
        name: 'Aseprite',
        path: 'assets/aseprite.png',
      },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/typescript.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'Lab Escape First-Person Puzzle Game',
    desc: 'Lab Escape is a 3D first-person puzzle game where your goal is simple solve puzzles to find your way out. I created this game as an entry for a game jam on itch.io by SasquatchBStudios.',
    subdesc:
      'I built Lab Escape in Unity, using a few premade assets from the Unity Asset Store, DoTween to make the UI feel smooth, and Bro Audio to bring the sound to life. It was a fun, hands-on project where I focused on keeping things simple but engaging.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/labescape.mov',
    logo: '/assets/lablogo.svg',
    logoStyle: {
      backgroundColor: '#0f2e32',
      border: '0.2px solid #0f2e32',
      boxShadow: '0px 0px 60px 0px #0f2e32',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/unity.png',
      },
       {
        id: 2,
        name: 'Itch.io',
        path: '/assets/itch.png',
      },
      {
        id: 3,
        name: 'Bro Audio',
        path: 'assets/broaudiologo.svg',
      },
      {
        id: 4,
        name: 'Dotween',
        path: '/assets/dotweenlogo.svg',
      },
     
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    dicePosition: isSmall ? [-4, -5, 0] : isMobile ? [-5, -5, 0] : isTablet ? [-5, -5, 0] : [-9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Upwork Freelance',
    pos: 'Unity Game Developer, Video Editor',
    duration: '2024 - Present',
    title: "I specialize on game prototype, as well as creating my own assets instead of relying entirely on online resources. I also handle video editing—crafting gameplay montages, ads, promotional videos, and typographical animations based on client needs.",
    icon: '/assets/upwork.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ICARMO Breddas Inc.',
    pos: 'Unity Developer',
    duration: '2022 - 2024',
    title: "I contributed to the development of 3D Slot Machine Games along with cross-regional teams. My responsibilities included implementing features, optimizing code, playtesting, and debugging.",
    icon: '/assets/breddas.svg',
    animation: 'clapping',
  },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  // },
];