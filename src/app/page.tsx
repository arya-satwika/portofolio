import Image from "next/image";
import nextConfig from '../../next.config';

type contentGridProps = {
  children?: React.ReactNode;
  className?: string;
  images?: { src: string, alt: string, width: number }[];
}

export function Header({ className }: { className?: string }){
  return(
    <div className={` flex justify-between p-2 bg-gray-200 max-h-20 ${className}`}>
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

export function ContentGrid({children, className, images}: contentGridProps){
  return (
      <div className={`flex flex-row justify-content-between m-6 gap-3 bg-card-background p-4 max-w-240 rounded-2xl inset-shadow-md ${className}`}>
        <div className="grid grid-cols-1 gap-4 bg-card-foreground backdrop:blur-sm p-3 min-w-80 rounded-2xl inset-shadow-sm inset-shadow-red-100/45">
          {images?.map((image) => (
            <img key={image.src} src={image.src} width={image.width} className="rounded-3xl" alt={image.alt} />
          ))}
        </div>
        <div className="text-pretty ml-8">
          {children}
        </div>
      </div>
  )
}



export default function Home() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 min-h-screen min-w-screen bg-linear-to-tr from-gradient-start to-gradient-end z-0"/>
      {/* <img src="bg-dots.png" className="absolute inset-0 pointer-events-none z-10 brightness-10" alt="" /> */}
      <div className="absolute inset-0 z-20">
      <Header />
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
        <h1 className="mt-10 text-2xl font-bold">Portofolio</h1>
        <ContentGrid
          images={[
            { src: "habitclone-screenshot.png", alt: "Habit Clone Screenshot", width: 400 },
            { src: "tutorly-main.png", alt: "Tutorly Main Screenshot", width: 400 }
          ]}
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
        <h1 className="text-2xl font-bold">Hobbies</h1>
        <ContentGrid
          images={[
            { src: "gaming-setup.jpg", alt: "Gaming Setup", width: 400 },
          ]}
        >
          <ul className="list-disc">
            <li>
              <strong className="text-lg">Gaming Setup</strong>: Deskripsi tentang setup gaming saya, termasuk perangkat keras dan perangkat lunak yang digunakan.
            </li>
          </ul>
        </ContentGrid>
      </div>
      </div>
    </div>
  )

}
