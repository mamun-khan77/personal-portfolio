import { CertificationItem } from '../types';

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    credentialId: "COURSERA-GOOGLE-IT-2023",
    verificationUrl: "https://coursera.org/verify/professional-cert/google-it-support",
    image: "/certificates/google-it-support.jpg",
    skills: ["Troubleshooting", "System Administration", "Networking Protocols", "Security Fundamentals", "Linux & CLI"],
  },
  {
    id: "meta-frontend-developer",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    year: "2023",
    credentialId: "COURSERA-META-FE-2023",
    verificationUrl: "https://coursera.org/verify/professional-cert/meta-front-end-developer",
    image: "/certificates/meta-frontend.jpg",
    skills: ["React", "JavaScript (ES6+)", "UI/UX Principles", "Version Control", "Web Accessibility", "Testing"],
  },
  {
    id: "freecodecamp-responsive-web",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    year: "2022",
    credentialId: "FCC-RESPONSIVE-WEB-2022",
    verificationUrl: "https://freecodecamp.org/certification/mamun-khan/responsive-web-design",
    image: "/certificates/responsive-web-design.jpg",
    skills: ["HTML5 Semantic Structure", "CSS3 Flexbox & Grid", "Media Queries", "Visual Design Rules"],
  },
];
