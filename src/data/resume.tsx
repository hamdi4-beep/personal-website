import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hamdi Kamel",
  initials: "DV",
  url: "https://dillion.io",
  location: "Tunisia, North Africa",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A software engineer with expertise in developing digital solutions that resonate with your user base.",
  summary:
    "Since January 2024, I decided to venture into SaaS businesses and explore how my expertise can bring more value to the industry which is why I dedicated my time to expanding my skillset and connecting with other like-minded creators on Social Media.",
  avatarUrl: "/me.jpg",
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
    "Java"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      email: {
        name: "Send Email",
        url: "mailto:hamdiakippuden@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "Comments Section",
      href: "https://hamdi4-beep.github.io/interactive-comments-section-main/",
      dates: "Sept 2024",
      active: true,
      description:
        "A fully functional comments section that you could integrate into any existing website so that your users can share their perspectives. It was built and designed in a way that encourages engagement.",
      technologies: [
        "React.js",
        "TypeScript",
        "JSON"
      ],
      links: [
        {
          type: "Website",
          href: "https://hamdi4-beep.github.io/interactive-comments-section-main/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/interactive-comments-section.png",
      video: ""
    }
  ]
} as const;
