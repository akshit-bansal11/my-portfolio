// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Button Component
// A reusable button with navigation and animation support
export default function Button({

    onClick = null, // Custom click handler

    to = null, // Navigation target (route or section ID)

    className = '', // Additional CSS classes

    children, // Button content (overrides text if provided)

    type = 'button', // Button type (e.g., 'button', 'submit')

    icon = null, // Optional icon element

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
            
            whileHover={{ scale: 1.05 }} // Scale up on hover
            
            whileTap={{ scale: 0.95 }} // Scale down on tap
            
            className={`flex items-center justify-center gap-2 cursor-pointer bg-neutral-300 text-neutral-900 px-2 py-[2px] lg:text-lg md:text-sm text-[8px] hover:bg-white rounded-xl transition-colors duration-200 ${className}`}
            
        >
            {icon && <span className="text-xs">{icon}</span>}
            {children || text} {/* Render children or fallback to text */}
        </motion.button>
    );
}