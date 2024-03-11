import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  contact,
  css,
  express,
  github,
  html,
  javascript,
  linkedin,
  motion,
  mui,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  tripblitz,
  blueWaveCrypto,
  youtobe,
  windows,
  cloud,
  spotify,
  sql,
  docker,
  jb,
  geekbrains
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerization platform",
  },
];

export const experiences = [
  {
    title: "Software Development",
    company_name: "GeekBrains",
    icon: geekbrains,
    iconBg: "#ccc",
    date: "October 2021 - July 2022",
    points: [
      "Comprehensive Programming Fundamentals: Acquired foundational knowledge in programming through hands-on learning in Python, C#, and JavaScript.",
      "Focused Logic and Problem-Solving Training: Engaged in a structured learning environment aimed at enhancing logical thinking and problem-solving abilities crucial for software development.",
    ],
  },
  {
    title: "Full-Stack Development",
    company_name: "John Bryce",
    icon: jb,
    iconBg: "#ff948c",
    date: "February 2023 - February 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participated in all phases of software development lifecycle, from initial concept to deployment and maintenance.",
      "Utilized TypeScript, Node.js, Express, MUI, Docker, Vite + React, Digitalocean and Mysql to build responsive and scalable web applications.",
      "Independently conceived, developed, and deployed 6 dynamic self-projects, demonstrating a proactive approach to learning and applying full-stack development skills.",
    ],
  }
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/DanilVo",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/danil-volobuyev/",
  },
];

export const projects = [
  {
    iconUrl: tripblitz,
    theme: "btn-back-blue",
    name: "Full Stack Vacation Booking",
    description:
      "Created a user-friendly vacation booking platform that simplifies the process of booking trips, with a wide range of destinations. Users can easily browse, compare prices, and book their vacations.",
    link: "http://159.89.186.34:5173/",
  },
  {
    iconUrl: blueWaveCrypto,
    theme: "btn-back-pink",
    name: "Crypto Currency Tracker",
    description:
      "Built an easy-to-use app for tracking cryptocurrency prices and market trends, helping users make smart investment choices and manage their digital assets with ease.",
    link: "https://danilvo.github.io/JB-Front-End-Web-Developer-Project/",
  },
  {
    iconUrl: youtobe,
    theme: "btn-back-red",
    name: "YouTube Clone",
    description:
      "Developed a user-friendly YouTube-like app where users watch videos seamlessly, fostering a vibrant community of content creators and viewers.",
    link: "https://danilvo.github.io/You-Tube-Clone/",
  },
  {
    iconUrl: windows,
    theme: "btn-back-blue",
    name: "Task Board App",
    description:
      "Designed a task board app with a unique interface, allowing users to organize, and track their tasks effortlessly.",
    link: "https://danilvo.github.io/Jhon-Bryce-Project-1/",
  },
  {
    iconUrl: cloud,
    theme: "btn-back-black",
    name: "Basic Weather App",
    description:
      "Crafted a sleek weather app for easy access to accurate forecasts, keeping users prepared for any conditions.",
    link: "https://danilvo.github.io/WeatherApp/",
  },
  {
    iconUrl: spotify,
    theme: "btn-back-green",
    name: "Spotify Clone",
    description:
      "My journey into the world of development commenced with this initial project, a basic front-end clone created solely with HTML and CSS.",
    link: "https://danilvo.github.io/Spotify-Clone/",
  },
];
