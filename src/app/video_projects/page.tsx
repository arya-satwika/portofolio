import Image from "next/image"

export default function hobbiesPage(){
    return(
        <div className="flex flex-col justify-content-center mx-30">
            <div className="mt-15 font-bold text-4xl">
                Videos I've Made
            </div>
            <div className="grid grid-cols-3 justify-items-center">
                <div className="w-fit bg-card-background p-4 rounded-2xl inset-shadow-md m-6">
                    <div className="rounded-xl flex flex-row w-70 h-70 overflow-hidden object-cover text-center">
                        <Image
                        src="/video_projects/bf-gf.gif"
                        width={2000}
                        height={1920}
                        alt="bf-gf"
                        className="self-center scale-120"
                        />
                    </div>
                    <h2 className="font-bold text-main-red text-lg my-3">Boyfriend - Girlfriend</h2>
                    <p className="w-70">Dibuat di after effects, tipe video AMV tetapi klip diambil dari film Spider-Man Accros The Spider-verse</p>
                </div>
                <div className="w-fit bg-card-background p-4 rounded-2xl inset-shadow-md m-6">
                    <div className="object-cover overflow-hidden flex flex-row rounded-xl w-70 h-70">
                        <Image
                        src="/video_projects/gambes-mania.gif"
                        width={1280}
                        height={720}
                        alt="gambes-mania"
                        className="scale-180 self-center"
                        />
                    </div>
                    <h2 className="font-bold text-main-red text-lg my-3">Title Gambes Mania</h2>
                    <p className="w-70">Title Motion Graphics yang dibuat di after effects untuk tim supporter SMAN 15 Surabaya: GAMBESMANIA</p>
                </div>
                <div className="w-fit bg-card-background p-4 rounded-2xl inset-shadow-md m-6">
                    <div className="object-cover overflow-hidden flex flex-row rounded-xl w-70 h-70">
                        <Image
                        src="/video_projects/sebu-snippet.gif"
                        width={1280}
                        height={720}
                        alt="gambes-mania"
                        className="self-center"
                        />
                    </div>
                    <h2 className="font-bold text-main-red text-lg my-3">Uprak Seni Budaya</h2>
                    <p className="w-70">punya rekaman dokumentasi ujian praktik seni budaya dan bingung mau diapain, akhirnya saya bikin edit style AMV</p>
                </div>
            </div>
            <div className="flex flex-row justify-center my-10">
                <div className="w-fit p-5 bg-card-background rounded-2xl inset-shadow-md">
                
                <iframe 
                width="854"
                height="480" 
                src="https://www.youtube.com/embed/s5L28fF9l2U" 
                title="Punya hobi? ubah jadi uang NGOMEN by HIMA S1 Manajemen Unair EPS.5" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                className="rounded-xl"
                ></iframe>
                <h2 className="font-bold text-lg text-main-red my-3">Episode Podcast Ngomen by HIMA Manajemen UNAIR</h2>
                <p className="w-170">
                    Temen saya merupakan anggota HIMA S1 Manajemen Unair dan minta tolong kepada saya 
                    untuk mengedit video podcast, dan membuat intro. Di edit menggunakan Davinci Resolve dan After Effects untuk intronya.
                    </p>
                </div>
            </div>
        </div>
    
    )
}