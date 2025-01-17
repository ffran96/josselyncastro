"use client";
import React, { useEffect } from "react";
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
import { Button } from "@/components/ui/button";

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

  const Basis = "md:basis-auto";
  const TimelineWidth = "w-[375px]";
  return (
    <ContentSection SectionId={"cv"}>
      <div className="pt-32 flex flex-col  md:flex-row justify-between gap-2 items-stretch mb-8">
        <h2 className=" font-semibold  text-5xl tracking-wider">CURRICULUM</h2>
        <a href="./CV.pdf " target="_blank">
          <Button
            className="bg-[#5d3427] rounded-2xl tracking-widest border-none md:hover:text-[#5d3427] md:hover:bg-[#ffffff] font-semibold"
            variant="outline"
          >
            DESCARGAR CV
          </Button>
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
        <ul className="flex gap-3 justify-center items-center">
          <li
            className={`${
              current == 1
                ? "w-[10px] h-[10px] bg-[#d5d5d5bc]"
                : "w-2 h-2 bg-[#d5d5d5]"
            } rounded-full transition-all ease-linear`}
          ></li>
          <li
            className={`${
              current == 2
                ? "w-[10px] h-[10px] bg-[#d5d5d5bc]"
                : "w-2 h-2 bg-[#d5d5d5]"
            } rounded-full transition-all ease-linear`}
          ></li>
          <li
            className={`${
              current == 3
                ? "w-[10px] h-[10px] bg-[#d5d5d5bc]"
                : "w-2 h-2 bg-[#d5d5d5]"
            } rounded-full transition-all ease-linear`}
          ></li>
        </ul>
      </div>
    </ContentSection>
  );
}
