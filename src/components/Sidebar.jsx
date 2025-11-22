import { useState, useEffect, useRef } from 'react';
import {
  FaHome,
  FaUser,
  FaCode,
  FaFileAlt,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa';
import { AiOutlineClose, AiOutlineAppstore } from 'react-icons/ai';
import profile from "../assets/profile.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  // Stable nav items
  const navItems = useRef([
    { icon: <FaHome />, label: 'Home', id: 'hero' },
    { icon: <FaUser />, label: 'About', id: 'about' },
    { icon: <FaCode />, label: 'Skills', id: 'skills' },
    { icon: <FaFileAlt />, label: 'Resume', id: 'resume' },
    { icon: <FaProjectDiagram />, label: 'Projects', id: 'projects' },
    { icon: <FaCertificate />, label: 'Certifications', id: 'certifications' },
    { icon: <FaEnvelope />, label: 'Contact', id: 'contact' },
  ]);

  const socialItems = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/shivam2337' },
    { icon: <FaEnvelope size={20} />, href: 'https://mail.google.com/mail/?view=cm&to=shivambyadav99@gmail.com' },
    { icon: <FaPhoneAlt size={20} />, href: 'tel:+918605284612' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/shivambyadav99' },
  ];

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      window.history.replaceState(null, '', `#${id}`);
      setIsOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let closestId = navItems.current[0].id;
      let minDist = Infinity;

      navItems.current.forEach((item) => {
        const sec = document.getElementById(item.id);
        if (sec) {
          const distance = Math.abs(sec.getBoundingClientRect().top);
          if (distance < minDist) {
            minDist = distance;
            closestId = item.id;
          }
        }
      });

      if (closestId !== activeId) {
        setActiveId(closestId);
        window.history.replaceState(null, '', `#${closestId}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  // Jump to hash or hero on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const heroSection = document.getElementById('hero');

    if (hash && document.getElementById(hash)) {
      document.getElementById(hash).scrollIntoView({ behavior: 'auto', block: 'start' });
      setActiveId(hash);
    } else if (heroSection) {
      window.history.replaceState(null, '', '#hero');
      heroSection.scrollIntoView({ behavior: 'auto', block: 'start' });
      setActiveId('hero');
    }
  }, []);

  // Close sidebar on overlay click
  const handleOverlayClick = (e) => {
    if (e.target.id === 'sidebar-overlay') setIsOpen(false);
  };

  return (
    <>
      {/* Collapsed button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 w-12 h-12 border-2 border-blue-500 text-blue-500 rounded-full flex justify-center items-center hover:bg-blue-100 transition"
        >
          <AiOutlineAppstore size={22} />
        </button>
      )}

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            id="sidebar-overlay"
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={handleOverlayClick}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-4 left-4 h-[calc(100%-2rem)] w-64 bg-white shadow-2xl rounded-2xl transition-all duration-500 z-50 flex flex-col overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 flex justify-center items-center p-2 text-gray-600 hover:text-blue-500 transition"
            >
              <AiOutlineClose size={24} />
            </button>

            {/* Profile */}
            <div className="flex flex-col items-center mt-10 px-4">
              <img
                src={profile}
                alt="Shivam Yadav"
                className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Shivam Yadav</h3>

              {/* Social */}
              <div className="flex mt-3 gap-4">
                {socialItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-gray-600 hover:text-blue-600 transition transform translate-y-4 opacity-0 ${
                      isOpen ? 'opacity-100 translate-y-0' : ''
                    }`}
                    style={{ transitionDelay: `${idx * 120 + 200}ms` }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-10 flex-1 overflow-y-auto pr-2">
              {navItems.current.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center p-4 rounded-r-lg mx-2 my-1 cursor-pointer transition-colors ${
                    activeId === item.id
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="ml-4">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
