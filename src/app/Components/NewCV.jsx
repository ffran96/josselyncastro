"use client";
import React, { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Timeline from "./Timeline";
import Curriculum from "../data/CV";
import Card from "./Card";
import ContentSection from "./ContentSection";

export default function NewCV() {
  const { Experiencia, Formacion, Idiomas, Habilidades } = Curriculum;
  const CVID = "Curriculum";
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + CVID,
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

  useEffect(() => {
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
  const TimelineWidth = "w-[375px]";
  return (
    <ContentSection SectionId={"cv"}>
      <div className="pt-32 flex flex-col  md:flex-row justify-between gap-2 mb-8">
        <h2 className=" font-semibold  text-5xl tracking-wider">CURRICULUM</h2>
        <a
          href="./CV.pdf "
          target="_blank"
          className="flex items-center justify-center bg-[#5d3427] max-w-fit py-3 px-4 rounded-3xl tracking-widest font-semibold text-sm xl:hover:text-[#5d3427] xl:hover:bg-[#ffffff] xl:transition-colors xl:ease-in-out xl:duration-300"
        >
          DESCARGAR CV
        </a>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent id={CVID} className="">
          <CarouselItem className={Basis}>
            <Card Height="h-[900px]" Title="Formacion">
              <Timeline Width={TimelineWidth} Competencia={Formacion} />
            </Card>
          </CarouselItem>
          <CarouselItem className={Basis}>
            <Card Height="h-[900px]" Title="Experiencia">
              <Timeline Width={TimelineWidth} Competencia={Experiencia} />
            </Card>
          </CarouselItem>

          <CarouselItem className={Basis}>
            <div className="flex flex-col gap-4">
              <Card Height="h-[442px]" Title="Idiomas">
                <Timeline Width={TimelineWidth} Competencia={Idiomas} />
              </Card>
              <Card Height="h-[442px]" Title="Habilidades">
                <Timeline Width={TimelineWidth} Competencia={Habilidades} />
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center items-center mt-4 md:hidden">
        <ul className="flex gap-2 justify-center items-center">
          <li
            className={`${
              current == 1 ? "w-3 h-3 bg-[#ffffff]" : "w-2 h-2 bg-[#b8b8b8]"
            } rounded-full transition-all ease-linear`}
          ></li>
          <li
            className={`${
              current == 2 ? "w-3 h-3 bg-[#ffffff]" : "w-2 h-2 bg-[#b8b8b8]"
            } rounded-full transition-all ease-linear`}
          ></li>
          <li
            className={`${
              current == 3 ? "w-3 h-3 bg-[#ffffff]" : "w-2 h-2 bg-[#b8b8b8]"
            } rounded-full transition-all ease-linear`}
          ></li>
        </ul>
      </div>
    </ContentSection>
  );
}
