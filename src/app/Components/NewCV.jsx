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
import Timeline from "./Timeline";
import Curriculum from "../data/CV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

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
  return (
    <section id={"cv"} className="lg:max-w-7xl mx-auto">
      <div className="flex gap-3 items-baseline text-3xl">
        <h2 className="mt-32 font-semibold mb-8">Curriculum</h2>
        <a href="./CV.pdf " target="_blank" className="xl:cursor-pointer">
          <FontAwesomeIcon icon={faFileArrowDown} />
        </a>
      </div>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent id={CVID} className="">
          <CarouselItem className="basis-2/3 md:basis-auto">
            <Card Height={"h-[696px]"} Title={"Formacion"}>
              <Timeline 
                Width={"w-[450px]"} 
                Competencia={Formacion} />
            </Card>
          </CarouselItem>

          <CarouselItem className="basis-2/3 md:basis-auto">
            <Card Height={"h-[696px]"} Title={"Experiencia!"}>
              <Timeline 
                Width={"w-[450px]"} 
                Competencia={Experiencia} />
            </Card>
          </CarouselItem>

          <CarouselItem className="basis-2/3 md:basis-auto">
            <Card Height={"h-[260px]"} Title={"Idiomas"}>
              <Timeline 
                Width={"w-52"} 
                Competencia={Idiomas} />
            </Card>
            <div className="h-5" />
            <Card Height={"h-[416px]"} Title={"Habilidades"}>
              <Timeline 
                Width={"w-52"} 
                Competencia={Habilidades} />
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
