// Dependencies
import React from 'react'
import { motion } from 'framer-motion'

// Compoents
import ScrollSection from '../components/common/ScrollSection'
import ProjectCard from '../components/common/ProjectCard'
import ProjectCardSmall from '../components/common/ProjectCardSmall'

// Images
import Inf from '../assets/projects/Websites/influera.png'
import Med from '../assets/projects/Websites/mediShare.png'
import rps from '../assets/projects/Games/rps.png'
import drumKit from '../assets/projects/Games/drumKit.png'
import ticTacToe from '../assets/projects/Games/ttt.png'
import mem from '../assets/projects/Games/memory.png'
import calc from '../assets/projects/Tools/calc.png'
import adclock from '../assets/projects/Tools/adclock.png'
import todo from '../assets/projects/Tools/todo.png'
import barClock from '../assets/projects/Tools/barClock.png'
import count from '../assets/projects/Tools/count.png'
import dclock from '../assets/projects/Tools/dclock.png'
import code from '../assets/projects/code.png'
import ipo from '../assets/designs/ipo.png'
import ecom from '../assets/designs/ecom.png'

function Projects() {
    return (
        <div className="w-full h-full flex flex-col items-center gap-10 p-5">
            <ScrollSection id="websites" className="w-full p-10 bg-neutral-800 rounded-2xl flex flex-col gap-10">
                <h1 className='text-3xl text-white'>Websites</h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full grid grid-cols-2 gap-10 align-items-center justify-items-center"
                >
                    <ProjectCard
                        title = 'Medishare'
                        description = 'MediShare is a donation-based platform that connects medicine donors with people in need through a secure and verified system.'
                        image = {Med}
                    />
                    <ProjectCard
                        title="Influera"
                        description="A website made to facilitate the collaboration between small-time influencers and potential investors and clients."
                        image={Inf}
                        demoLink="https://influera.onrender.com/"
                        githubLink="https://github.com/akshit-bansal11/Influera"
                    />
                </motion.div>
            </ScrollSection>
            <ScrollSection id="games" className="w-full p-10 bg-neutral-800 rounded-2xl flex flex-col gap-10">
                <h1 className='text-3xl text-white'>Games</h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full grid grid-cols-3 gap-x-2 gap-y-8 align-middle justify-items-center"
                >
                    <ProjectCardSmall
                        title="Rock, Paper, Scissors"
                        description="A simple rock, paper, scissors game built with HTML, CSS & JavaScript. Play against the computer and try to win!"
                        image={rps}
                        techStack={['HTML', 'CSS', 'JavaScript']}
                        demoLink="https://akshit-bansal11.github.io/RPS/"
                        githubLink="https://github.com/akshit-bansal11/RPS"
                    />
                    <ProjectCardSmall
                        title="Drum Kit"
                        description="A simple drum kit game built with HTML, CSS & JavaScript. Play different sounds by pressing the keys."
                        image={drumKit}
                        techStack={['HTML', 'CSS', 'JavaScript']}
                        demoLink="https://akshit-bansal11.github.io/drumKit/"
                        githubLink="https://github.com/akshit-bansal11/drumKit"
                    />
                    <ProjectCardSmall
                        title="Memory Game"
                        description="A fun and modern Memory Game built with React, Vite, Tailwind CSS, Framer Motion, and React Icons."
                        image={mem}
                        techStack={['React', 'Tailwind']}
                        demoLink="https://memory-game-theta-virid.vercel.app/"
                        githubLink="https://github.com/akshit-bansal11/memory-game"
                    />
                    <ProjectCardSmall
                        title="Tic Tac Toe"
                        description="A simple tic tac toe game built with HTML, CSS & JavaScript to against your friends."
                        image={ticTacToe}
                        techStack={['HTML', 'CSS', 'JavaScript']}
                        demoLink="https://akshit-bansal11.github.io/TicTacToe/"
                        githubLink="https://github.com/akshit-bansal11/TicTacToe"
                    />
                    <ProjectCardSmall
                        title="Batting Strike Calculator"
                        description="A simple batting strike calculator built with Python. Calculate your batting strike rate and average."
                        image={code}
                        techStack={['Python']}
                        githubLink="https://github.com/akshit-bansal11/batting_strike-calculator-app"
                    />
                </motion.div>
            </ScrollSection>
            <ScrollSection id="tools" className="w-full p-10 bg-neutral-800 rounded-2xl flex flex-col gap-10">
                <h1 className='text-3xl text-white'>Tools</h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full grid grid-cols-3 gap-x-2 gap-y-8 align-middle justify-items-center"
                >
                    <ProjectCardSmall
                        title="Bar Clock"
                        description="A simple bar clock built with React & Tailwind. Displays the current time in a unique way."
                        image={barClock}
                        techStack={['React', 'Tailwind']}
                        demoLink="https://akshit-bansal11.github.io/barClock/"
                        githubLink="https://barclock.vercel.app/"
                    />
                    <ProjectCardSmall
                        title="Audio Visualizer"
                        description="A Real-Time Audio Visualizer built with C# & .NET. Visualizes the audio from all sources and from any audio device connected to the system."
                        image={code}
                        techStack={['C#', '.NET']}
                        githubLink="https://github.com/akshit-bansal11/AudioVisualizer"
                    />
                    <ProjectCardSmall
                        title="Counter"
                        description="A simple click counter built with React & Tailwind. Click the button to increase the count."
                        image={count}
                        techStack={['React', 'Tailwind']}
                        demoLink="https://counter-self-beta.vercel.app/"
                        githubLink="https://akshit-bansal11.github.io/counter/"
                    />
                    <ProjectCardSmall
                        title="Analog + Digital Clock"
                        description="A simple analog and digital clock built with HTML, Tailwind & Vanilla JavaScript. Displays the current time in both analog and digital formats."
                        image={adclock}
                        techStack={['HTML', 'Tailwind', 'JavaScript']}
                        githubLink="https://github.com/akshit-bansal11/analog-digital-clock"
                        demoLink="https://akshit-bansal11.github.io/analog-digital-clock/"
                    />
                    <ProjectCardSmall
                        title="To Do List"
                        description="A simple to-do list application built with React & Tailwind. Add, edit, and delete tasks easily."
                        image={todo}
                        techStack={['React', 'Tailwind']}
                        githubLink="https://github.com/akshit-bansal11/to-do-list"
                        demoLink="https://to-do-list-neon-chi.vercel.app/"
                    />
                    <ProjectCardSmall
                        title="Digital Clock"
                        description="A simple digital clock built with HTML, Tailwind & Vanilla JavaScript."
                        image={dclock}
                        techStack={['HTML', 'Tailwind', 'JavaScript']}
                        githubLink="https://github.com/akshit-bansal11/digital-clock"
                        demoLink="https://akshit-bansal11.github.io/digital-clock/"
                    />
                    <ProjectCardSmall
                        title="C++ Login/Signup System"
                        description="A simple login/signup system built with C++. It allows users to register and login with a username and password."
                        image={code}
                        techStack={['C++']}
                        githubLink="https://github.com/akshit-bansal11/cpp-login-signup"
                    />
                    <ProjectCardSmall
                        title="Simple Calculator"
                        description="A simple calculator built with HTML, CSS & JavaScript. Perform basic arithmetic operations."
                        image={calc}
                        techStack={['HTML', 'CSS', 'JavaScript']}
                        githubLink="https://github.com/akshit-bansal11/Simple-Calculator"
                        demoLink="https://akshit-bansal11.github.io/Simple-Calculator/"
                    />
                </motion.div>
            </ScrollSection>
            <ScrollSection id="designs" className="w-full p-10 bg-neutral-800 rounded-2xl flex flex-col gap-10">
                <h1 className='text-3xl text-white'>Designs</h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full grid grid-cols-2 gap-x-2 gap-y-8 align-middle justify-items-center"
                >
                    <ProjectCard
                        title="IPO Dashboard - Bluestock Fintech"
                        description="A dashboard design for Bluestock Fintech's IPO section, showcasing the latest IPOs, upcoming IPOs, and past IPOs."
                        image={ipo}
                        techStack={['Figma']}
                        designLink="https://www.figma.com/design/IyF5MKCS7GP2ChFBOiWXAK/bluestock-fintech-ui-ux-team?node-id=0-1&p=f&t=uex6AqWahwZjsA3R-0"
                    />
                    <ProjectCard
                        title="E-Commerce Website Template"
                        description="A modern e-commerce website template designed for a fictional clothing store, featuring a clean and user-friendly interface."
                        image={ecom}
                        techStack={['Figma']}
                        designLink="https://www.figma.com/design/32zeVVPSZBHL9GFSEXUqHp/Ecom-base?node-id=1-3&p=f&t=JxJOvK2iMlsW3gJ2-0/"
                    />
                </motion.div>
            </ScrollSection>
        </div>
    )
}

export default Projects