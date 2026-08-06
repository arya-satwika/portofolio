import { createFileRoute } from '@tanstack/react-router'
import { CV } from "@/components/CV"
import { Image } from '@unpic/react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
    return (
        <div>

        <div className="px-3 mx-auto max-w-2xl mt-20">
            <div className="flex flex-row items-center justify-between">
                <div>

                <h1 className="text-4xl font-bold">Hi, im 
                    <span className="text-main-red font-mono"> Arya Satwika</span>
                </h1>
                <p className="text-lg">
                    Namaku Arya Satwika, mahasiswa Teknik Informatika UNESA angkatan 2024
                    <br />Cinta teknologi, coding, computer, dan thinkering.
                    Hobi bermain game, mendengarkan musik, dan editing / designing.
                    Sedang mendalami dunia web development seperti React, dan NextJS,
                    ingin menjadi Fullstack Web Developer dan UI/UX Designer di masa depan.
                </p>
                </div>
                <Image src="/headshot.webp" 
                width={1000}
                height={1000}
                alt="me"
                className="w-[200px] h-[200px]"/>
            </div>
        </div>
        <CV className="my-10 max-w-4xl mx-auto" />
        </div>
    )
}