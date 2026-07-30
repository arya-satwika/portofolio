import { Link } from "@tanstack/react-router"
import { Image } from '@unpic/react'

export function Header({ className }: { className?: string }){
  return( 
    <div className={`flex justify-between items-center p-2 bg-gradient-start/30 backdrop-blur-sm max-h-20 w-screen ${className}`}>
      <div className="flex gap-2 items-center ml-3">
        <Link to="/">
            <Image src="/icon-portofolio.svg" height={30} width={30} alt="home" />
        </Link>
      <span className="text-white pt-1 flex flex-row gap-4">
        <Link to="/about" className='hover:underline'>About</Link>
        <Link to="/projects/coding" className='hover:underline'>Coding Projects</Link>
        <Link to="/projects/video" className='hover:underline'>Video Projects</Link>
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
  )
}