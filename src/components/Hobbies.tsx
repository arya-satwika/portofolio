"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export type hobbiesProps ={
  className?: string;
  contents:  {
    title: string;
    description: string;
    image: { src: string, alt: string, width: number };
  }[]
}

function dots(){
  return(
    <div className="w-50">
    </div>
  )
}

export function Hobbies({ className, contents }: hobbiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prev) =>
      prev === contents.length - 1 ? 0 : prev + 1
    );
  }

  function handlePrev() {
    setCurrentIndex((prev) =>
      prev === 0 ? contents.length - 1 : prev - 1
    );
  }

  const currentContent = contents[currentIndex];

  return (
    <div className={`relative max-w-full ${className}`}>
      <h1 className="mb-4 text-3xl font-bold">Hobbies</h1>

      <div className="flex flex-row overflow-hidden h-fit">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="flex flex-row"
          >
            <div className="h-[500px]">
            </div>
            <div className="mr-8">
              <h2 className="text-2xl text-main-red mb-2">
                {currentContent.title}
              </h2>
              <p className="text-white text-xl">
                {currentContent.description}
              </p>
            </div>
              <Image
                src={currentContent.image.src}
                width={currentContent.image.width}
                height={currentContent.image.width}
                alt={currentContent.image.alt}
                className="rounded-2xl max-w-[500px] min-w-[500px] h-[500px] object-cover "
              />

          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Pagination className="flex flex-row gap-3">
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={handlePrev} className="hover:bg-clickable hover:text-gray-100"/>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="hover:bg-white/0 hover:text-white cursor-default">{currentIndex + 1} / {contents.length}</PaginationLink>
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={handleNext} className="hover:bg-clickable hover:text-gray-100"/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}