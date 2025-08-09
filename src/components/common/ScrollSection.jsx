import React from 'react';

function ScrollSection({ id = '', children = null, className = '' }) {
    return (
        <section
            id={id}
            className={`flex flex-col gap-2 bg-neutral-800 lg:p-5 md:p-3 p-1.5 lg:rounded-2xl md:rounded-xl rounded-lg w-full ${className}`}
        >
            {children}
        </section>
    );
}

export default ScrollSection;