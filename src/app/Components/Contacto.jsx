import React from "react";
import ContentSection from "./ContentSection";
import Image from "next/image";
import JossImage from "../../../public/joss-portada.webp";
import Title2 from "./Title2";

export default function Contacto() {
  return (
    <ContentSection SectionId={"contacto"}>
      <Title2 Class="mb-10 pt-20" />
      <article className="flex flex-col xl:flex-row gap-10 justify-center items-center">
        <Image
          src={JossImage}
          alt="Joss contacto"
          className="lg:size-[600px] xl:size-[500px] object-cover rounded-[12px]"
        />
        <form className="flex flex-col gap-3 text-[#000000] w-full lg:w-[600px] xl:w-[360px] [&>input]:rounded-[12px] [&>input]:text-xl [&>input]:h-12 [&>input]:p-4 [&>textarea]:h-52 [&>textarea]:p-4 [&>textarea]:text-xl [&>textarea]:rounded-[12px]">
          <input className="placeholder-[#5d3427] text-[#5d3427]" required type="text" placeholder="Nombre *"/>
          <input className="placeholder-[#5d3427] text-[#5d3427]" required type="email" placeholder="Correo electrónico *"/>
          <input className="placeholder-[#5d3427] text-[#5d3427]" required type="tel" placeholder="Número de teléfono"/>
          <textarea className="placeholder-[#5d3427] text-[#5d3427]" required  placeholder="Cuerpo del mensaje *"/>
          <button className="bg-[#5d3427] rounded-[12px] uppercase tracking-widest text-[#ffffff] xl:hover:bg-[#ffffff] xl:hover:text-[#5d3427] w-fit px-8 py-4 text-xl " type="submit">Enviar</button>
        </form>
      </article>
    </ContentSection>
  );
}
