import Image from "next/image"

type contentGridProps = {
  children?: React.ReactNode;
  className?: string;
  images: { src: string, alt: string, width: number }[];
  title: string;
}

export function ContentGrid({children, className, images, title}: contentGridProps){
  return (
    <div className={`flex flex-col m-6 bg-card-background p-4 rounded-2xl inset-shadow-md ${className}`}>
      <div>
      <h1 className="ml-4 font-bold text-2xl text-gray-200">{title}</h1>
      <hr className="border-solid border-0.2 mx-2 mt-2 mb-6 rounded-lg"/>
      </div>
      <div className={"flex flex-row justify-content-between gap-3"}>
        <div className="grid grid-cols-1 gap-4 bg-card-foreground backdrop:blur-sm p-3 min-w-80 rounded-2xl inset-shadow-sm inset-shadow-red-100/45">
          {images.map((image) => (
            <Image key={image.src} src={image.src} width={image.width} height={image.width} className="rounded-3xl" alt={image.alt} />
          ))}
        </div>
        <div className="text-pretty ml-8">
          {children}
        </div>
      </div>
    </div>
  )
}