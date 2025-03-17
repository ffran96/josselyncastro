"use client";
import React, { useEffect, useState } from "react";
import "photoswipe/style.css";
import ContentSection from "./ContentSection";
import Videos from "../data/Videobook";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselSelector from "./CarouselSelector";
import Title2 from "./Title2";
import VideoModal from "./VideoModal";
import Image from "next/image";

export default function NewVideoBook() {
  // Contador de items carrousel
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

  // Estado del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({ id: "", title: "" });

  // Función para abrir el modal con el video seleccionado
  const openModal = (id, title) => {
    setSelectedVideo({ id, title });
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => setModalIsOpen(false);

  const Basis = "md:basis-auto";

  return (
    <ContentSection SectionId="video-book">
      <Title2 Class="pt-20 mb-3">Videobook</Title2>
      <article>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="gap-4">
            {Videos.map(({ title, preview, yt }) => (
              <CarouselItem
                key={title}
                onClick={() => openModal(yt, title)} // Ahora pasa el video correcto
                className={`${Basis} group flex cursor-pointer size-[365px] relative`}
              >
                <Image
                  src={preview}
                  alt=""
                  className="size-[365px] absolute rounded-[12px]"
                />
                <h3
                  className="absolute inset-0 flex items-center justify-center text-xl text-center text-white rounded-[12px] scale-100 xl:group-hover:scale-100 xl:group-hover:backdrop-blur-md xl:scale-0 transition-all ease-in-out duration-100 ml-4 w-full"
                >
                  {title}
                </h3>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:inline-flex absolute bottom-0 left-5 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
          <CarouselNext className="hidden xl:inline-flex absolute bottom-0 right-5 size-14 hover:bg-[#5d3427] hover:border-[#ffffff13] hover:text-[#ffffffe7] transition-colors ease-in-out duration-300" />
        </Carousel>
        <CarouselSelector Array={Videos} CurrentCard={current} />
      </article>

      {/* Modal con el video seleccionado */}
      <VideoModal
        id={selectedVideo.id}
        title={selectedVideo.title}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </ContentSection>
  );
}
