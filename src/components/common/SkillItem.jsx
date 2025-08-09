import { motion } from 'framer-motion';
import React from 'react';
import clsx from 'clsx';

const IconCard = ({ Icon, name }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="flex flex-col items-center">
            <motion.div
                className="flex items-center bg-neutral-900 lg:p-4 md:p-3 p-1.5 lg:rounded-2xl rounded-lg"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <Icon className={clsx("lg:text-3xl md:text-xl text-sm transition-colors duration-300}", isHovered ? `text-white` : `text-neutral-400`)} />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="lg:text-sm md:text-xs text-[0px] text-neutral-400 group-hover:text-white transition-colors duration-300"
            >
                {name}
            </motion.p>
        </div>
    );
};

export default IconCard;