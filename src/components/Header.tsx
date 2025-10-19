export function Header({ className }: { className?: string }){
  return( 
    <div className={`flex justify-between items-center p-2 bg-gradient-start/40 backdrop-blur-md max-h-20 w-screen ${className}`}>
      <div className="flex  gap-2 items-center ml-3">
        <a href="/">
            <img src="icon-portofolio.svg" width={30} alt="" />
        </a>
      <span className="text-white pt-1 flex flex-row gap-4">
        <a href="about" className='hover:underline'>About</a>
        <a href="projects" className='hover:underline'>Projects</a>
      </span>
      </div>
      <div className='flex flex-row gap-4 items-center mr-3'>
        <a href="https://github.com/arya-satwika" target="_blank" rel="noopener noreferrer">
          <img src="/github-white.svg" alt="my github" width={25} />
        </a>
        <a href="https://www.linkedin.com/in/arya-satwika-2a57211a1/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-logo-white.svg" alt="my linked-in" width={25} />
        </a>
      </div>

    </div>
  )
}