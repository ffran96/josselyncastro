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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
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
      <div className="flex gap-3 items-baseline text-3xl">
        <h2 className="mt-32 font-semibold mb-8">Curriculum</h2>
        <a href="./CV.pdf " target="_blank" className="xl:cursor-pointer">
          <FontAwesomeIcon icon={faFileArrowDown} />
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
        <ul className="flex gap-3 justify-center items-center bg-[#ffffffd6] rounded-xl h-5 w-20">
          <li className={`${current==1 ? "w-[11px] h-[11px] bg-[#5d3427]" : "w-2 h-2 bg-[#5d3427f6]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==2 ? "w-[11px] h-[11px] bg-[#5d3427]" : "w-2 h-2 bg-[#5d3427f6]"} rounded-full transition-all ease-linear`}></li>
          <li className={`${current==3 ? "w-[11px] h-[11px] bg-[#5d3427]" : "w-2 h-2 bg-[#5d3427f6]"} rounded-full transition-all ease-linear`}></li>
        </ul>
      </div>
    </ContentSection>
  );
}
