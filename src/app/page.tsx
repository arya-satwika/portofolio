import { Hobbies } from "@/components/Hobbies";
import { ContentGrid } from "@/components/ContentGrid";
import Image from "next/image";


export default function Home() {
  return (
    <>
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
        <ContentGrid
          images={[
            { src: "/habitclone-screenshot.png", alt: "Habit Clone Screenshot", width: 400 },
            { src: "/tutorly/tutorly-main.png", alt: "Tutorly Main Screenshot", width: 400 }
          ]}
          title="Projects"
          className="max-w-310"
        >
          <ul className="list-disc">
            <li>
              <strong className="text-lg">Habit Clone</strong>: Aplikasi berbasis web untuk melacak rutinitas harian, 
              dibangun dengan Svelte dan NeonDB. Projek pribadi pertama saya, dan projek web fullstack pertama saya. 
              Alasan saya menggunakan Svelte adalah sintaks yang sederhan dibandingkan react, dan karena ia 
              framework baru yang sedang naik daun.
            </li>
            <li>
              <strong className="text-lg">Tutorly</strong>: Platform untuk membantu mahasiswa mencari tutor privat,
              dibangung dengan Python dan CustomTKInter sebagai GUI. Merupakan Projek Ujian Akhir Semester mata kuliah 
              Pemrograman Berorientasi Obyek dan merupakan projek GUI pertama saya.
            </li>
          </ul>
          <a 
          href="projects"
          className="mt-6 inline-block transition-all ease-in-out text-clickable  hover:text-clickable-hover"
          >Read More...</a>
        </ContentGrid>
      </div>
      <Hobbies 
        className="mx-40 my-10 inset-0 static z-40" 
        contents={[
          {
            title: "Gaming",
            description: "Saya suka bermain game, terutama game kompetitif FPS seperti Valorant, The Finals." + 
            "Saya juga menikmati game open-world yang slow paced seperti Legend of Zelda: Breath of the wild, " + 
            "Spider-man 1 dan 2, dan terkadang bermain game multiplayer bersama teman-temanku",
            image: { src: "/games-1.png", alt: "Gaming Image", width: 1170, height: 1572 }
          },
          {
            title: "Editing Video",
            description: "Saya suka mengedit video, seperti video pendek untuk Instagram atau TikTok, menggunakan" + 
            " Adobe After Effects dan Davinci Resolve, mulai video editing karena ingin membuat konten youtube," +
            " ternyata tidak semudah itu membuat konten youtube yang ingin ditonton orang orang, sekarang hanya" +
            " mengedit karena iseng aja, dan saya suka melihat animasi yang smooth dan keren.",
            image: { src: "/AE-timeline.png", alt: "Editing Video Image", width: 1405, height: 1025 }
          },
          {
            title: "Music",
            description: "Saya senang mendengarkan musik, terutama genre hip-hop dan lagu 2000-an. Beberapa artis favorit saya adalah Tyler, The Creator," +
            "Kendrick Lamar, Foxy Shazam, Lilas / YOASOBI. Belakangan ini saya mendapatkan lagu baru dari menonton film dan series yang dibuat oleh James Gunn, Director"+
            " yang selalu memasukkan lagu-lagu keren ke dalam filmnya dan selalu membuat saya menambah playlist saya.",
            image: { src: "/musics-tiles.png", alt: "Music Image", width: 1000, height: 1000}
          }
        ]}
      />
      </div>
      </>
  )

}
