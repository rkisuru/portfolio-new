import { MdArrowOutward } from "react-icons/md";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section className="py-8" id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-3xl font-bold"
      >
        Certifications
      </motion.h2>
      {CERTIFICATIONS.map((cert, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="mb-2 p-10 flex items-center gap-2"
        >
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text:xl md:text-2xl font-semibold"
          >
            {cert.title}
          </a>
          <span className="text-xl md:text-xl">
            <MdArrowOutward />
          </span>
        </motion.div>
      ))}
    </section>
  );
};

export default Certifications;
