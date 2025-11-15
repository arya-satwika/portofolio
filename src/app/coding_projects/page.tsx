import Image from 'next/image';
import * as motion from 'motion/react-client';

export default function ProjectsPage() {
    return (
        <div>
            <div className="mx-30 mt-15">
                <h1 className="text-4xl font-bold mb-8">My Coding Projects</h1>

                <h2 className="text-2xl font-bold  text-main-red">Habit Clone</h2>
                <hr className="mb-4 border-clickable "/>

                <div className="flex flex-row justify-content-between w-full">
                    <span>
                    <p>
                        Aplikasi Web Fullstack yang dikembangkan menggunakan Svelte dan Typescript
                        untuk membantu melacak rutinitas tiap hari, progres dapat dilihat dengan kotak yang berwarna.
                        terinspirasi dari graf github commits.
                        Backend menggunakan NeonDB sebagai database dan Drizzle ORM untuk interaksi database.
                        Disini saya menggunakan svelte karena saya dengan sintaksnya sederhana seperti python pada dunia web development,
                        dan juga karena svelte adalah framework baru dibandingkan framework lain seperti angular atau vue.
                        Tetapi mencari tutorial svelte susah sekali karena masih baru, dan ekosistemnya tidak seluas dan selengkap react
                    </p>
                    </span>
                    
                    <div className="ml-9">
                    <h3 className="mb-3">Tools</h3>
                    <ul className="list-disc">
                        <li>Svelte</li>
                        <li>NeonDB</li>
                        <li>TypeScript</li>
                        <li>Drizzle</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="min-w-screen bg-main-red min-h-[200px] py-4 mt-4">
                <div className='overflow-scroll'>
                <motion.div 
                className="flex flex-row min-h-fit items-center gap-5"
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{ 
                    ease: "easeOut",
                    type: "spring",
                    duration: 2.2

                }}
                >
                    <Image 
                    src="/habitclone-screenshot.png"
                    width={900}
                    height={200}
                    alt="AE-timeline.png"
                    />
                    <Image 
                    src="/new-routine-ss.png"
                    width={510}
                    height={200}
                    alt="AE-timeline.png"
                    />
                    <Image 
                    src="/del-routine-ss.png"
                    width={510}
                    height={200}
                    alt="AE-timeline.png"
                    />
                    <Image 
                    src="/smiley.svg"
                    width={300}
                    height={200}
                    alt="AE-timeline.png"
                    className='pr-3'
                    />
                </motion.div>
                </div>
                

            </div>
            <div className="mx-30 mt-25">
                <h2 className="text-2xl font-bold  text-main-red">Tutorly</h2>
                <hr className="mb-4 border-clickable "/>

                <div className="flex flex-row justify-content-between w-full">
                    <span>
                    <p>
                        Aplikasi desktop yang dikembangkan menggunakan Python dan CustomTKInter sebagai GUI,
                        untuk membantu mahasiswa yang sedang kesulitan dalam suatu mata kuliah tetapi tidak ada yang bisa mengajar.
                        Tutorly menghubungkan mahasiswa dengan mahasiswa lainnya yang lebih paham dengan materi dan ingin mengajarkannya
                        kepada seseorang
                    </p>
                    </span>
                    
                    <div className="ml-9">
                    <h3 className="mb-3">Tools</h3>
                    <ul className="list-disc">
                        <li>Python</li>
                        <li>CustomTKinter</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="min-w-screen bg-main-red min-h-[200px] py-4 mt-4 mb-10">
                <div className='overflow-scroll'>

                <motion.div 
                className="flex flex-row min-h-fit items-center gap-5"
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                transition={{ 
                    ease: "easeOut",
                    type: "spring",
                    duration: 2.2
                    
                }}
                >
                    <Image 
                    src="/tutorly/tutorly-main.png"
                    width={600}
                    height={200}
                    alt="AE-timeline.png"
                    />
                    <Image 
                    src="/tutorly/profil.png"
                    width={660}
                    height={200}
                    alt="AE-timeline.png"
                    />
                    <Image 
                    src="/tutorly/login.png"
                    width={319}
                    height={200}
                    alt="AE-timeline.png"
                    />
                    <Image 
                    src="/tutorly/chat.png"
                    width={454}
                    height={200}
                    alt="AE-timeline.png"
                    />
                </motion.div>
            </div>
            </div>
        </div>
    )
}