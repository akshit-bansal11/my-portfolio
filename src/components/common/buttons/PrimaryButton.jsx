import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({
    onClick = null,
    to = null,
    className = '',
    children,
    type = 'button',
    icon = null,
    text = 'Button',
}) {
    const navigate = useNavigate();
    const handleClick = ( e ) => {

        if ( onClick ) {
            onClick( e );
        }

        if ( to ) {
            if ( !to.startsWith( '/' ) ) {
                const section = document.getElementById( to );
                if ( section ) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate( to );
            }
        }
    };

    return (
        <motion.button
            type = { type }
            onClick = { handleClick }
            whileHover = {{ scale: 1.05 }}
            whileTap = {{ scale: 0.95 }}
            className = {`
                    flex items-center justify-center gap-2 cursor-pointer rounded-xl px-2 py-[2px]
                    bg-neutral-300 text-neutral-900 hover:bg-white 
                    lg:text-lg md:text-sm text-[8px] 
                    transition-colors duration-200 
                    ${ className }
                `}
        >
            { icon && <span className="text-xs">{icon}</span> }
            { children || text }
        </motion.button>
    );
};