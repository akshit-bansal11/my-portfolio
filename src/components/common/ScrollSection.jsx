import React from 'react';

function ScrollSection({ id = '', children = null, className = '' }) {
    return (
        <section
            id={id}
            className={`w-full ${className}`}
        >
            {children}
        </section>
    );
}

export default ScrollSection;