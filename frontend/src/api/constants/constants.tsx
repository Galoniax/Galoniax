import { Home, Project } from "../../pages";

export const ROUTES = {
  INDEX: "/",
  PROJECT: "/projects",
};

export const APP_ROUTES = [
  {
    path: ROUTES.INDEX,
    element: <Home />,
  },
  {
    path: ROUTES.PROJECT + "/:project_slug?",
    element: <Project />,
  },
];

// ===============================================================
interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface StackCategory {
  title: string;
  items: TechItem[];
}

export const categories = (size: number): StackCategory[] => {
  return [
    {
      title: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
          ),
        },
        {
          name: "CSS3",
          icon: (
            <img
              width={size}
              height={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
          ),
        },
        {
          name: "Tailwind CSS",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
          ),
        },
        {
          name: "Bootstrap",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
          ),
        },
        {
          name: "React",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
          ),
        },
        {
          name: "Zustand",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg"
            />
          ),
        },
        {
          name: "React Native",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg"
            />
          ),
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Express.js",
          icon: (
            <img
              width={size}
              height={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            />
          ),
        },
        {
          name: "Laravel",
          icon: (
            <img
              width={size}
              height={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            />
          ),
        },
        {
          name: "Java",
          icon: (
            <img
              width={size}
              height={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            />
          ),
        },

        {
          name: "PHP",
          icon: (
            <img
              width={size}
              height={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
            />
          ),
        },
        {
          name: "Python",
          icon: (
            <img
              width={size}
              height={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />
          ),
        },
        {
          name: "Flask",
          icon: (
            <img
              width={size}
              height={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
            />
          ),
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "MySQL",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            />
          ),
        },
        {
          name: "PostgreSQL",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            />
          ),
        },
        {
          name: "Redis",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
            />
          ),
        },
        {
          name: "Railway",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg"
            />
          ),
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          name: "Git",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />
          ),
        },
        {
          name: "GitHub",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            />
          ),
        },
        {
          name: "Postman",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            />
          ),
        },

        {
          name: "Docker",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            />
          ),
        },
        {
          name: "Android Studio",
          icon: (
            <img
              height={size}
              width={size}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
            />
          ),
        },
      ],
    },
  ];
};
