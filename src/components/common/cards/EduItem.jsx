import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EduItem = ({ location, company, role, date }) => {
    return (
        <motion.div
            className="text-white bg-neutral-400/10 border-1 border-neutral-600 flex flex-col rounded-2xl lg:p-6 md:p-3 p-1.5 md:gap-3 gap-1.5 overflow-hidden"
        >
            <div className="flex lg:text-sm text-[8px] justify-between">
                <div className="flex items-center text-neutral-400">
                    <FaMapMarkerAlt />
                    <span>{location}</span>
                </div>
                <span className="text-gray-400 px-3 py-1 rounded-full">{date}</span>
            </div>

            <div className="lg:text-lg text-[12px]">
                <h3 className="text-white">{company}</h3>
                <p className="text-neutral-400">{role}</p>
            </div>
            
        </motion.div>
    );
};

export default EduItem;