import React from "react";

export default function Conoceme() {
  return (
    <section
      id={"conoceme"}
      className="flex flex-col lg:flex-row items-center justify-between lg:max-w-7xl mx-auto"
    >
      <div className="px-3 lg:px-0 pt-32 lg:max-w-xl [&>p]:mb-4 [&>p]:leading-7	 [&>p]:text-lg [&>p]:text-pretty">
        <h2 className="text-3xl font-semibold mb-3">Conóceme</h2>
        <p>
          Desde muy pequeña me he sentido atraída por el arte de la interpretación. Siguiendo mi vocación me formé en la Escuela Superior de Arte Dramático de Valencia, estudios que he enriquecidocon un entrenamiento actoral continuo en el centro Atelier del Drama y con talleres especializados en lectura y análisis de textos, creación de personajes e interpretación ante la cámara.
        </p>
        <p>
         Estas experiencias me han proporcionado una sólida técnica actoral al haber abordado personajes y textos complejos de autores como Chéjov, Strindberg y Tennessee Williams. Mi trayectoria incluye producciones teatrales, spots publicitarios, videoclips y pequeños proyectos audiovisuales.
        </p>
        <p>
          Soy una actriz disciplinada, siempre hambrienta de conocimiento y deseosa de encontrar proyectos en los que canalizar mi pasión por este oficio y seguir creciendo como artista.
        </p>
      </div>
      <div className="">
        <img
          loading="lazy"
          className="size-[350px] lg:size-[550px] object-cover rounded-full blur-lg absolute -z-10 "
          src="./Joss-coceme.jpg"
        />
        <img
          loading="lazy"
          className="size-[350px] lg:size-[550px] object-cover rounded-full"
          src="./Joss-coceme.jpg"
        />
      </div>
    </section>
  );
}
