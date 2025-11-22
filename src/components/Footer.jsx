import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const socialItems = [
    { icon: <FaGithub size={20} />, href: "https://WWW.github.com/shivambyadav99" },
    { 
      icon: <FaEnvelope size={20} />, 
      // Open Gmail compose window
      href: "https://mail.google.com/mail/?view=cm&to=shivambyadav99@gmail.com" 
    },
    { icon: <FaPhoneAlt size={20} />, href: "tel:+918605284612" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/shivambyadav99" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex gap-6 mb-4">
          {socialItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shivam Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
