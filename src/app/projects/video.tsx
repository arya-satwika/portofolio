import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { div } from 'motion/react-client'

export const Route = createFileRoute('/projects/video')({
  component: hobbiesPage,
  head: () =>({
    meta: [
        { title: "Video Projects | Arya Satwika" }
    ]
  })
})

function hobbiesPage(){
    return(
    <div className='max-w-250 mx-auto'>
        <div className="type-content mb-6 font-bold text-4xl">
            Videos I&apos;ve Made / Edited
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
            <div className="w-max bg-card-background p-4 rounded-3xl inset-shadow-md m-6">
                <div className="rounded-2xl size-70 overflow-hidden">
                    <Image
                    src="/video_projects/bf-gf_2.webp"
                    width={2000}
                    height={1920}
                    alt="bf-gf"
                    className="size-full object-cover"
                    />
                </div>
                <h2 className="font-bold text-main-red text-lg my-3">Boyfriend Girlfriend</h2>
                <p className="w-70">first AMV i made after 2 year long hiatus, was just really bored on week and wanted to edit them</p>
            </div>
            <div className="w-fit bg-card-background p-4 rounded-3xl inset-shadow-md m-6">
                <div className="overflow-hidden rounded-2xl w-70 h-70">
                    <Image
                    src="/video_projects/gambes-mania.gif"
                    width={1280}
                    height={720}
                    alt="gambes-mania"
                    className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="font-bold text-main-red text-lg my-3">Title Gambes Mania</h2>
                <p className="w-70">Title card i made for my high school's sports supporter group, went into it to meet new people and make cool stuff</p>
            </div>
            <div className="w-fit bg-card-background p-4 rounded-3xl inset-shadow-md m-6">
                <div className="rounded-2xl size-70 overflow-hidden">
                    <Image
                    src="/video_projects/sebu-snippet_2.webp"
                    width={720}
                    height={720}
                    alt="uprak-sebu"
                    className="size-full object-cover"
                    />
                </div>
                <h2 className="font-bold text-main-red text-lg my-3">Uprak Seni Budaya</h2>
                <p className="w-70">got the role of 'documentarian' for my class's art performance, shot these thinking i was gonna make a short film but i made this instead</p>
            </div>
        </div>

        <div className="max-w-2xl p-5 mt-5 mb-20 mx-auto bg-card-background rounded-2xl inset-shadow-md">
            <div className='h-89 rounded-full'>
            <iframe 
            width="854"
            height="440" 
            src="https://www.youtube.com/embed/s5L28fF9l2U" 
            title="Punya hobi? ubah jadi uang NGOMEN by HIMA S1 Manajemen Unair EPS.5" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            className="rounded-xl size-full"
            ></iframe>

            </div>
            <h2 className="font-bold text-lg text-main-red my-3">Episode Podcast Ngomen by HIMA Manajemen UNAIR</h2>
            <p className="">
                My friend was part of his major's organization and wanted my help editing and making a graphical intro. I said yes
                since i didnt think it would be a lot of work anyway plus i got nothing to do. Made the intro with After Effects and 
                edited the video with Davinci Resolve
            </p>
        </div>
    </div>
    )
}