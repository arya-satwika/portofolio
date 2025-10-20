import Image from "next/image"

export default function hobbiesPage(){
    return(
        <div>
            <div className="mx-30 mt-15 font-bold text-4xl">
                Videos Ive Made
            </div>
            <div className="grid grid-cols-3">
                <Image
                src="/video_projects/bf-gf.gif"
                width={2000}
                height={1920}
                alt="bf-gf"
                />
                <Image
                src="/video_projects/gambes-mania.gif"
                width={1280}
                height={720}
                alt="gambes-mania"
                />
            </div>
        </div>
    
    )
}