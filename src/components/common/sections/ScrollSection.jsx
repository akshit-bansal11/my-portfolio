function ScrollSection({ id = '', children = null, className = '' }) {
    return (
        <section
            id={id}
            className={`flex flex-col lg:gap-6 md:gap-4 gap-2 bg-gradient-to-r border-[0.25px] border-neutral-700 to-[#414345]/40 from-[#232526]/10 lg:backdrop-blur-[1px] backdrop-blur-[3px] lg:p-5 p-3 lg:rounded-2xl md:rounded-xl rounded-lg w-full ${className}`}
        >
            {children}
        </section>
    );
}

export default ScrollSection;