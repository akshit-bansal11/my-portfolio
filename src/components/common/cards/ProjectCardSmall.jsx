// src/components/ProjectCardSmall.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../buttons/PrimaryButton';

const ProjectCardSmall = ({ title, description, image, iframe, demoLink, githubLink, techStack = [] }) => {
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
      className="group lg:bg-neutral-600/20 bg-neutral-400/10 border-2 border-neutral-700 p-3 gap-3 rounded-2xl flex flex-col w-full"
    >
      {/* Image Preview */}
      <motion.div className="relative overflow-hidden">
        {iframe ? (
            <iframe width="100%" height="10" src={iframe} className='opacity-60 object-contain group-hover:opacity-100 rounded-xl w-full h-60 transition-all duration-200 m-auto'></iframe>
          ) : (
            <img
            src={image}
            alt={`${title} preview`}
            className="opacity-60 group-hover:opacity-100 aspect-video rounded-xl object-cover transition-all duration-200 m-auto"
            />
          )
        }
      </motion.div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2 px-1 text-left">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
        <p className="text-neutral-300 text-sm">{description}</p>
      </div>

      {/* Tech Stack */}
      <motion.ul className="flex gap-2 flex-wrap">
        {techStack.map((tech, index) => (
          <li key={index} className="text-[10px] text-neutral-300 bg-neutral-800 border-1 border-neutral-400 px-2 py-1 rounded-full">
            {tech}
          </li>
        ))}
      </motion.ul>

      {/* Buttons */}
      <div className="flex justify-start gap-3">
        {demoLink && (
          <Button
            className="bg-neutral-300 text-neutral-900 px-2 hover:bg-white"
            onClick={() => window.open(demoLink, '_blank')}
            text="Demo"
          />
        )}
        {githubLink && (
          <Button
            className="bg-neutral-300 text-neutral-900 px-2 hover:bg-white"
            onClick={() => window.open(githubLink, '_blank')}
            text="GitHub"
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCardSmall;
``
