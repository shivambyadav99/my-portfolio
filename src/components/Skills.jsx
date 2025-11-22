import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiVite, SiAxios } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend Skills",
      items: [
        { name: "HTML5 – Semantic HTML, forms, accessibility, SEO basics", icon: <FaHtml5 className="text-orange-500 w-5 h-5 flex-shrink-0" /> },
        { name: "CSS3 – Flexbox, Grid, animations, transitions, responsive design, media queries", icon: <FaCss3Alt className="text-blue-500 w-5 h-5 flex-shrink-0" /> },
        { name: "JavaScript (ES6+) – Variables, functions, DOM manipulation, events, fetch API, promises, async/await", icon: <FaJs className="text-yellow-500 w-5 h-5 flex-shrink-0" /> },
        { name: "TypeScript – Type safety and maintainable code", icon: <SiTypescript className="text-blue-600 w-5 h-5 flex-shrink-0" /> },
        { name: "Version Control – Git & GitHub (branching, pull requests, merging)", icon: <FaGitAlt className="text-orange-600 w-5 h-5 flex-shrink-0" /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React.js – Components, hooks, state management, Context API", icon: <FaReact className="text-blue-500 w-5 h-5 flex-shrink-0" /> },
        { name: "Redux – State management libraries", icon: <SiRedux className="text-purple-600 w-5 h-5 flex-shrink-0" /> },
        { name: "Tailwind CSS / Bootstrap – UI frameworks & component libraries", icon: <SiTailwindcss className="text-blue-400 w-5 h-5 flex-shrink-0" /> },
        { name: "React Router – Routing and API handling", icon: <FaReact className="text-blue-500 w-5 h-5 flex-shrink-0" /> }
      ]
    },
    {
      title: "Tools & Workflow",
      items: [
        { name: "Package Managers – npm, yarn", icon: <SiVite className="text-purple-500 w-5 h-5 flex-shrink-0" /> },
        { name: "Build Tools – Vite", icon: <SiVite className="text-purple-500 w-5 h-5 flex-shrink-0" /> },
        { name: "Code Quality – ESLint, Prettier", icon: <FaJs className="text-yellow-500 w-5 h-5 flex-shrink-0" /> },
        { name: "Browser Dev Tools – Chrome DevTools for debugging and profiling", icon: <FaJs className="text-yellow-500 w-5 h-5 flex-shrink-0" /> }
      ]
    },
    {
      title: "Advanced Skills",
      items: [
        { name: "Responsive & Mobile-First Design – Media queries, flexible layouts, mobile-first approach", icon: <FaCss3Alt className="text-blue-500 w-5 h-5 flex-shrink-0" /> },
        { name: "Performance Optimization – Lazy loading, code splitting, memoization", icon: <FaReact className="text-blue-500 w-5 h-5 flex-shrink-0" /> },
        { name: "Accessibility (a11y) – ARIA roles, keyboard navigation, color contrast compliance", icon: <FaHtml5 className="text-orange-500 w-5 h-5 flex-shrink-0" /> },
        { name: "Progressive Web Apps (PWA) – Service workers, offline support", icon: <FaJs className="text-yellow-500 w-5 h-5 flex-shrink-0" /> },
        { name: "API Integration – Axios, fetch", icon: <SiAxios className="text-blue-600 w-5 h-5 flex-shrink-0" /> }
      ]
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Problem-Solving – Analytical thinking to debug and optimize solutions" },
        { name: "Communication – Clear articulation of ideas and technical concepts" },
        { name: "Teamwork – Collaborating effectively in cross-functional teams" },
        { name: "Time Management – Prioritizing tasks and meeting project deadlines" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen snap-start py-7 px-7 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-500 text-center">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col">
              <h3 className="font-semibold text-xl text-blue-500 mb-4">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {item.icon && item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
