import aboutData from "../data/about.json";
import ShivamYadav_Resume from "../assets/ShivamYadav_Resume.pdf";
import profile from "../assets/profile.png";
export default function About() {
  const { title, intro, careerHighlights, skills } = aboutData.about;

  return (
    <section id="about" className="min-h-screen snap-start py-7 px-7 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={profile} alt="Shivam Yadav" className="rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-500"/>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 text-blue-500">{title}</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{intro}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {careerHighlights.map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition duration-300">
                <h3 className="font-semibold text-blue-500 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm hover:bg-blue-200 transition">{skill}</span>
            ))}
          </div>

          <div>
            <a href={ShivamYadav_Resume} download className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
