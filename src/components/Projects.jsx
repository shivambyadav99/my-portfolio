import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import projectsData from "../data/projects.json"; // import JSON

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen snap-start py-7 px-7 md:px-10 bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-blue-500">My Projects</h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(proj)}
            className="p-6 bg-white rounded-xl shadow cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{proj.name}</h3>
            <p className="text-gray-700">{proj.description}</p>
            <div className="flex gap-4 mt-4 text-xl">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-blue-500 hover:text-blue-600 transition transform hover:scale-110"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-700 hover:text-gray-900 transition transform hover:scale-110"
                title="GitHub Code"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-xl w-full relative animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold mb-4 text-gray-900">{selectedProject.name}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.details}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium transition transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
