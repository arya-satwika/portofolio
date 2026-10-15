import { Image } from '@unpic/react'
import { circOut, motion } from "motion/react"
import { useState } from "react"

type contentGridProps = {
  children?: React.ReactNode;
  className?: string;
  image: { src: string, alt: string, width: number, height: number };
  title: string;
  description: string;
  link?: string;
}



export function ContentGrid({children, className, image, title, description, link}: contentGridProps){
  const [tapped, setTapped] = useState(false)

  return (
    <div className={`${className ?? ''} w-full min-w-0 bg-linear-to-br from-gradient-start to-gradient-end bg-fixed p-1 sm:p-1.5 lg:p-3`}>
        
        {/* main square - fluid, keeps square ratio on any viewport */}
        <div
          className="group relative aspect-square w-full cursor-pointer overflow-hidden transition-transform duration-300 ease-out lg:hover:scale-[1.03] lg:hover:z-20"
          onClick={() => setTapped((prev) => !prev)}
        >
          {/* image */}
          <div className={"absolute inset-0 z-0 size-full"}>
              <Image 
              src={image.src}
              width={image.width} 
              height={image.height}
              className="size-full object-cover" 
              alt={image.alt} 
              />
          </div>
          {/* description - hover on desktop, tap on touch */}
          <motion.div 
            className={`z-10 absolute inset-0 size-full bg-main-red/70 text-pretty tracking-tighter ${tapped ? 'backdrop-blur-sm' : ''} lg:hover:backdrop-blur-sm`}
            initial={false}
            animate={{ opacity: tapped ? 1 : 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ ease: circOut, duration: 0.2 }}
          >
            <div className='m-2 sm:m-3'>
              <div className='font-bold p-1 sm:p-2 text-lg sm:text-xl lg:text-3xl text-gray-200 leading-tight'>
                <a href={link} onClick={(e) => e.stopPropagation()}>{title}</a>

              </div>
              <div className="p-1 sm:p-2 text-xs sm:text-sm lg:text-base leading-snug">
                {description}
              </div>
            </div>
          </motion.div>

        </div>
    </div>
  )
}