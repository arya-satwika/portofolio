import Image from "next/image"

export default function hobbiesPage(){
    return(
        <div>
            <div className="mx-30 mt-15 font-bold text-4xl">
                My Hobbies
            </div>
            <div className="h-200 w-[50px] hover:w-[400px] bg-main-red text-center hover:h-50 object-cover transition-all duration-500 mx-30">
            </div>
        </div>
    
    )
}