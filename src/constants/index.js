import {
  mobile,
  backend,
  creator,
  web,
  hardhat,
  solidity,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bank,
  ecommerce,
  gym,
  tcs,
  xverse,
  python,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Smart Contract Developer",
    company_name: "Dextr Labs",
    icon: creator,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Designing and testing smart contracts",
      "Conducting comprehensive security audits of smart contracts to identify and fix vulnerabilities.",
      "Working on integrating smart contracts with other blockchain technologies and external services",
      "Collaborating with developers, designers, and project managers for seamless project integration.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Freelance",
    icon: creator,
    iconBg: "#383E56",
    date: "September 2023 - December 2023",
    points: [
      "SEO Master Team - Developing and maintaining web applications. Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed a NFT creator’s portal using Solidity, Next.js, tailwind CSS, IPFS, pinata and third-party app integrations for analytics.",
      "Smart Contracts for Play-to-earn NFT Game.",
    ],
  },
  {
    title: "System Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "May 2021 - Oct 2022",
    points: [
      "Developed frontend of a regression testing tool using ReactJs.",
      "Developed app integration with REST APIs for Tableau, Qlik and Power BI with the help of Selenium.",
      "Built extensive test coverage for all new features, which resulted in a 27 percent reduction in customer complaints. Writing automated unit tests for python and react.",
      "Developed and maintained automated CI/CD pipelines for code deployment using Jenkins.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Quest Global Technologies LTD",
    icon: creator,
    iconBg: "#383E56",
    date: "Feb 2021 - May 2021",
    points: [
      "Responsible for design, development, optimization and testing of the company software used internally.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Machine Learning Developer",
    company_name: "Technocolabs",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2020 - Sep 2020",
    points: [
      "Improved total response time of multiple deep learning models by introducing threading.",
      "Implemented features like fall detection, intruder detection, fire detection, and alert.",
      "Trained and tested different deep learning models.",
      "Technologies: Python, Django, Ajax, Docker, Keras, and OpenCV.",
    ],
  },
];

const projects = [
  {
    name: "EvoGym",
    description:
      "Web-based platform that allows users to explore the amenities of the gym, connect and send enquiry email.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/aapsi/Fitness-website",
    website_link: "https://0d9cd9d1.fitness-website-93g.pages.dev/",
  },
  {
    name: "Ecommerce app",
    description:
      "An ecommerce site that sells headphones. The ecommerce functionalities are implemented with Sanity.io, with payments supported by Stripe. TailwindCss has been used to theme the web app.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "sanity(CMS)",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/aapsi/E-commerce-store",
    website_link: "https://e-commerce-store-weld.vercel.app/",
  },
  {
    name: "Business Landing Page ",
    description:
      "A business Landing page made using next.js and styled using tailwind css. This site has styles which include gradients.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/aapsi/Bank-Business-Landing-Page",
    website_link: "https://bank-business-landing-page.vercel.app/",
  },
  {
    name: "Xverse",
    description:
      "A Landing page for Xverse Metaverse. It is built using next.js and styled using Tailwind css and animations are done using framer motion.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: xverse,
    source_code_link: "https://github.com/aapsi/project_metaverse-main",
    website_link: "https://project-metaverse-main-ruddy.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
