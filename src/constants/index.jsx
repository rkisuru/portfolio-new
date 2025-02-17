import { FaGithub, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa6";

import brc from "../assets/book.jpg";
import tensor from "../assets/tensor.jpg";
import blog from "../assets/blog.jpg";
import beacon from "../assets/beacon.jpg";
import fitness from "../assets/fitness.jpg";
import estate from "../assets/real_estate.jpg";
import news from "../assets/news.jpg";
import ecommerce from "../assets/ecommerce.jpg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ISURU ARAVINDA",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full-stack developer who builds reliable, scalable, and high-performing web applications. I love transforming ideas into engaging digital experiences with a focus on efficiency, usability, and innovation.",
  motto: "🚀 Let’s build something amazing together!",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Book Readers' Community",
    description:
      "A full-stack book management web app built with Spring Boot, Angular, PostgreSQL, and Bootstrap, featuring real-time interactions via WebSocket. 🚀📚",
    image: brc,
    githubLink: "https://github.com/rkisuru/book-readers-community",
  },
  {
    id: 2,
    name: "Tensor AI",
    description:
      "Tensor-AI is a cutting-edge chatbot application built with Spring Boot & React.js, leveraging the power of the Gemini Flash 1.5 API for intelligent, real-time interactions. 🚀🤖",
    image: tensor,
    githubLink: "https://github.com/rkisuru/tensor-ai-fullstack",
  },
  {
    id: 3,
    name: "News Bite",
    description:
      "News Bite is a sleek and modern news aggregator web app built with React.js, Tailwind CSS, powered by the News API. It delivers the latest news from top sources like BBC and CNN, covering categories such as science, sports, business, and more. 📰🚀",
    image: news,
    githubLink: "https://github.com/rkisuru/news-bite",
  },
  {
    id: 4,
    name: "Beacon (Group Project)",
    description:
      "Beacon is a disaster reporting mobile app built with React Native, Tailwind CSS, Firebase, and the Google Maps Platform. It enables users to report emergencies in real-time, providing critical location-based data to ensure swift response and awareness. 🌍🚨",
    image: beacon,
    githubLink: "https://github.com/RadioCat01/Beacon-IS-Community",
  },
  {
    id: 5,
    name: "Postera",
    description:
      "Postera is a powerful blog platform backend built with Spring Boot and PostgreSQL, featuring OAuth2 social login for seamless authentication. It enables users to create, manage, and engage with posts while fostering interactive discussions within the community. 📝🚀",
    image: blog,
    githubLink: "https://github.com/rkisuru/postera",
  },
  {
    id: 6,
    name: "HomeVista",
    description:
      "HomeVista is a modern real estate web app built with React.js, Tailwind CSS, ExpressJs, and MongoDB, offering a seamless user experience for browsing, searching, and filtering property listings. 🏡🚀",
    image: estate,
    githubLink: "https://github.com/rkisuru/real-estate-app",
  },
  {
    id: 7,
    name: "Fitness Hub",
    description:
      "Fitness Hub is a fitness app backend built with Spring Boot and PostgreSQL, designed to empower users to create, manage, and share workouts while engaging with others through likes and comments. Secured with JWT authentication. 💪🔥",
    image: fitness,
    githubLink: "https://github.com/rkisuru/shop-sphere",
  },
  {
    id: 8,
    name: "ShopSphere",
    description:
      "ShopSphere is a full-stack e-commerce web app built with React.js, Tailwind CSS, ExpressJs, and MongoDB, featuring user authentication, product management, cart functionality, and secure payment processing with Paypal. 🛒🚀",
    image: ecommerce,
    githubLink: "https://github.com/rkisuru/shop-sphere",
  },
];

export const BIO = [
  "I'm Isuru Aravinda, an undergraduate pursuing a BSc. Honours Degree in Computing & Information Systems at Sabaragamuwa University of Sri Lanka. I am passionate about programming and enjoy building full-stack web applications that solve real-world problems.",
  "With strong problem-solving and communication skills, I thrive in both individual and collaborative work environments. My expertise includes Java, JavaScript, TypeScript, and HTML/CSS, enabling me to develop scalable and efficient applications across the tech stack.",
  "I am always eager to learn new technologies, refine my skills, and take on exciting challenges in software development. I am currently seeking opportunities to work on innovative projects and contribute to the tech industry.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "",
    company: "",
    duration: "",
    description: "",
  },
];

export const EDUCATION = [
  {
    degree: "BSc. Honours Degree in Computing & Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    duration: "2022 Onwards",
    description:
      "Currently pursuing a BSc. Honours Degree in Computing & Information Systems at Sabaragamuwa University of Sri Lanka. Focused on software development, data structures, and algorithms. I'm a Member of IEEE Student Branch of SUSL & Volunteer of Society of Computer Sciences (SUSL)",
  },
  {
    degree: "Secondary Education",
    institution: "Bandaranayake Central College Veyangoda",
    duration: "2011 - 2020",
    description:
      "Passed GCE O/L in English medium with 9A s and GCE A/L with 3B s.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Career Essentials in GitHub Professional Certificate",
    link: "https://www.linkedin.com/learning/certificates/759ad2de89bb64eaa8cb804694b0dae836b79575987618537c4cbf11d7185a42?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4uy1DD0OS4OP5zB9ogZ5xQ%3D%3D",
  },
  {
    title: "Docker Foundations Professional Certificate",
    link: "https://www.linkedin.com/learning/certificates/010db1b496b91bc36a975652434a165c66c3df679ae87980e479804000605b8c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BHX2q8zL4RE6hGoeOn2aDCg%3D%3D",
  },
  {
    title: "JavaScript Foundations Professional Certificate by Mozilla",
    link: "https://www.linkedin.com/learning/certificates/fba99257afbd0acac1be89e1a5051dcbe95f3c647dc26c7d5f1dc26ed9f3cae9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDXGci9GJSmSv%2FOjzpFmElg%3D%3D",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/rkisuru",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/isuru-aravinda-ba69772b3/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.facebook.com/share/15EdppKDH3/?mibextid=qi2Omg",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discordapp.com/users/isuru24",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
];
