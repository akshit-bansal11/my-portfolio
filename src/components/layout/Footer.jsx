import React from 'react';

function Footer() {
    return (
        <footer className="w-full text-center py-4 bg-neutral-800 rounded-full text-gray-700 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} Akshit Bansal. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
