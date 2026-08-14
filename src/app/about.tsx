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
                <p className="">
                    Namaku Arya Satwika, mahasiswa Teknik Informatika UNESA angkatan 2024
                    <br />Cinta teknologi, coding, computer, dan thinkering.
                    Hobi bermain game, mendengarkan musik, dan editing / designing.
                    Sedang mendalami dunia web development seperti React, dan Tanstack,
                    ingin menjadi Fullstack Web Developer dan Systems Developer di masa depan.
                </p>
                </div>
                {/* <Image src="/headshot.webp" 
                width={1000}
                height={1000}
                alt="me"
                className="w-[200px] h-[200px] ml-2"/> */}
            </div>
            <div className='mt-10 text-lg'>
                <div className='flex flex-row'><span className='text-clickable font-normal shrink-0 w-[8ch]'>
                    Systems</span><span className=' text-clickable mr-2'>\</span>
                    C++, Typescript, Python
                </div>
                <div className='flex flex-row'><span className='text-clickable font-normal shrink-0 w-[8ch]'>
                    Frontend</span><span className='text-clickable mr-2'>\</span>
                    Svelte, React, Tailwind, customtkinter,HTML, CSS, QML / quickshell
                </div>
                <div className='flex flex-row'><span className='text-clickable font-normal shrink-0 w-[8ch]'>
                    Tools</span><span className='   text-clickable mr-2'>\</span>
                    Tanstack, NextJS, Midtrans, Drizzle, uploadthing, Figma, After Effects, Davinci Resolve
                </div>
            </div>
        </div>
        <CV className="mt-10 mb-20 max-w-4xl mx-auto" />
        </div>
    )
}