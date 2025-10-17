import Image from "next/image";
import nextConfig from '../../next.config';

export function Header(){
  return(
    <div className=" flex justify-between p-2 bg-gray-200">
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

export function ContentGrid(){
  return (
    <div>
      <div className="flex flex-row justify-content-between m-6 gap-3 bg-gray-500 p-3 rounded-2xl">
        <div className="grid grid-cols-2 gap-1 bg-gray-700 p-3 rounded-2xl">
          <p>one</p>
          <p>two</p>
          <p>three</p>
        </div>
        <div>
          <p>Things i have worked one includes a SvelteKit App bla lasdasdad</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
    <Header />
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center font-bold m-3">Hi, im 
        <span className="text-purple-800"> Arya Satwika</span>
      </h1>
      <p className="text-center">
        Saya adalah mahasiswa Teknik Informatika UNESA angkatan 2024
        <br />Cinta teknologi dan pengembangan perangkat lunak.
        <br />suka chindo fineshyt, gaming dan ngoding ingin menjadi orang kaya ramah
      </p>
      <ContentGrid />
    </div>
    </div>
  )

}
