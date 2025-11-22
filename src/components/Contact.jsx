import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  const contactItems = [
    { icon: <FaEnvelope />, label: "Email", value: "shivambyadav99@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=shivambyadav99@gmail.com" },
    { icon: <FaPhoneAlt />, label: "Phone", value: "+91 8605284612", href: "tel:+918605284612" },
    { icon: <FaGithub />, label: "GitHub", value: "shivambyadav99", href: "https://github.com/shivambyadav99" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Shivam Yadav", href: "https://www.linkedin.com/in/shivambyadav99" },
  ];

  return (
    <section id="contact" className="min-h-screen snap-start py-7 px-7 md:px-10 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">Contact Me</h2>

      <div className="max-w-2xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-lg">
        {contactItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <span className="text-blue-500 text-2xl">{item.icon}</span>
            <div>
              <p className="font-semibold text-gray-900">{item.label}</p>
              <p className="text-gray-700">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
