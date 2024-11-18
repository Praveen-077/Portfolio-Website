import { PUBLICATIONS } from "../constants";
import { motion } from "framer-motion";

const Publications = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Publications
      </motion.h2>
      <div>
        {PUBLICATIONS.map((publication, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 text-stone-400 text-2xl"
            >
              <p>{publication.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-2 text-sm">{publication.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;