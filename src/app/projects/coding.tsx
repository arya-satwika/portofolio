import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { motion } from "motion/react"
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/coding')({
  component: ProjectsPage,
})

function ProjectsPage() {
    return (
        <div className='w-screen'>
            <div className="max-w-2xl mx-auto mt-15">
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>

                <a href="https://habitclone.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-main-red">Habit Clone</a>
                <hr className="mb-4 border-clickable "/>

                <div className="flex flex-row justify-content-between w-full">
                    <span>
                    <p>
                        Aplikasi Web Fullstack yang dikembangkan menggunakan Svelte dan Typescript
                        untuk membantu melacak rutinitas tiap hari, progres dapat dilihat dengan kotak yang berwarna.
                        terinspirasi dari heatmap github commits.
                        Backend menggunakan NeonDB sebagai database dan Drizzle ORM untuk interaksi database.
                        Disini saya menggunakan svelte karena saya suka dengan sintaksnya sederhana,
                        dan juga karena svelte adalah framework baru dibandingkan framework lain seperti angular atau vue.
                        Namun svelte juga mengabstraksi banyak fungsi / kode yang bisa membuatnya berasa seperti magic, dan tidak begitu cocok untuk beginner
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
                    src="/habitclone-screenshot.webp"
                    width={1517}
                    height={576}
                    alt="AE-timeline.webp"
                    className="h-100"
                    />
                    <Image 
                    src="/new-routine-ss.webp"
                    width={1526}
                    height={1022}
                    alt="AE-timeline.webp"
                    className="h-100"
                    />
                    <Image 
                    src="/del-routine-ss.webp"
                    width={1522}
                    height={1019}
                    alt="AE-timeline.webp"
                    className="h-100"
                    />
                    <Image 
                    src="/smiley.svg"
                    width={300}
                    height={200}
                    alt="AE-timeline.webp"
                    className="h-100"
                    />
                </motion.div>
                </div>
                

            </div>

            {/* tutorly */}
            <div className='max-w-2xl mt-15 mx-auto min-w-20'>
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
                {/* pictures slide */}
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
                        src="/tutorly/tutorly-main.webp"
                        width={600}
                        height={200}
                        alt="AE-timeline.webp"
                        className="h-100"
                        />
                        <Image 
                        src="/tutorly/profil.webp"
                        width={660}
                        height={200}
                        alt="AE-timeline.webp"
                        className="h-100"
                        />
                        <Image 
                        src="/tutorly/login.webp"
                        width={319}
                        height={200}
                        alt="AE-timeline.webp"
                        className="h-100"
                        />
                        <Image 
                        src="/tutorly/chat.webp"
                        width={454}
                        height={200}
                        alt="AE-timeline.webp"
                        className="h-100"
                        />
                    </motion.div>
                </div>
            </div>
            {/* air alam */}
            <div className="mx-auto max-w-2xl mt-25">
                <h2 className="text-2xl font-bold  text-main-red">Website Air Alam</h2>
                <hr className="mb-4 border-clickable "/>

                <div className="flex flex-row justify-content-between w-full">
                    <span>
                    <p>
                        Website air mineral 'Air Alam' yang dibuat secara berkelompok untuk memenuhi tugas akhir mata kuliah
                        kewirausahaan. Role saya di kelompok ini adalah sebagai backend dan frontend developer, di sisi frontend 
                        saya tidak berkontribusi banyak karena design dan tampilan web nya sudah dibuat oleh teman saya di figma,
                        saya hanya mengkonversikan design figma ke code. 
                        Kontribusi terbanyak saya ada di backend terutama di bagian payment menggunakan midtrans namun implementasinya 
                        menggunakan sandbox sehingga transaksi tidak benar - benar terjadi.
                        Ini juga merupakan projek kedua saya yang menggunakan NextJS dan React, kita memilih stack ini karena kita memerlukan
                        fitur payment, saya yang mengajukan stack ini ke kelompok saya karena menurut saya tidak ada alternatif lain yang lebih bagus.


                    </p>
                    </span>
                    
                    <div className="ml-9">
                    <h3 className="mb-3">Tools</h3>
                    <ul className="list-disc">
                        <li>Next JS</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Midtrans</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="min-w-screen bg-main-red min-h-[200px] py-4 mt-4 mb-10">
                {/* pictures slide */}
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
                        src="/air_alam/home.webp"
                        width={1350}
                        height={874}
                        alt="home.webp"
                        className="h-100"
                        />
                        <Image 
                        src="/air_alam/products.webp"
                        width={600}
                        height={200}
                        alt="products.webp"
                        className="h-100"
                        />
                        <Image 
                        src="/air_alam/product_2.webp"
                        width={600}
                        height={200}
                        alt="product_2.webp"
                        className="h-100"
                        />
                        <Image 
                        src="/air_alam/cart.webp"
                        width={600}
                        height={200}
                        alt="cart.webp"
                        className="h-100"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}