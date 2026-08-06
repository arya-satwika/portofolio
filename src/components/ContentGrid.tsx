import { Image } from '@unpic/react'
import { circOut, easeOut, motion } from "motion/react"

type contentGridProps = {
  children?: React.ReactNode;
  className?: string;
  image: { src: string, alt: string, width: number, height: number };
  title: string;
  description: string;
}



export function ContentGrid({children, className, image, title, description}: contentGridProps){
  return (
    <div className={`${className} bg-linear-to-br from-gradient-start to-gradient-end bg-fixed p-3`}>
        
        {/* main square */}
        <motion.div 
          className={"relative max-h-fit"}
          whileHover={{ scale: 1.1, zIndex: 50 }}
          transition={{ ease:circOut }}
        >
          {/* image */}
          <div className={"z-0 size-62"}>
              <Image 
              src={image.src}
              width={image.width} 
              height={image.height}
              className="size-full object-cover" 
              alt={image.alt} 
              />
          </div>
          {/* description */}
          <motion.div 
            className="z-10 absolute inset-0 bg-main-red/70 text-pretty tracking-tighter hover:backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1}}
          >
            <div className='m-3'>

              <h1 className="p-2 font-bold text-3xl text-gray-200">{title}</h1>
              <div className="p-2 text-md">
                {description}
              </div>
            </div>
          </motion.div>

        </motion.div>
    </div>
  )
}