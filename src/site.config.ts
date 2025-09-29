import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://taufiqtab.github.io',
    title: 'Opik',
    description: 'Opik - Your Swiss Knife for IT Solutions',
    image: {
        src: '/space-ahead-preview.jpeg',
        alt: 'Opik.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: "/"
        },
        {
            text: 'Projects',
            href: "/project"
        },
        {
            text: 'Skills',
            href: "/skill"
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
        // {
        //     text: 'RSS Feed',
        //     href: withBase('/rss.xml')
        // },
        //         {
        //     text: 'Sitemap',
        //     href: withBase('/sitemap-index.xml')
        // }
    ],
    socialLinks: [
        // {
        //     text: 'Dribbble',
        //     href: 'https://dribbble.com/'
        // },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        eyebrowText: 'Your Swiss Knife for IT Solutions',
        title: 'Opik  🚀',
        text: "Passionate in Programming, Game Development, AR, VR , Design Graphic, Video Editing, 3D Modeling, Animation, IoT",
        image: {
            src: '/assets/images/opik-fly-illustration.png',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Contact',
                href: '/contact'
            }
        ]
    },
    about: {
        title: 'About',
        text: 'Saya adalah Software Engineer yang memiliki pengalaman dalam aplikasi web full-stack PHP, Laravel, CodeIgniter, Node.js, Golang, Rust, JavaScript, React.js, Vue.js, dan pengembangan mobile (Flutter). ikut serta dalam proyek ERP, IoT berbasis MQTT, Augmented Reality dan Game Development dengan Unity3D. Fokus saya adalah solusi berkualitas, efisien, dan berdampak. 🚀',
    },
    contactInfo: {
        title: 'Mari Berdiskusi',
        text: "Apakah Anda memiliki ide proyek yang ingin direalisasikan atau membutuhkan solusi IT profesional? \nSaya siap membantu Anda mewujudkan proyek impian Anda. Dengan pengalaman di berbagai bidang IT, saya dapat menyediakan solusi yang inovatif dan sesuai kebutuhan, mulai dari pengembangan aplikasi hingga konsultasi arsitektur sistem.",
        email: {
            text: "Hubungi saya untuk mendiskusikan bagaimana kita bisa berkolaborasi.",
            href: "mailto:taufiqtab77@gmail.com",
            email: "taufiqtab77@gmail.com"
        },
        socialProfiles: [
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/taufiq-abdullah"
            },
            {
                text: "GitHub",
                href: "https://github.com/taufiqtab"
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Space Ahead',
    //     text: 'One update per week. All the latest stories in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 5,
    recentPostLimit: 3
};

export default siteConfig;
