import React from "react";
import ContentSection from "./ContentSection";
import Underline from "./Underline";
import Image from "next/image";
import ConocemeImage from "../../../public/Joss-coceme.jpg"


export default function Conoceme() {
  return (
    <ContentSection SectionId={"conoceme"}>
      <article className="pt-20 top-10 flex flex-col xl:flex-row items-center justify-between gap-10">
        <div className="max-w-[600px] [&>p]:mb-4 [&>p]:leading-6 xl[&>p]:leading-[30px] [&>p]:text-lg md:[&>p]:text-2xl [&>p]:text-pretty">
          <h2 className="text-5xl font-semibold mb-3 tracking-wider">
            CONÓCEME
          </h2>
          <p>
            Desde muy pequeña me he sentido atraída por el arte de la
            interpretación. Siguiendo mi vocación me formé en la{" "}
            <Underline>
              Escuela Superior de Arte Dramático de Valencia,
            </Underline>{" "}
            estudios que he enriquecido con un entrenamiento actoral continuo en
            el centro
            <Underline> Atelier del Drama</Underline> y con talleres
            especializados en lectura y análisis de textos, creación de
            personajes e interpretación ante la cámara.
          </p>
          <p>
            Estas experiencias me han proporcionado una sólida técnica actoral
            al haber abordado personajes y textos complejos de autores como
            <Underline> Chéjov, Strindberg y Tennessee Williams.</Underline> Mi
            trayectoria incluye producciones teatrales, spots publicitarios,
            videoclips y pequeños proyectos audiovisuales.
          </p>
          <p className="italic">
            &#34;Soy una actriz disciplinada, siempre hambrienta de conocimiento
            y deseosa de encontrar proyectos en los que canalizar mi pasión por
            este oficio y seguir creciendo como artista.&#34;
          </p>
        </div>
        <Image
          alt="Conoce a Joss"
          loading="lazy"
          className="size-[350px] md:size-[600px] object-cover rounded-full "
          src={ConocemeImage}
        />
      </article>
    </ContentSection>
  );
}
