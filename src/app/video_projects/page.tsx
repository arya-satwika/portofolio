import Image from "next/image"

export default function hobbiesPage(){
    return(
        <div>
            <div className="mx-30 mt-15 font-bold text-4xl">
                My Hobbies
            </div>
            <div className="mx-30 mt-15">
                <h1
                className="font-bold text-2xl text-main-red"
                >Gaming</h1>
                <div className="w-fit h-fit">
                    <Image 
                    src="/3x.gif"
                    alt="Gaming Image" 
                    width={2000} 
                    height={1920} 
                    className="rounded-2xl w-100 object-cover" 
                    />
                </div>
            </div>
        </div>
    
    )
}