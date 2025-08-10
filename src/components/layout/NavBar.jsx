// Dependencies
import React from 'react';

// Components
import NavLinks from '../common/sections/NavLinks';

// Config
import { navConfigs } from '../../config/NavConfig';

// Utility function to scroll to a section by ID
function scrollToSection(id) {

    const element = document.getElementById(id);
    
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }

}

// NavBar Component
// A sticky navigation bar with dynamic links and contact button
export default function NavBar({ page = 'home' }) {

    // Dynamic navigation items based on page configuration
    const navItems = navConfigs[page] || [];

    // Render
    return (
        <nav className="flex items-center w-full justify-center lg:w-min px-5 py-3 bg-neutral-400/10 rounded-2xl">
            {/* Navigation Links */}
            <NavLinks
                links={navItems.map((item) => ({

                    ...item,

                    icon: item.icon ? <item.icon /> : null, // Render icon if provided

                    onClick: () => scrollToSection(item.to), // Scroll to section on click

                }))}

                className="gap-4" // Spacing between links
            
            />
        </nav>
    );
}