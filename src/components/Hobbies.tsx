"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export type hobbiesProps ={
  className?: string;
  contents:  {
    title: string;
    description: string;
    image: { src: string, alt: string, width: number };
  }[]
}


export function Hobbies({ className, contents }: hobbiesProps){
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function handleNext(){
    setCurrentIndex(contents.length - 1 === currentIndex ? 0 : currentIndex + 1);
  }
  function handlePrev(){
    setCurrentIndex(currentIndex === 0 ? contents.length - 1 : currentIndex - 1);
  }

  let currentContent = contents[currentIndex];
  return (
    <div className={`max-w-[100%] ${className}`}>
      <div className="flex flex-row">
        <div>
          <h1 className="mb-4 text-3xl font-bold">Hobbies</h1>
            {contents.map((content, index) =>(
            <AnimatePresence>
              {index == currentIndex && (<motion.div
                key={index}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{opacity: 0}}
                className="flex flex-row"
              >
                <div>
                <h1 className="text-2xl font-bold">{currentContent.title}</h1>
                <p>
                  {currentContent.description}
                </p>
                </div>
                <div className="ml-10">
                <img src={currentContent.image.src} height={700} className="rounded-2xl" alt={currentContent.image.alt} />
                </div>
              </motion.div>)}
            </AnimatePresence>
            ))}
        </div>
        
      </div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}