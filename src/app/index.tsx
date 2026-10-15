import { ContentGrid } from "@/components/ContentGrid";
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'

export const Route = createFileRoute('/')({
  component: Home,
})


function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className='type-content'>
          <p className="text-sm sm:text-base">
            i am an aspiring developer, currently a student at Universitas Negeri Surabaya. 
            making software to solve my personal issues & problems, while trying to learn as much as i can.
            lately i've been diving into the linux ricing community and customizing my linux environment
          </p>
        </div>
        {/* <hr className="text-gray-300 border-solid border-0.2 m-5 min-w-300 rounded-lg"/> */}
        <div className="mt-4 mx-auto grid w-full max-w-2xl lg:max-w-4xl grid-cols-2 lg:grid-cols-4 bg-accent-foreground/10 gap-1 sm:gap-1.5 lg:gap-0.5 p-1 sm:p-1.5 lg:p-0.5">
          <ContentGrid
            image={
              { src: "/video_projects/ngomen-snippet.gif", alt: "gambesmania", width: 1280, height: 720 }
            }
            title="Ngomen Intro Graphics"
            className="w-full"
            description="Intro graphics for UNAIR's Management Faculty's podcast 'NGO-MEN'"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/video_projects/gambes-mania.gif", alt: "gambesmania", width: 1280, height: 720 }
            }
            title="Gambesmania Title Card"
            className="w-full"
            description="Gambesmania Title card i made when i became a member of their creative design team"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/video_projects/bf-gf_2.webp", alt: "boyfriend girlfriend", width: 2000, height: 1920 }
            }
            title="Boyfriend Girlfriend"
            className="w-full"
            description="an edit i made for fun because the ATSV movie was SOO good!"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/video_projects/sebu-snippet_2.webp", alt: "uprak seni budaya", width: 1080, height: 1300 }
            }
            title="Uprak Seni Budaya"
            className="w-full"
            description="wanted to do a BTS short movie of my class' performance, but i made an edit instead!"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/tutorly/history.webp", alt: "tutorly", width: 702, height: 832 }
            }
            title="Tutorly"
            link="https://github.com/arya-satwika/tutorly"
            className="w-full"
            description="a desktop app i made with python and customtkinter for the Final project of my OOP class"
            >
          </ContentGrid>
          <ContentGrid
            image={{
              src: "/habitclone-screenshot.webp", alt: "Habit Clone Screenshot", width: 1517, height: 576,
            }}
            title="HabitClone"
            link="https://github.com/arya-satwika/habit-clone"
            description="first web based project i made, definetly learned alot about databases and APIs"
            className="w-full"
          >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/air-alam.webp", alt: "website air alam", width: 1008, height: 1008 }
            }
            title="Air Alam Website"
            link="https://github.com/arya-satwika/air-alam-website"
            className="w-full"
            description="third web based project, first one that used a payment gateway, used midtrans for it, had a lot of headaches implementing it"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/paper-scanner.webp", alt: "paper scanner", width: 731, height: 731 }
            }
            title="Paper Scanner"
            link="https://github.com/arya-satwika/paper-scanner"
            className="w-full"
            description="basically camscanner but i made it with python and opencv and its not as good"
            >
          </ContentGrid>
        </div>
      </div>
  </div>
  )

}
