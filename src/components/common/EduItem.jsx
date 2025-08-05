import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EduItem = ({ location, company, role, date }) => {
    return (
        <motion.div
            className="text-white bg-neutral-700 flex flex-col rounded-2xl p-6 gap-2 overflow-hidden"
        >
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <FaMapMarkerAlt />
                    <span className="font-medium">{location}</span>
                </div>
                <span className="text-sm text-gray-400 px-3 py-1 rounded-full">{date}</span>
            </div>

            <div className="">
                <h3 className="text-xl font-bold text-white tracking-tight">{company}</h3>
                <p className="text-base text-gray-300 font-medium mt-1">{role}</p>
            </div>
            
        </motion.div>
    );
};

export default EduItem;