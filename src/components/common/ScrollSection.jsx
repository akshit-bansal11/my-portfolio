import React from 'react';

function ScrollSection({ id = '', children = null, className = '' }) {
    return (
        <section
            id={id}
            className={`${className}`}
        >
            {children}
        </section>
    );
}

export default ScrollSection;
