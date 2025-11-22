import { FaCertificate } from "react-icons/fa";
import certificationsData from "../data/certifications.json";

export default function Certifications() {
  const { certifications } = certificationsData;

  return (
    <section id="certifications" className="min-h-screen snap-start py-7 px-7 md:px-10 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-blue-500">My Certifications</h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <div 
            key={idx} 
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 flex items-center gap-4"
          >
            <FaCertificate className="text-blue-500 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-900">{cert.name}</p>
              <p className="text-gray-600">{cert.issuer} | {cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
