import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
      <div className="flex flex-col items-center justify-center">
        {CERTIFICATIONS.map((certification, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mb-8 text-center"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {certification.title}
            </h3>
            <p className="text-lg">{certification.institution}</p>
            <p className="text-sm text-stone-500">{certification.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
