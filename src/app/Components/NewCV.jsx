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
import Button from "./Button";
import MultiCard from "./MultiCard";
import CarouselSelector from "./CarouselSelector";

export default function NewCV() {
  const { Experiencia, Formacion, Competencia } = Curriculum;
  const { Idiomas, Habilidades } = Competencia;
  const CVArrayMap = [Formacion, Experiencia];
  const CVArraySelector = [Experiencia, Formacion, Competencia];
  const Basis = "md:basis-auto";
  const TimelineWidth = "w-[375px]";
  
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


  return (
    <ContentSection SectionId={"cv"}>
      <div className="pt-20 flex flex-col md:flex-row justify-between gap-2 mb-5">
        <h2 className=" font-semibold  text-5xl tracking-wider">CURRICULUM</h2>
        <Button Label="Descargar CV" Link="./CV.pdf" />
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent id={CVID}>
          {CVArrayMap.map(({ id, Competencia, Data }) => (
            <CarouselItem key={id} className={Basis}>
              <Card Height="h-[900px]" Title={Competencia}>
                <Timeline Width={TimelineWidth} Competencia={Data} />
              </Card>
            </CarouselItem>
          ))}
          <CarouselItem key={Competencia.id} className={Basis}>
            <MultiCard Idiomas={Idiomas.Data} Habilidades={Habilidades.Data} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <CarouselSelector Array={CVArraySelector} CurrentCard={current} />
    </ContentSection>
  );
}
