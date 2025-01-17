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
    <ContentSection>
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
              <Video Source="spot-mercadona.mp4" Autoplay={true} />
            </CarouselItem>
            <CarouselItem className={Basis}>
              <Video Source="historia-de-un-matrimonio.mp4" Autoplay={false} />
            </CarouselItem>
            <CarouselItem className={Basis}>
              <Video Source="la-gaviota.mp4" Autoplay={false} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </article>
    </ContentSection>
  );
}
