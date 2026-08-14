import { createFileRoute } from '@tanstack/react-router'
import { CV } from "@/components/CV"
import { Image } from '@unpic/react'

export const Route = createFileRoute('/about')({
  component: About,
  head: () =>({
    meta: [
        { title: "About | Arya Satwik" }
    ]
  })
})

function About() {
    return (
        <div>

        <div className="type-content">
            <div className="flex flex-row items-center justify-between">
                <div>

                {/* <h1 className="text-2xl font-bold">Hi, im 
                    <span className="text-main-red font-mono"> Arya Satwika</span>
                </h1> */}
                <p className="tracking-wide">
                    My name's Arya Satwika, i love thinkering, tech and understanding how stuff works
                    I also like to learn usually by doing projects or reading up on it.
                    Currently trying to get better at making useful programs and not just CRUD webapps.
                    I aspire to be a great engineer and a creative person
                </p>
                </div>
                {/* <Image src="/headshot.webp" 
                width={1000}
                height={1000}
                alt="me"
                className="w-[200px] h-[200px] ml-2"/> */}
            </div>
            <div className='mt-10 text-lg'>
                <div className='flex flex-row font-bold tracking-widest'><span className='text-clickable font-normal tracking-normal shrink-0 w-[8ch]'>
                    Systems</span><span className=' text-clickable mr-2'>\</span>
                    C++, Typescript, Python
                </div>
                <div className='flex flex-row font-bold tracking-widest'><span className='text-clickable font-normal tracking-normal shrink-0 w-[8ch]'>
                    Frontend</span><span className='text-clickable mr-2'>\</span>
                    Svelte, React, Tailwind, customtkinter,HTML, CSS, QML / quickshell
                </div>
                <div className='flex flex-row font-bold tracking-widest'><span className='text-clickable font-normal tracking-normal shrink-0 w-[8ch]'>
                    Tools</span><span className='   text-clickable mr-2'>\</span>
                    Tanstack, NextJS, Midtrans, Drizzle, uploadthing, Figma, After Effects, Davinci Resolve
                </div>
            </div>
        </div>
        <CV className="mt-10 mb-20 max-w-4xl mx-auto" />
        </div>
    )
}