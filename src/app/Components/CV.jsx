import React from "react";
import LiCV from "./LiCV";
import Formacion from "../data/Formacion";
import Experiencia from "../data/Experiencia";

export default function CV() {
  return (
    <section id={"cv"} className="lg:max-w-7xl mx-auto px-3 lg:px-0">
      <h2 className="pt-32 mb-8 text-3xl font-semibold ">Curriculum</h2>
      <div className="flex justify-between flex-col gap-8 lg:flex-row ">
        <div className="">
          <h3 className="text-2xl font-semibold mb-6">Experiencia</h3>
          <ul className="[&>li]:mb-3">
          {Experiencia.map((i) => (
              <LiCV
                key={i.id}
                Titulo={i.Titulo}
                Lugar={i.Lugar}
                Fecha={i.Fecha}
                Descripcion={i.Info.Descripcion}
              />
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-6">Formación</h3>
          <ul className="[&>li]:mb-3">
            {Formacion.map((i) => (
              <LiCV
                key={i.id}
                Titulo={i.Titulo}
                Lugar={i.Lugar}
                Fecha={i.Fecha}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
