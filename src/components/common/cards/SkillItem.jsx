import { motion } from 'framer-motion';
import React from 'react';
import clsx from 'clsx';

const IconCard = ({ Icon, name }) => {
    return (
        <motion.div
            className="flex flex-col t items-center group select-none"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
                tap: { scale: 0.2 }
            }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
            whileHover={{rotate: -8, y: -5}}
            className="flex items-center bg-gradient-to-r hover:border-[0.25px] hover:border-neutral-700 from-[#414345] to-[#232526] md:p-3 p-1.5 lg:rounded-2xl rounded-lg">
                <Icon
                    className={clsx(
                        "lg:text-3xl md:text-xl text-sm transition-colors duration-300",
                        "text-neutral-400 group-hover:text-white"
                    )}
                />
            </motion.div>

            <motion.div
                variants={{
                    rest: { opacity: 0, y: -10 },
                    hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:text-sm md:text-xs text-[0px] text-neutral-400 group-hover:text-white"
            >
                {name}
            </motion.div>
        </motion.div>
    );
};

export default IconCard;
