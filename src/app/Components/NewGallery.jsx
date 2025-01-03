"use client";
import React, { useEffect } from "react";
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
  return (
    <section id="book" className="lg:max-w-7xl mx-auto">
      <h2 className=" pt-32 pb-8 text-3xl font-semibold mb-2 px-3 lg:px-0">
        Book
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent id={galleryID} className="">
          {GalleryImages.map(
            ({ largeURL, width, height, thumbnailURL, altThumbnail }) => (
              <CarouselItem key={largeURL} className="basis-2/3 md:basis-auto">
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
                      width: "500px",
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
    </section>
  );
}
