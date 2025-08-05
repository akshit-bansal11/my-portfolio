// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, cta }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-neutral-700 p-5 rounded-2xl flex flex-col justify-between w-[90%]"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Preview */}
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <img
          src={image}
          alt={`${title} preview`}
          className="opacity-60 group-hover:opacity-100 w-full h-56 sm:h-64 object-cover transition-all duration-200 rounded-2xl"
        />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2 px-1 text-center sm:text-left">
        <h2 className="text-white text-xl sm:text-2xl font-semibold">{title}</h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>

      {/* Optional CTA (e.g., GitHub link, case study, etc.) */}
      {cta && (
        <div className="mt-4 flex justify-center sm:justify-start">
          <motion.a
            href={cta.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm px-4 py-2 bg-white text-neutral-900 font-semibold rounded-xl transition-colors duration-300 hover:bg-neutral-200"
          >
            {cta.label || 'View Project'}
          </motion.a>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
