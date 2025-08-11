import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../buttons/PrimaryButton';

const ProjectCard = ({ title, description, image, iframe, demoLink, designLink, githubLink, techStack = [] }) => {
  const [tapEnabled, setTapEnabled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }}
      whileTap={tapEnabled ? { scale: 0.97 } : {}}
      className={`group bg-neutral-600/20 border border-neutral-600 p-3 lg:gap-4 md:gap-2 gap-1.5 rounded-2xl flex flex-col w-full transition-colors duration-300
      }`}
    >
      {/* Image Preview */}
      <div className="relative overflow-hidden rounded-xl">
        {iframe ? (
          <iframe
            src={iframe}
            className="opacity-60 group-hover:opacity-100 rounded-xl w-full h-60 object-cover transition-all duration-300 m-auto"
            title={`${title} preview`}
            loading="lazy"
          />
        ) : (
          <img
            src={image}
            alt={`${title} preview`}
            className="lg:opacity-60 lg:group-hover:opacity-100 rounded-xl w-full aspect-video object-cover transition-all duration-300 m-auto"
            loading="lazy"
          />
        )}
        <div/>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-3 px-2 text-start sm:text-left">
        <h2 className="text-white lg:text-2xl md:text-lg text-sm font-thin tracking-tight">{title}</h2>
        <p className="lg:text-neutral-400 text-white lg:text-lg md:text-sm font-thin text-[8px] line-clamp-3">{description}</p>
      </div>

      {/* Tech Stack */}
      <motion.ul className="flex lg:flex-row md:flex-row flex-col gap-x-2 gap-y-1 flex-wrap mt-2">
        {techStack.map((tech, index) => (
          <motion.li
            key={index}
            className="lg:text-xs md:text-[10px] text-[7px] text-neutral-200 bg-neutral-800/80 lg:border-1 md:border-1 border-neutral-600 px-3 py-1 rounded-lg transition-colors duration-200 hover:bg-neutral-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>

      {/* Buttons */}
      {demoLink || githubLink || designLink ? (
        <div className="mt-4 flex justify-start gap-3">
          {demoLink && (
            <Button
              onClick={() => window.open(demoLink, '_blank')}
              text="Demo"
            />
          )}
          {githubLink && (
            <Button
              onClick={() => window.open(githubLink, '_blank')}
              text="GitHub"
            />
          )}
          {designLink && (
            <Button
              onClick={() => window.open(designLink, '_blank')}
              text="See Design"
            />
          )}
        </div>
      ) : (
        <div className="mt-4 flex text-red-500 lg:text-sm text-[6px] justify-start text-center">
          *Not Deployed Yet
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;