import { CV } from "@/components/CV"

export default function About() {
    return (
        <div className="mx-30">
            <div className="flex flex-row items-center justify-between">
            <div className='max-w-[900px]'>
            <h1 className="text-4xl font-bold">Hi, im 
                <span className="text-main-red"> Arya Satwika</span>
            </h1>
            <p className="text-lg">
                Namaku Arya Satwika, mahasiswa Teknik Informatika UNESA angkatan 2024
                <br />Cinta teknologi, coding, computer, dan thinkering.
                Hobi bermain game, mendengarkan musik, dan editing / designing.
                Sedang mendalami dunia web development seperti React, dan NextJS,
                ingin menjadi Fullstack Web Developer dan UI/UX Designer di masa depan.
            </p>
            <div className="flex flex-row justify-between">
                <div>
                <h2 className="mt-6 text-xl font-bold">Programming Languages: </h2>
                <ul className="list-disc">
                    <li>Svelte</li>
                    <li>React</li>
                    <li>TypeSript</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Drizzle</li>
                </ul>
                </div>
                <div>
                <h2 className="mt-6 text-xl font-bold">Sertifikat: </h2>
                <ul className="list-disc">
                    <li>X-Project Fullstack Web Development</li>
                    <li>GDGOC: Building with Gemini and Google Cloud</li>
                    <li>Python Programming with Red Hat</li>
                </ul>
                </div>
            </div>
            </div>
            <img src="/headshot.png" width={600} alt="" />
            </div>
            <CV className="my-10" />
        </div>
    )
}