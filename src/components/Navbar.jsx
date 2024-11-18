import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";
import { IoMailOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="bg-gradient-to-r from-stone-300 to-stone-300 bg-clip-text text-3xl tracking-tighter text-transparent">
       Portfolio
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/praveen-kumar-3871482a5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Praveen-077"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
           href={`mailto: praveenkumarg079@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <IoMailOutline className="text-2xl hover:text-blue-600 transition-all duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
