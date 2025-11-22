import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hamdi Kamel",
  initials: "HK",
  url: "https://personal-website-psi-two-59.vercel.app/",
  location: "Tunisia, North Africa",
  description:
    "A software developer with user-centric mindset that values impactful contributions.",
  summary:
    "A mid-level software developer with professional experience in React, NodeJS and TypeScript. I've worked on product-driven projects such as e-commerce, and a chemical engineering catalog. I'm currently available for work.",
  avatarUrl: "/me.png",
  skills: [
    "User Interface",
    "User Experience",
    "Frontend",
    "Backend",
    "React.js",
    "Angular.js",
    "Next.js",
    "Node.js",
    "Typescript",
    "Java",
    "PHP",
    "Laravel"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "hamdiakippuden@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hamdi4-beep",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hamdi-kamel-bab017b8/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hamdi_beep4",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Mail",
        url: "mailto:hamdi.devhubs@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  projects: [
    {
      title: "Comment Section",
      href: "https://hamdi4-beep.github.io/interactive-comment-section/",
      active: true,
      description:
        "A fully-featured comment section with reply support and voting system built in React.js.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "JSON",
        "User Experience"
      ],
      links: [
        {
          type: "Website",
          href: "https://hamdi4-beep.github.io/interactive-comment-section/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hamdi4-beep/interactive-comment-section/",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/interactive-comments-section.PNG",
      video: ""
    }
  ]
} as const;
