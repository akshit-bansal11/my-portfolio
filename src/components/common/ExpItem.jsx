import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExpItem = ({ location, company, role, date, points }) => {
    return (
        <motion.div
            className="text-white bg-neutral-700 flex flex-col rounded-2xl lg:p-6 md:p-3 p-1.5 lg:gap-4 md:gap-3 gap-1.5 overflow-hidden"
        >
            <div className="flex lg:text-sm text-[8px] justify-between">
                <div className="flex items-center gap-2 text-neutral-400">
                    <FaMapMarkerAlt />
                    <span className="font-medium">{location}</span>
                </div>
                <span className="text-gray-400 px-3 py-1 rounded-full">{date}</span>
            </div>

            <div className="lg:text-lg text-[12px]">
                <h3 className="lg:font-bold text-white tracking-tight">{company}</h3>
                <p className="text-gray-300 font-medium">{role}</p>
            </div>

            <ul className="list-disc list-inside space-y-2 lg:text-sm text-[9px] text-gray-300">
                {points.map((point, idx) => (
                    <li key={idx} className="pl-2">{point}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ExpItem;