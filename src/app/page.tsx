import nextConfig from '../../next.config';

import { Hobbies } from "@/components/Hobbies";

type contentGridProps = {
  children?: React.ReactNode;
  className?: string;
  images: { src: string, alt: string, width: number }[];
  title: string;
}



export function Header({ className }: { className?: string }){
  return(
    <div className={` flex justify-between p-2 bg-gray-200 max-h-20 w-screen ${className}`}>
      <div className="flex gap-2 items-center">
      <img src="tempLogo.svg" width={20} alt="" />
      <span className="nav-text pt-1 underline">
        <a href="About" >About</a>
      </span>
      </div>
      <span className="nav-text">
        <div><img src="/github.svg" alt="" width={20} /></div>
      </span>
    </div>
  )
}

export function ContentGrid({children, className, images, title}: contentGridProps){
  return (
    <div className={`flex flex-col m-6 bg-card-background p-4 max-w-240 rounded-2xl inset-shadow-md ${className}`}>
      <div>
      <h1 className="ml-4 font-bold text-2xl text-gray-200">{title}</h1>
      <hr className="border-solid border-0.2 mx-2 mt-2 mb-6 rounded-lg"/>
      </div>
      <div className={"flex flex-row justify-content-between gap-3"}>
        <div className="grid grid-cols-1 gap-4 bg-card-foreground backdrop:blur-sm p-3 min-w-80 rounded-2xl inset-shadow-sm inset-shadow-red-100/45">
          {images.map((image) => (
            <img key={image.src} src={image.src} width={image.width} className="rounded-3xl" alt={image.alt} />
          ))}
        </div>
        <div className="text-pretty ml-8">
          {children}
        </div>
      </div>
    </div>
  )
}





export default function Home() {
  return (
    <>
    <Header className="sticky top-0"/>
    <div className="min-h-full min-w-screen bg-linear-to-tr from-gradient-start to-gradient-end ">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center font-bold m-3">Hi, im 
          <span className="text-main-red"> Arya Satwika</span>
        </h1>
        <p className="text-center">
          Saya adalah mahasiswa Teknik Informatika UNESA angkatan 2024
          <br />Cinta teknologi dan pengembangan perangkat lunak.
          <br />suka chindo fineshyt, gaming dan ngoding ingin menjadi orang kaya ramah
        </p>
        <hr className="text-gray-300 border-solid border-0.2 m-5 min-w-300 rounded-lg"/>
        <ContentGrid
          images={[
            { src: "habitclone-screenshot.png", alt: "Habit Clone Screenshot", width: 400 },
            { src: "tutorly-main.png", alt: "Tutorly Main Screenshot", width: 400 }
          ]}
          title="Projects"
        >
          <ul className="list-disc">
            <li>
              <strong className="text-lg">Habit Clone</strong>: Aplikasi berbasis web untuk melacak rutinitas harian, dibangun dengan Svelte dan NeonDB.
              Projek pribadi pertama saya, dan projek web fullstack pertama saya. Alasan saya menggunakan Svelte adalah sintaks yang sederhan dibandingkan react, 
              dan karena ia framework baru yang sedang naik daun.
            </li>
            <li>
              <strong className="text-lg">Tutorly</strong>: Platform untuk membantu mahasiswa mencari tutor privat, dibangung dengan Python dan CustomTKInter sebagai GUI.
              Merupakan Projek Ujian Akhir Semester mata kuliah Pemrograman Berorientasi Obyek dan merupakan projek GUI pertama saya.
            </li>
          </ul>
          <a href="About" className="mt-6 inline-block transition-all ease-in-out text-clickable  hover:text-clickable-hover">Read More...</a>
        </ContentGrid>
      </div>
      <Hobbies 
        className="mx-40 inset-0 static z-40" 
        contents={[
          {
            title: "Gaming",
            description: "Saya suka bermain game, terutama game bergenre RPG dan strategi. Beberapa game favorit saya termasuk The Witcher 3, Civilization VI, dan Stardew Valley. Saya menikmati aspek cerita yang mendalam serta tantangan strategis yang ditawarkan oleh game-game tersebut.",
            image: { src: "edit-1.png", alt: "Gaming Image", width: 400 }
          },
          {
            title: "Gaming",
            description: "Saya suka bermain game, terutama game bergenre RPG dan strategi. Beberapa game favorit saya termasuk The Witcher 3, Civilization VI, dan Stardew Valley. Saya menikmati aspek cerita yang mendalam serta tantangan strategis yang ditawarkan oleh game-game tersebut.",
            image: { src: "edit-1.png", alt: "Gaming Image", width: 400 }
          }
        ]}
      />
      </div>
      </>
  )

}
