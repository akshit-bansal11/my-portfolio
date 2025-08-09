// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { p } from 'framer-motion/client';

const ProjectCard = ({ title, description, image, iframe, demoLink, designLink, githubLink, techStack = [] }) => {
  const [tapEnabled, setTapEnabled] = useState(false);

  const handleCardClick = () => {
    if (githubLink) {
      setTapEnabled(true);
      window.open(githubLink, '_blank');
    } else {
      setTapEnabled(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={tapEnabled ? { scale: 0.97 } : {}} // Only animate if GitHub link exists
      onClick={handleCardClick}
      className="group bg-neutral-700 border-2 border-neutral-700 p-5 gap-4 rounded-2xl flex flex-col w-[90%]"
    >
      {/* Image Preview */}
      <div className="relative overflow-hidden">
        {iframe ? (
            <iframe src={iframe} className='opacity-60 group-hover:opacity-100 rounded-xl w-full h-60 object-cover transition-all duration-200 m-auto'></iframe>
          ) : (
            <img
            src={image}
            alt={`${title} preview`}
            className="opacity-60 group-hover:opacity-100 rounded-xl w-full lg:h-60 md:h-40 h-25 object-cover transition-all duration-200 m-auto"
            />
          )
        }
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2 px-1 text-center sm:text-left">
        <h2 className="text-white lg:text-2xl md:text-lg text-sm font-semibold">{title}</h2>
        <p className="text-neutral-300 lg:text-lg md:text-sm text-[8px]">{description}</p>
      </div>

      {/* Tech Stack */}
      <motion.ul className="flex lg:flex-row md:flex-row sm:flex-col gap-x-2 gap-y-1 flex-wrap mt-2">
        {techStack.map((tech, index) => (
          <li key={index} className="lg:text-xs md:text-[10px] sm:text-[7px] text-neutral-300 bg-neutral-800 lg:border-1 md:border-1 border-neutral-400 px-2 py-1 rounded-full">
            {tech}
          </li>
        ))}
      </motion.ul>

      {/* Buttons */}
      {demoLink || githubLink || designLink ? (
        <div className="mt-4 flex justify-center sm:justify-start gap-3">
          {demoLink && (
            <Button
              className="bg-neutral-300 text-neutral-900 px-2 py-1 hover:bg-white"
              onClick={() => window.open(demoLink, '_blank')}
              text="Demo"
            />
          )}
          {githubLink && (
            <Button
              className="bg-neutral-300 text-neutral-900 px-2 py-1 hover:bg-white"
              onClick={() => window.open(githubLink, '_blank')}
              text="GitHub"
            />
          )}
          {designLink && (
            <Button
              className="bg-neutral-300 text-neutral-900 px-2 py-1 hover:bg-white"
              onClick={() => window.open(designLink, '_blank')}
              text="See Design"
            />
          )}
        </div>
      ) : (
        <div className="mt-4 flex text-red-500 text-sm justify-start text-center">
          *Not Deployed Yet
        </div>
      )}
      
    </motion.div>
  );
};

export default ProjectCard;
``
