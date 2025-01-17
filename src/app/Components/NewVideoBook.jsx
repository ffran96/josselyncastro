"use client";
import React, { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import ContentSection from "./ContentSection";
import Video from "./Video";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function NewVideoBook() {
  const VIDEOBOOKID = "Video book";
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + VIDEOBOOKID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  const Basis = "md:basis-auto";
  return (
    <ContentSection SectionId={"video-book"}>
      <h2 className="text-5xl pt-20 mb-5">Videobook</h2>
      <article>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent id={VIDEOBOOKID} className="">
            <CarouselItem className={Basis}>
              <Video Source="spot-mercadona.mp4" />
            </CarouselItem>
            <CarouselItem className={Basis}>
              <Video Source="historia-de-un-matrimonio.mp4" />
            </CarouselItem>
            <CarouselItem className={Basis}>
              <Video Source="la-gaviota.mp4" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:inline-flex absolute bottom-0 left-20 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
          <CarouselNext className="hidden lg:inline-flex absolute bottom-0 right-20 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
        </Carousel>
      </article>
    </ContentSection>
  );
}
