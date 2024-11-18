import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold "
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-center tracking-tighter">
          <FaGithub className="text-2xl hover:text-blue-600 transition-all duration-300" />
          <a
            href={`${CONTACT.github}`}
            className="text-xl hover:text-blue-600 hover:border-blue-600 border-b-2 transition-all duration-300"
          >
            github.com/PraveenKumarG
          </a>
        </div>
        <div className="flex items-center gap-2 text-center tracking-tighter">
          <IoMailOutline className="text-2xl hover:text-blue-600 transition-all duration-300" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-xl hover:text-blue-600 hover:border-blue-600 border-b-2 transition-all duration-300"
          >
            {CONTACT.email}
          </a>
        </div>
        <div className="flex items-center gap-2 text-center tracking-tighter">
          <FaLinkedin className="text-2xl hover:text-blue-600 transition-all duration-300" />
          <a
            href={`${CONTACT.linkedin}`}
            className="text-xl hover:text-blue-600 hover:border-blue-600 border-b-2 transition-all duration-300"
          >
            linkedin.com/PraveenKumarG
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
