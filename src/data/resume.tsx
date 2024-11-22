import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hamdi Kamel",
  initials: "HK",
  url: "https://personal-website-psi-two-59.vercel.app/",
  location: "Tunisia, North Africa",
  description:
    "A frontend engineer that values continuous learning and impactful contributions to meaningful projects.",
  summary:
    "Since November 2020, I've worked with React.js and many other technologies where I developed software solutions that included a filtering functionality for e-commerce platform. I thrive on open communication and value constructive feedback which helps me deliver a memorable experience for my clients and people I work with.",
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
        url: "mailto:hamdiakippuden@gmail.com",
        icon: Icons.email,

        navbar: true,
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
        "A fully interactive comment section that you could integrate into your existing website. I incorporated feedback from actual users that helped me improve the User Experience.",
      technologies: [
        "React.js",
        "TypeScript",
        "JSON",
        "User Experience"
      ],
      links: [
        {
          type: "Website",
          href: "https://hamdi4-beep.github.io/interactive-comments-section-main/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hamdi4-beep/interactive-comments-section-main",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/interactive-comments-section.PNG",
      video: ""
    },
    {
      title: "Expenses Chart",
      href: "https://hamdi4-beep.github.io/expenses-chart-component-main/",
      dates: "March 2024",
      active: true,
      description:
        "An expenses chart that reflects mockup data based on the current day of the week.",
      technologies: [
        "React.js",
        "TypeScript",
        "JSON",
        "User Experience"
      ],
      links: [
        {
          type: "Website",
          href: "https://hamdi4-beep.github.io/expenses-chart-component-main/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hamdi4-beep/expenses-chart-component-main",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/expenses-chart.PNG",
      video: ""
    },
    {
      title: "Time Board Dashboard",
      href: "https://hamdi4-beep.github.io/time-tracking-dashboard/",
      dates: "Sept 2024",
      active: true,
      description:
        "A time dashboard with mockup data that displays the amount of time spent per activity.",
      technologies: [
        "React.js",
        "TypeScript",
        "JSON",
        "User Experience"
      ],
      links: [
        {
          type: "Website",
          href: "https://hamdi4-beep.github.io/time-tracking-dashboard/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hamdi4-beep/time-tracking-dashboard",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/time-tracking-dashboard.PNG",
      video: ""
    },
    {
      title: "Notifications Page",
      href: "https://hamdi4-beep.github.io/notification-page-main/",
      dates: "Aug 2024",
      active: true,
      description:
        "A notifications system that notifies users of any subscription on a website.",
      technologies: [
        "React.js",
        "TypeScript",
        "JSON",
        "User Experience"
      ],
      links: [
        {
          type: "Website",
          href: "https://hamdi4-beep.github.io/notification-page-main/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hamdi4-beep/notification-page-main",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/notifications-page.PNG",
      video: ""
    }
  ]
} as const;
