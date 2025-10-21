import { div } from "motion/react-client";
import Image from "next/image"

type contentGridProps = {
  children?: React.ReactNode;
  className?: string;
  images: { src: string, alt: string, width: number, height: number }[];
  title: string;
  direction?: "row" | "col";
}

export function ContentGrid({children, className, images, title, direction = "row"}: contentGridProps){
  if(direction !== "row" && direction !== "col"){
    
  }

  return (
    <div className={`flex flex-col m-6 bg-card-background p-4 rounded-2xl inset-shadow-md ${className}`}>
      <div>
      <h1 className="ml-4 font-bold text-2xl text-gray-200">{title}</h1>
      <hr className="border-solid border-0.2 mx-2 mt-2 mb-6 rounded-lg"/>
      </div>

      <div className={`flex flex-${direction} gap-3 max-h-fit`}>
        <div className={`grid grid-${direction === "col" ? "cols-2 w-fit" : "cols-1 w-180 "} gap-4 p-3  bg-card-content rounded-2xl inset-shadow-sm inset-shadow-red-100/45`}>
            {images.map((image, index) => (
          <div key={index} className="w-full flex-none relative">
                <Image 
                key={index}
                src={image.src}
                width={image.width} 
                height={image.height}
                className="w-full h-full object-fit rounded-lg" 
                alt={image.alt} 
                />
          </div>
              ))}
        </div>

        <div className="text-pretty ml-8">
          {children}
        </div>
      </div>
    </div>
  )
}