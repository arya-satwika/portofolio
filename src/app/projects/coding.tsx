import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { motion } from "motion/react"
import { Link } from '@tanstack/react-router'
import { title } from 'process'
import * as React from 'react';

export const Route = createFileRoute('/projects/coding')({
  component: ProjectsPage,
  head: () =>({
    meta: [
        { title: "Coding Projects | Arya Satwika" }
    ]
  })
})

const stripImageClass = "h-48 sm:h-72 lg:h-100 w-auto max-w-none shrink-0 object-cover"

function ProjectsPage() {
    return (
        <div>
            <div className="type-content">
                <h1 className="text-2xl sm:text-4xl font-bold mb-8">My Projects</h1>

                <a href="https://github.com/arya-satwika/habit-clone" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-bold text-main-red">Habit Clone</a>
                <hr className="mb-4 border-clickable "/>

                {/* keep side-by-side on mobile: description left, tools right */}
                <div className="flex flex-row justify-between w-full gap-4 text-sm sm:text-base">
                    <span className="min-w-0 flex-1">
                    <p>
                        First webapp that i ever made, i chose svelte because i thought it was easier than react, turns out
                        svelte abstracts a lot of stuff which made it harder for me to learn, and the syntax looked easy on paper
                        but it was horrible to code with. Runes was nice it was very easy to have reactive states but it became a lot 
                        more complicated when you start using effect, now i know why people use react lol
                    </p>
                    </span>
                    
                    <div className="shrink-0">
                    <h3 className="mb-3">Tools</h3>
                    <ul className="list-disc pl-4">
                        <li>Svelte</li>
                        <li>NeonDB</li>
                        <li>TypeScript</li>
                        <li>Drizzle</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-full overflow-hidden bg-main-red min-h-40 sm:min-h-50 py-3 sm:py-4 mt-4">
                <div className='overflow-x-auto'>
                <motion.div 
                className="flex flex-row min-h-fit w-max max-w-none items-center gap-5 px-4"
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{ 
                    ease: "easeOut",
                    type: "spring",
                    duration: 2.2

                }}
                >
                    <Image 
                    src="/habitclone-screenshot.webp"
                    width={1517}
                    height={576}
                    alt="AE-timeline.webp"
                    className={stripImageClass}
                    />
                    <Image 
                    src="/new-routine-ss.webp"
                    width={1526}
                    height={1022}
                    alt="AE-timeline.webp"
                    className={stripImageClass}
                    />
                    <Image 
                    src="/del-routine-ss.webp"
                    width={1522}
                    height={1019}
                    alt="AE-timeline.webp"
                    className={stripImageClass}
                    />
                    <Image 
                    src="/smiley.svg"
                    width={300}
                    height={200}
                    alt="AE-timeline.webp"
                    className={stripImageClass}
                    />
                </motion.div>
                </div>
                

            </div>

            {/* tutorly */}
            <div className='w-full max-w-2xl mt-15 mx-auto px-3 text-sm sm:text-base'>
                <a className="text-xl sm:text-2xl font-bold text-main-red" href='https://github.com/arya-satwika/tutorly'>Tutorly</a>
                <hr className="mb-4 border-clickable "/>

                <div className="flex flex-row justify-between w-full gap-4">
                    <span className="min-w-0 flex-1">
                    <p>
                        My first desktop 'app' because this project is purely for a grade, made it for my OOP class.
                        it has no database no real transaction logic all of those are dummy values, but this was my first time
                        coding something relatively big using python. The GUI library i used was customtkinter a more modern version
                        of tkinter
                    </p>
                    </span>
                    
                    <div className="shrink-0">
                    <h3 className="mb-3">Tools</h3>
                    <ul className="list-disc pl-4">
                        <li>Python</li>
                        <li>CustomTKinter</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-full overflow-hidden bg-main-red min-h-40 sm:min-h-50 py-3 sm:py-4 mt-4 mb-10">
                {/* pictures slide */}
                <div className='overflow-x-auto'>
                    <motion.div 
                    className="flex flex-row min-h-fit w-max max-w-none items-center gap-5 px-4"
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    transition={{ 
                        ease: "easeOut",
                        type: "spring",
                        duration: 2.2
                        
                    }}
                    >
                        <Image 
                        src="/tutorly/tutorly-main.webp"
                        width={600}
                        height={200}
                        alt="AE-timeline.webp"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/tutorly/profil.webp"
                        width={660}
                        height={200}
                        alt="AE-timeline.webp"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/tutorly/login.webp"
                        width={319}
                        height={200}
                        alt="AE-timeline.webp"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/tutorly/chat.webp"
                        width={454}
                        height={200}
                        alt="AE-timeline.webp"
                        className={stripImageClass}
                        />
                    </motion.div>
                </div>
            </div>
            {/* paper scanner */}
            <div className="w-full mx-auto max-w-2xl mt-25 px-3 text-sm sm:text-base">
                <a className="text-xl sm:text-2xl font-bold  text-main-red" href='https://github.com/arya-satwika/air-alam-website'>Website Air Alam</a>
                <hr className="mb-4 border-clickable "/>

                <div className="flex flex-row justify-between w-full gap-4">
                    <span className="min-w-0 flex-1">
                    <p>
                        My third web project and second react project, first one being my personal webpage.
                        This is a final group project my role was migrating the figma designs that my friends made into code.
                        I also developed the payment stuff using midtrans, the docs for it were confusing there arent alot of 
                        guides for React and typescript but i made it work!
                    </p>
                    </span>
                    
                    <div className="shrink-0">
                    <h3 className="mb-3">Tools</h3>
                    <ul className="list-disc pl-4">
                        <li>Next JS</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Midtrans</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-full overflow-hidden bg-main-red min-h-40 sm:min-h-50 py-3 sm:py-4 mt-4 mb-10">
                {/* pictures slide */}
                <div className='overflow-x-auto'>
                    <motion.div 
                    className="flex flex-row min-h-fit w-max max-w-none items-center gap-5 px-4"
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    transition={{ 
                        ease: "easeOut",
                        type: "spring",
                        duration: 2.2
                        
                    }}
                    >
                        <Image 
                        src="/air_alam/home.webp"
                        width={1350}
                        height={874}
                        alt="home.webp"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/air_alam/products.webp"
                        width={600}
                        height={200}
                        alt="products.webp"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/air_alam/product_2.webp"
                        width={600}
                        height={200}
                        alt="product_2.webp"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/air_alam/cart.webp"
                        width={600}
                        height={200}
                        alt="cart.webp"
                        className={stripImageClass}
                        />
                    </motion.div>
                </div>
            </div>
            {/* paper scanner */}
            <div className="w-full mx-auto max-w-2xl mt-25 px-3 text-sm sm:text-base">
                <a className="text-xl sm:text-2xl font-bold  text-main-red" href='https://github.com/arya-satwika/air-alam-website'>Paper Scanner</a>
                <hr className="mb-4 border-clickable "/>

                <div className="flex flex-row justify-between w-full gap-4">
                    <span className="min-w-0 flex-1">
                    <p>
                        just a basic python script i made for my final semester's project 
                        in my digital image processing class. Basically a clone of the camscanner phone app but its not as good
                    </p>
                    </span>
                    
                    <div className="shrink-0">
                    <h3 className="mb-3">Tools</h3>
                    <ul className="list-disc pl-4">
                        <li>Python</li>
                        <li>OpenCV</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-full overflow-hidden bg-main-red min-h-40 sm:min-h-50 py-3 sm:py-4 mt-4 mb-10">
                {/* pictures slide */}
                <div className='overflow-x-auto'>
                    <motion.div 
                    className="flex flex-row min-h-fit w-max max-w-none items-center gap-5 px-4"
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    transition={{ 
                        ease: "easeOut",
                        type: "spring",
                        duration: 2.2
                        
                    }}
                    >
                        <Image 
                        src="/paper_scanner/paper_scanner_1.png"
                        width={1350}
                        height={874}
                        alt="home.webp"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/paper_scanner/paper_scanner_2.png"
                        width={1350}
                        height={874}
                        alt="paper_scanner"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/paper_scanner/paper_scanner_4.png"
                        width={1350}
                        height={874}
                        alt="paper_scanner"
                        className={stripImageClass}
                        />
                        <Image 
                        src="/paper_scanner/paper_scanner_5.png"
                        width={1350}
                        height={874}
                        alt="paper_scanner"
                        className={stripImageClass}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
