import { Link } from "@tanstack/react-router"
import { Image } from '@unpic/react'

export function Header({ className }: { className?: string }){
  return(
      <div className={`flex flex-col mb-2 mt-25 mx-auto gap-2 bg-gradient-start/30 backdrop-blur-sm max-h-20 max-w-2xl ${className}`}>
        <div className="flex flex-row gap-4 items-center">
        <Link to="/">
            <Image src="/logo A icon v2.svg" height={70} width={70} alt="home" />
        </Link>
        <div>
        <h1 className="text-4xl font-bold">Arya Satwika</h1>
        <h2 className="mt-2 text-lg text-main-red">Web Developer / Video Editor</h2>
        </div>
        </div>
          <div className="flex justify-between pt-3">
            <div className="flex gap-2 items-center ml-3">
            <span className="text-white pt-1 flex flex-row gap-4">
              <Link to="/" className='hover:underline'>Home</Link>
              <Link to="/about" className='hover:underline'>About</Link>
              <Link to="/projects/coding" className='hover:underline'>Coding</Link>
              <Link to="/projects/video" className='hover:underline'>Video</Link>
            </span>
            </div>
            <div className='flex flex-row gap-4 items-center mr-3'>
              <a href="https://github.com/arya-satwika" target="_blank" rel="noopener noreferrer">
                <Image src="/github-white.svg" alt="my github" height={25} width={25} />
              </a>
              <a href="https://www.linkedin.com/in/arya-satwika-2a57211a1/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin-logo-white.svg" alt="my linked-in" height={25} width={25} />
              </a>
            </div>
        </div>

      </div> 
  )
}