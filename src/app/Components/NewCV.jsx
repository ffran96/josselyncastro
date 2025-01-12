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

  const Basis = "md:basis-auto"
  const TimelineWidth = "w-[375px]"
  return (
    <ContentSection SectionId={"cv"}>
      <div className="flex gap-3 items-baseline text-3xl">
        <h2 className="mt-32 font-semibold mb-8">Curriculum</h2>
        <a href="./CV.pdf " target="_blank" className="xl:cursor-pointer">
          <FontAwesomeIcon icon={faFileArrowDown} />
        </a>
      </div>
      <Carousel
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
    </ContentSection>
  );
}
