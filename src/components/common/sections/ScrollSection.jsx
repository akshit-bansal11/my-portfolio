import React from 'react';

function ScrollSection({ id = '', children = null, className = '' }) {
    return (
        <section
            id={id}
            className={`flex flex-col lg:gap-6 md:gap-4 gap-2 bg-neutral-400/10 lg:p-5 p-3 lg:rounded-2xl md:rounded-xl rounded-lg w-full ${className}`}
        >
            {children}
        </section>
    );
}

export default ScrollSection;