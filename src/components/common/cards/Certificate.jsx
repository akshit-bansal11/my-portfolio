import React from 'react'
import { motion } from 'framer-motion';

export default function Certificate({
    certificate,
    link = ""
}) {
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.img
                initial = {{opacity: 0.5, zIndex: 0}} 
                whileHover = {{scale: 1.1, opacity: 1, zIndex: 2}} 
                whileTap = {{scale: 1.5}} 
                className = 'rounded-2xl' 
                src = { certificate} 
                alt="" 
            />
        </a>
    )
}