import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavButton({
    onClick = null,
    to = null,
    className = '',
    children,
    type = 'button',
    text = 'Button',
}) {
    const navigate = useNavigate();

    const handleClick = (e) => {

        if (onClick) {
            onClick(e);
        }

        if (to) {
            if (!to.startsWith('/')) {
                const section = document.getElementById(to);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate(to);
            }
        }
    };

    return (
        <motion.button
            type={type}
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
                flex items-center gap-2 cursor-pointer
                text-white lg:text-neutral-300 lg:hover:text-amber-400
                text-[8px] md:text-sm lg:text-lg 
                text-nowrap md:text-nowrap lg:text-nowrap
                transition-colors duration-200 ease-in-out
                hover:drop-shadow-[0_0_5px_rgba(251,191,36,1)]
                ${className}
            `}
        >
            {children || text}
        </motion.button>
    );
};