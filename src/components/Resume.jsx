import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import resumeData from "../data/resume.json"; // import JSON

export default function Resume() {
  const { education, experience } = resumeData;

  return (
    <section id="resume" className="min-h-screen snap-start py-7 px-7 md:px-10 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-blue-500">My Resume</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
            <FaGraduationCap className="text-blue-500" /> Education
          </h3>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-6">
              <p className="font-semibold text-gray-900">{edu.degree}</p>
              <p className="text-gray-600">{edu.institution} | {edu.year}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
            <FaBriefcase className="text-blue-500" /> Experience
          </h3>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-6">
              <p className="font-semibold text-gray-900">{exp.role}</p>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p>
              <p className="text-gray-700 mt-1">{exp.details}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
