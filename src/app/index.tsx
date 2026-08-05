import { Hobbies } from "@/components/Hobbies";
import { ContentGrid } from "@/components/ContentGrid";
import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'

export const Route = createFileRoute('/')({
  component: Home,
})


function Home() {
  return (
    <div className="min-h-full min-w-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-row mt-6 items-center mx-35">
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
          </div>
          <Image src="/headshot.webp" width={1000} height={1000} alt="" className='row-span-2 place-self-start w-[450px]'/>
        </div>
        {/* <hr className="text-gray-300 border-solid border-0.2 m-5 min-w-300 rounded-lg"/> */}
        <div className="mt-4 grid grid-rows-2 grid-cols-4 bg-accent-foreground/22 p-[2px] gap-[2px]">
          <ContentGrid
            image={
              { src: "/video_projects/ngomen-snippet.gif", alt: "gambesmania", width: 1280, height: 720 }
            }
            title="Intro Ngomen"
            className="max-w-310"
            description="Intro video yang saya buat untuk teman saya dari HIMA Manajemen UNAIR, Ngomen."
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/video_projects/gambes-mania.gif", alt: "gambesmania", width: 1280, height: 720 }
            }
            title="Title Card Gambesmania"
            className="max-w-310"
            description="Title card yang saya buat ketika bergabung dengan video and design team gambesmania"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/video_projects/bf-gf.gif", alt: "boyfriend girlfriend", width: 1280, height: 720 }
            }
            title="Boyfriend Girlfriend"
            className="max-w-310"
            description="tiktok / instagram edit i made for fun because the ATSV movie was so good"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/video_projects/sebu-snippet.gif", alt: "uprak seni budaya", width: 1280, height: 720 }
            }
            title="Uprak Seni Budaya"
            className="max-w-310"
            description="tiktok / instagram edit i made with the extra BTS footage i shot"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/tutorly/history.webp", alt: "tutorly", width: 1280, height: 720 }
            }
            title="Tutorly"
            className="max-w-310"
            description="Projek akhir mata kuliah pemrograman berbasis obyek. dibuat dengan python dan customtkinter"
            >
          </ContentGrid>
          <ContentGrid
            image={{
              src: "/habitclone-screenshot.webp",
              alt: "Habit Clone Screenshot",
              width: 1517,
              height: 576,
            }}
            title="HabitClone"
            description="A for fun project i made, tried to clone habitkit (android app). made with svelte and sveltekit"
            className="max-w-310"
          >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/air-alam.webp", alt: "website air alam", width: 1280, height: 720 }
            }
            title="Website Air Alam"
            className="max-w-310"
            description="projek akhir mata kuliah kewirausahaan, pertama kali menggunakan payment gateway midtrans"
            >
          </ContentGrid>
          <ContentGrid
            image={
              { src: "/paper-scanner.webp", alt: "paper scanner", width: 1280, height: 720 }
            }
            title="Paper Scanner"
            className="max-w-310"
            description="projek akhir mata kuliah pengolahan citra digital, dibuat menggunakan opencv dan python"
            >
          </ContentGrid>
        </div>
      </div>
      <Hobbies 
        className="mx-40 my-10 inset-0 static z-40" 
        contents={[
          {
            title: "Gaming",
            description: "Saya suka bermain game, terutama game kompetitif FPS seperti Valorant, The Finals." + 
            "Saya juga menikmati game open-world yang slow paced seperti Legend of Zelda: Breath of the wild, " + 
            "Spider-man 1 dan 2, dan terkadang bermain game multiplayer bersama teman-temanku",
            image: { src: "/games-1.webp", alt: "Gaming Image", width: 1170, height: 1572 }
          },
          {
            title: "Editing Video",
            description: "Saya suka mengedit video, seperti video pendek untuk Instagram atau TikTok, menggunakan" + 
            " Adobe After Effects dan Davinci Resolve, mulai video editing karena ingin membuat konten youtube," +
            " ternyata tidak semudah itu membuat konten youtube yang ingin ditonton orang orang, sekarang hanya" +
            " mengedit karena iseng aja, dan saya suka melihat animasi yang smooth dan keren.",
            image: { src: "/AE-timeline.webp", alt: "Editing Video Image", width: 1405, height: 1025 }
          },
          {
            title: "Music",
            description: "Saya senang mendengarkan musik, terutama genre hip-hop dan lagu 2000-an. Beberapa artis favorit saya adalah Tyler, The Creator," +
            "Kendrick Lamar, Foxy Shazam, Lilas / YOASOBI. Belakangan ini saya mendapatkan lagu baru dari menonton film dan series yang dibuat oleh James Gunn, Director"+
            " yang selalu memasukkan lagu-lagu keren ke dalam filmnya dan selalu membuat saya menambah playlist saya.",
            image: { src: "/musics-tiles.webp", alt: "Music Image", width: 1000, height: 1000}
          }
        ]}
      />
      </div>
  )

}
