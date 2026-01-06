import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Solutions",
    links: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
  },
  {
    title: "Support",
    links: ["Submit ticket", "Documentation", "Guides"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Jobs", "Press"],
  },
  {
    title: "Legal",
    links: ["Terms of service", "Privacy policy", "License"],
  },
];

function Footer() {
  return (
    <footer className="bg-white text-gray-800 shadow-gray-600 shadow-lg mt-10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-6 mb-12">
          <Link
            to={"#"}
            className="hover:text-gray-400 transition-all duration-150 ease-in"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            to={"#"}
            className="hover:text-gray-400 transition-all duration-150 ease-in"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            to={"#"}
            className="hover:text-gray-400 transition-all duration-150 ease-in"
          >
            <FaXTwitter size={24} />
          </Link>
          <Link
            to={"#"}
            className="hover:text-gray-400 transition-all duration-150 ease-in"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            to={"#"}
            className="hover:text-gray-400 transition-all duration-150 ease-in"
          >
            <FaYoutube size={24} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="text-gray font-bold mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={"#"}
                      className="text-sm hover:text-gray-400 transition-all duration-150 ease-in"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm">
            © 2026 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
