//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|    DEPENDENCIES    |--------------------//
//--------------------|____________________|--------------------//
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';



//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|    MAIN RENDER     |--------------------//
//--------------------|____________________|--------------------//
export default function ExpItem({location, company, role, date, points = []}) {
    return (
        <motion.div
            className={`
                flex flex-col overflow-hidden rounded-2xl border-[0.25px] border-neutral-700
                bg-gradient-to-r from-[#414345]/40 to-[#232526]/10
                text-white
                lg:p-6 md:p-3 p-1.5 md:gap-3 gap-1.5
            `}
        >
            <div className="flex justify-between lg:text-sm text-[8px]">
                <div className="flex items-center text-neutral-400">
                    <FaMapMarkerAlt />
                    <span>{location}</span>
                </div>
                <span className="rounded-full px-3 py-1 text-gray-400">{date}</span>
            </div>
            <div className="lg:text-lg text-[12px]">
                <h3 className="text-white">{company}</h3>
                <p className="text-neutral-400">{role}</p>
            </div>
            <ul className="list-inside list-disc space-y-2 lg:text-sm text-[9px] text-neutral-400">
                {points.map((point, idx) => (
                    <li key={idx} className="pl-2">{point}</li>
                ))}
            </ul>
        </motion.div>
    );
};