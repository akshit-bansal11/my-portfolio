// navConfig.js (keep as .js)
import { FaCogs, FaTools } from 'react-icons/fa';
import { FaUser, FaLaptopCode, FaGamepad, FaBriefcase, FaGraduationCap, FaGlobe, FaAnglesUp } from 'react-icons/fa6';
import { GrAchievement } from "react-icons/gr";

export const navConfigs = {
    home: [
        { text: 'About Me', to: 'about', icon: FaUser },
        { text: 'Projects', to: 'projects', icon: FaLaptopCode },
        { text: 'Experience', to: 'experience', icon: FaBriefcase },
        { text: 'Skills', to: 'skills', icon: FaCogs },
        { text: 'Achievements & Certifications', to: 'certif', icon: GrAchievement },
        { text: 'Training', to: 'train', icon: FaAnglesUp },
        { text: 'Education', to: 'education', icon: FaGraduationCap },
    ],
    projects: [
        { text: 'Websites', to: 'websites', icon: FaGlobe },
        { text: 'Games', to: 'games', icon: FaGamepad },
        { text: 'Tools', to: 'tools', icon: FaTools },
    ]
};
