import { motion } from 'framer-motion';
import React from 'react';
import clsx from 'clsx';

const IconCard = ({ Icon, name }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="flex flex-col items-center">
            <motion.div
                className="group flex flex-col items-center bg-neutral-900 p-4 rounded-2xl gap-2 overflow-hidden"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <Icon className={clsx("text-3xl transition-colors duration-300}", isHovered ? `text-white` : `text-neutral-400`)} />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-sm text-neutral-400 group-hover:text-white transition-colors duration-300"
            >
                {name}
            </motion.p>
        </div>
    );
};

export default IconCard;