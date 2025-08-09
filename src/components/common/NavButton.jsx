// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// NavButton Component
// A reusable navigation button with routing and smooth scrolling support
export default function NavButton({

    onClick = null, // Custom click handler

    to = null, // Navigation target (route or section ID)

    className = '', // Additional CSS classes

    children, // Button content (overrides text if provided)

    type = 'button', // Button type (e.g., 'button', 'submit')

    text = 'Button', // Default button text

}) {

    // Hooks
    const navigate = useNavigate();

    // Handle button click behavior
    const handleClick = (e) => {
    
        // Execute custom onClick if provided
        if (onClick) {
            onClick(e);
        }

        // Handle navigation or scrolling
        if (to) {
            if (!to.startsWith('/')) {

                // Scroll to section if 'to' is an element ID
                const section = document.getElementById(to);

                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }

            } else {
                // Navigate to route if 'to' is a path
                navigate(to);
            }
        }
    };

    // Render
    return (
        <motion.button
        
            type={type}
            
            onClick={handleClick}
            
            whileHover={{ scale: 1.1 }} // Scale up on hover
            
            whileTap={{ scale: 0.95 }} // Scale down on tap
            
            className={`flex items-center gap-2 text-white text-[8px] md:text-sm lg:text-lg lg:text-nowrap md:text-nowrap ${className}`}
            
        >
            {children || text} {/* Render children or fallback to text */}
        </motion.button>
    );
}