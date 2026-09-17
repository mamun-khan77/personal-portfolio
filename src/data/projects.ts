import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: "portfolio-website",
    number: "01",
    title: "Personal Portfolio Website",
    subtitle: "Interactive Engineering Showcase & Digital Identity",
    description:
      "My personal space on the internet to showcase my technical skills, engineering projects, and journey as a developer. Built with clean modular architecture, rich micro-interactions, and accessible responsive performance.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Three.js", "Genkit", "TypeScript"],
    features: [
      "Interactive 3D Hero & Visual Physics",
      "AI Chatbot Integration with Genkit",
      "High-Contrast Minimal Dark Mode",
      "Fully Accessible & Ultra Responsive",
    ],
    image: "/projects/portfolio.jpg",
    githubUrl: "https://github.com/mamun-khan77/portfolio",
    liveUrl: "https://khanmamun.dev",
    featured: true,
  },
  {
    id: "typing-speed-test",
    number: "02",
    title: "Typing Speed Test",
    subtitle: "Real-time Metrics & Keystroke Telemetry",
    description:
      "A fast, distraction-free web application for measuring and benchmarking typing speed, accuracy, and keystroke rhythm in real time.",
    technologies: ["React", "JavaScript", "CSS3", "Web Storage API"],
    features: [
      "Real-time WPM calculation",
      "Accurate error rate & accuracy tracking",
      "Dynamic random text generation",
      "Local session results history",
    ],
    image: "/projects/typing-test.jpg",
    githubUrl: "https://github.com/mamun-khan77/typing-speed-test",
    liveUrl: "https://typing-test.khanmamun.dev",
    featured: false,
  },
  {
    id: "age-calculator",
    number: "03",
    title: "Age Calculator",
    subtitle: "Precision Date Math & Validation Engine",
    description:
      "A clean, lightweight web utility for calculating exact chronological age down to years, months, and days with comprehensive leap year and calendar edge-case handling.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    features: [
      "Precise years, months, and days calculation",
      "Strict future date and leap-day validation",
      "Zero-latency reactive input calculation",
      "Clean, tactile user interface",
    ],
    image: "/projects/age-calculator.jpg",
    githubUrl: "https://github.com/mamun-khan77/age-calculator",
    liveUrl: "https://age-calc.khanmamun.dev",
    featured: false,
  },
  {
    id: "travel-app-ui",
    number: "04",
    title: "Travel App UI Concept",
    subtitle: "Mobile Experience Design & Interactive Prototype",
    description:
      "A human-centered mobile travel booking application UI/UX concept designed in Figma, focusing on intuitive flight/hotel discovery, visual hierarchy, and frictionless checkout flows.",
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Design System"],
    features: [
      "User-centered design architecture",
      "Interactive high-fidelity prototype",
      "Modern mobile navigation patterns",
      "Consistent 8pt grid token system",
    ],
    image: "/projects/travel-app.jpg",
    githubUrl: "https://github.com/mamun-khan77",
    liveUrl: "https://www.figma.com/@mamun-khan",
    featured: false,
  },
];
