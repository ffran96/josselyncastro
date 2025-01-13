"use client";
import React, { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GalleryImages from "../data/images";
import Image from "next/image";
import ContentSection from "./ContentSection";

export default function NewGallery() {
  const galleryID = "gallery";
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <ContentSection SectionId="book">
      <h2 className="pt-32 pb-8 text-3xl font-semibold mb-2 px-3 lg:px-0">
        Book
      </h2>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent id={galleryID} className="">
          {GalleryImages.map(
            ({ largeURL, width, height, thumbnailURL, altThumbnail }) => (
              <CarouselItem key={largeURL} className="md:basis-auto">
                <a
                  className="group xl:hover:z-10 xl:hover:scale-105  xl:transition-all relative"
                  href={largeURL}
                  data-pswp-width={width}
                  data-pswp-height={height}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={thumbnailURL}
                    quality={100}
                    style={{
                      width: "415px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                    alt={altThumbnail}
                    loading="lazy"
                  />
                </a>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:inline-flex absolute bottom-0 left-20 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
        <CarouselNext className="hidden lg:inline-flex absolute bottom-0 right-20 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
      </Carousel>
      <div className="flex justify-center items-center mt-4">
        <ul className="flex gap-4 justify-center items-center">
          <li className={`${current==1 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==2 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==3 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==4 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==5 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==6 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==7 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==8 ? "w-[10px] h-[10px] bg-[#5d3427]" : "w-2 h-2 bg-[#ffffffeb]"} rounded-full transition-all ease-linear`}></li>
        </ul>
      </div>
    </ContentSection>
  );
}
