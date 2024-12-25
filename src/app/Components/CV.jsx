/* eslint-disable @next/next/no-img-element */
import React from "react";
import LiCV from "./LiCV";
import Curriculum from "../data/CV";

export default function CV() {
  const { Experiencia, Formacion } = Curriculum;
  return (
    <section className="relative overflow-hidden">
      <div id="cv" className="lg:max-w-7xl mx-auto px-3 lg:px-0 ">
        <h2 className="pt-32 mb-8 text-3xl font-semibold ">Curriculum</h2>
        <div className="flex justify-between flex-col gap-8 lg:flex-row ">
          <div className="">
            <img
              src="/destello-josselyn.webp"
              alt="Destello Josslyn Castro"
              className="absolute  blur-[96px] -z-10 rounded-full -right-[20%]  w-[1500px] 72 h-[2000px] "
            />
            <img
              src="/destello-josselyn.webp"
              alt="Destello Josslyn Castro"
              className="absolute  blur-[288px] -z-20 rounded-full -right-[20%]  w-[3000px] 72 h-[4000px] "
            />

            <h3 className="text-2xl font-semibold mb-6">Experiencia</h3>
            <ul className="[&>li]:mb-3">
              {Experiencia.map(({ id, Titulo, Lugar, Fecha, Info }) => (
                <LiCV
                  key={id}
                  Titulo={Titulo}
                  Lugar={Lugar}
                  Fecha={Fecha}
                  Descripcion={Info.Descripcion}
                />
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold mb-6">Formación</h3>
            <ul className="[&>li]:mb-3">
              {Formacion.map(({ id, Titulo, Lugar, Fecha, Info }) => (
                <LiCV
                  key={id}
                  Titulo={Titulo}
                  Lugar={Lugar}
                  Fecha={Fecha}
                  Descripcion={Info.Descripcion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 w-full h-[100%] bg-gradient-to-t from-[#000000] from-0% via-[#00000028] via-30% to-[#00000000] to-100%" />
    </section>
  );
}
