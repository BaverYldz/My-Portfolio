const navLinks = [
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Resume",
        link: "#resume",
    },
];

const rotatingTextWords = [
    { text: 'Fast', icon: 'https://cdn.simpleicons.org/vite/ffffff' },
    { text: 'Secure', icon: 'https://cdn.simpleicons.org/auth0/ffffff' },
    { text: 'Dynamic', icon: 'https://cdn.simpleicons.org/react/ffffff' },
    { text: 'Robust', icon: 'https://cdn.simpleicons.org/typescript/ffffff' },
    { text: 'Scalable', icon: 'https://cdn.simpleicons.org/docker/ffffff' },
    { text: 'Elegant', icon: 'https://cdn.simpleicons.org/figma/ffffff' }
];

const words = [


    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Years in Tech Industry" },
    { value: 12, suffix: "+", label: "Projects Delivered" },
    { value: 10, suffix: "+", label: "Happy Clients & Teams" },
    { value: 100, suffix: "%", label: "Commitment to Growth" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    { name: "React", imgPath: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", imgPath: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Vite", imgPath: "https://cdn.simpleicons.org/vite" },
    { name: "Tailwind CSS", imgPath: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Angular", imgPath: "https://cdn.simpleicons.org/angular" },
    { name: "Redux", imgPath: "https://cdn.simpleicons.org/redux" },
    { name: "SWR", imgPath: "https://cdn.simpleicons.org/swr" },
    { name: "Three.js", imgPath: "https://cdn.simpleicons.org/threedotjs" },
    { name: "GSAP", imgPath: "https://cdn.simpleicons.org/greensock" },
    { name: "Node.js", imgPath: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express", imgPath: "https://cdn.simpleicons.org/express" },
    { name: ".NET", imgPath: "https://cdn.simpleicons.org/dotnet" },
    { name: "TypeScript", imgPath: "https://cdn.simpleicons.org/typescript" },

    { name: "MongoDB", imgPath: "https://cdn.simpleicons.org/mongodb" },
    { name: "PostgreSQL", imgPath: "https://cdn.simpleicons.org/postgresql" },
    { name: "Git", imgPath: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", imgPath: "https://cdn.simpleicons.org/github" },
    { name: "Docker", imgPath: "https://cdn.simpleicons.org/docker" },

    { name: "Linux", imgPath: "https://cdn.simpleicons.org/linux" },

    { name: "Postman", imgPath: "https://cdn.simpleicons.org/postman" },
    { name: "Jira", imgPath: "https://cdn.simpleicons.org/jira" },
    { name: "Supabase", imgPath: "https://cdn.simpleicons.org/supabase" },
    { name: "shadcn/ui", imgPath: "https://cdn.simpleicons.org/shadcnui" },
];



const expCards = [
    {
        logoPath: "/images/bimser-circle-2.png",
        title: "Backend Developer - Bimser Cozum",
        date: "February 2025 - June 2025",
        location: "Kocaeli, Turkey",
        responsibilities: [
            "Implemented backend services using ASP.NET Core 9.0, EF Core, and DDD, reducing schema change overhead.",
            "Developed an extensible EAV-based data model enabling dynamic employee attributes.",
            "Built reusable validation and transformation pipelines adopted internally.",
        ],
    },
    {
        logoPath: "/images/td-circle-2.png",
        title: "Fullstack Developer - TrinityDEV",
        date: "November 2024 - February 2025",
        location: "Liepaja, Latvia",
        responsibilities: [
            "Developed a ticket-based collaboration platform using AngularJS and Node.js (Express).",
            "Enhanced workflow responsiveness, reducing resolution delays by 30%.",
            "Implemented secure REST endpoints and role-based permission logic.",
        ],
    },
    {
        logoPath: "/images/owl-circle.png",
        title: "Frontend Developer - SGK Danismanlik",
        date: "July 2023 - May 2024",
        location: "Istanbul, Turkey",
        responsibilities: [
            "Built dashboard interfaces and automation tools using React (Vite).",
            "Improved operational visibility across multi-branch structures.",
            "Developed a reusable UI component system.",
        ],
    },
    {
        logoPath: "/images/code.svg", // Generic icon or similar
        title: "Freelance Web Developer",
        date: "November 2022 - January 2023",
        location: "Remote",
        responsibilities: [
            "Delivered major feature updates for an e-commerce platform.",
            "Reduced product page load times by 30%.",
            "Enhanced checkout UX and integrated new API modules.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
]


const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        url: "https://www.instagram.com/baveryldz21/",
    },
    {
        name: "github",
        imgPath: "/images/white-git.png",
        url: "https://github.com/BaverYldz",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "https://www.linkedin.com/in/omerbaveryildiz222/",
    },
    {
        name: "subguard",
        imgPath: "/images/white-icon.svg",
        url: "https://www.subguardapp.com",
    },
];

const myProjects = [
    {
        title: 'Subguard',
        desc: 'SubGuard is my SaaS application that that helps you track all your subscriptions in one place. It send you reminders before renewals so you never get charged for services you forgot about.',
        subdesc:
            'With beautiful analytics and renewal alerts, SubGuard transforms financial chaos into clarity. Built with Next.js and Shadcn UI for a premium user experience.',
        href: 'https://www.subguardapp.com',
        img: '/images/project_5.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
            },
            {
                id: 2,
                name: 'React Bits',
                path: 'https://cdn.simpleicons.org/react/ffffff',
            },
            {
                id: 3,
                name: 'Shadcn UI',
                path: 'https://cdn.simpleicons.org/shadcnui/ffffff',
            },
            {
                id: 4,
                name: 'Radix UI',
                path: 'https://cdn.simpleicons.org/radixui/ffffff',
            },
            {
                id: 5,
                name: 'GSAP',
                path: 'https://cdn.simpleicons.org/greensock/ffffff',
            },
            {
                id: 6,
                name: 'PostHog',
                path: 'https://cdn.simpleicons.org/posthog/ffffff',
            },
            {
                id: 7,
                name: 'Google Analytics',
                path: 'https://cdn.simpleicons.org/googleanalytics/ffffff',
            },
            {
                id: 8,
                name: 'Lemon Squeezy',
                path: 'https://cdn.simpleicons.org/lemonsqueezy/ffffff',
            },
        ],
    },
    {
        title: 'SGK Kasif',
        desc: 'An all-in-one digital workforce partner that simplifies complex payroll and social security operations. From calculating incentives to tracking work accidents and rest reports, SGK Kasif automates critical HR processes.',
        subdesc:
            'Keeps employers informed via instant SMS and email notifications, putting total control just a click away using React and .NET.',
        href: 'https://v2.sgkkasif.com/',
        img: '/images/project_1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'https://cdn.simpleicons.org/react/ffffff',
            },
            {
                id: 2,
                name: 'Bootstrap',
                path: 'https://cdn.simpleicons.org/bootstrap/ffffff',
            },
            {
                id: 3,
                name: '.NET',
                path: 'https://cdn.simpleicons.org/dotnet/ffffff',
            },
            {
                id: 4,
                name: 'SWR',
                path: 'https://cdn.simpleicons.org/swr/ffffff',
            },
        ],
    },
    {
        title: 'DevEvent',
        desc: 'The ultimate hub for the developer community, DevEvent streamlines the discovery of conferences, meetups, and hackathons. Leveraging the latest web technologies for high performance.',
        subdesc:
            'A modern platform where developers can find their next growth opportunity and connect with peers in a dynamic ecosystem.',
        href: 'https://dev-events-app-nextjs16.vercel.app',
        img: '/images/project_4.png',
        tags: [
            {
                id: 1,
                name: 'Next.js 16',
                path: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
            },
            {
                id: 2,
                name: 'React 19',
                path: 'https://cdn.simpleicons.org/react/ffffff',
            },
            {
                id: 3,
                name: 'Tailwind CSS v4',
                path: 'https://cdn.simpleicons.org/tailwindcss/ffffff',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: 'https://cdn.simpleicons.org/mongodb/ffffff',
            },
        ],
    },
    {
        title: 'Pinnote',
        desc: 'A secure, full-stack note-taking application that prioritizes privacy and usability. Combining a robust Node.js backend with a sleek Next.js frontend.',
        subdesc:
            'Delivers a distraction-free environment for capturing ideas, protected by advanced authentication and real-time security features.',
        href: '#',
        img: '/images/project_pinnote.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
            },
            {
                id: 2,
                name: 'Tailwind CSS',
                path: 'https://cdn.simpleicons.org/tailwindcss/ffffff',
            },
            {
                id: 3,
                name: 'Node.js',
                path: 'https://cdn.simpleicons.org/nodedotjs/ffffff',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: 'https://cdn.simpleicons.org/mongodb/ffffff',
            },
        ],
    },
    {
        title: 'Fake Message Detection',
        desc: 'A cutting-edge machine learning solution tackling social media misinformation. This application analyzes text patterns to detect spam and fake messages with high accuracy.',
        subdesc:
            'Utilizes LSTM neural networks and TF-IDF models to provide a powerful shield against digital deception through a user-friendly interface.',
        href: 'https://github.com/BaverYldz/SpamHandler-DL',
        img: '/images/project_fakemsg.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'https://cdn.simpleicons.org/python/ffffff',
            },
            {
                id: 2,
                name: 'TensorFlow',
                path: 'https://cdn.simpleicons.org/tensorflow/ffffff',
            },
            {
                id: 3,
                name: 'Flask',
                path: 'https://cdn.simpleicons.org/flask/ffffff',
            },
        ],
    },
    {
        title: 'YC Directory',
        desc: 'A specialized issue-reporting platform tailored for the WordPress community. Simplifies the process of tracking and resolving website tickets.',
        subdesc:
            'Fosters better maintenance workflows and connects developers with critical issues in a structured, efficient environment.',
        href: 'https://github.com/BaverYldz',
        img: '/images/project_3.png',
        tags: [
            {
                id: 1,
                name: 'Angular',
                path: 'https://cdn.simpleicons.org/angular/ffffff',
            },
            {
                id: 2,
                name: 'Node.js',
                path: 'https://cdn.simpleicons.org/nodedotjs/ffffff',
            },
            {
                id: 3,
                name: 'Bootstrap',
                path: 'https://cdn.simpleicons.org/bootstrap/ffffff',
            },
        ],
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackImgs,
    navLinks,
    myProjects,
    rotatingTextWords,
};
