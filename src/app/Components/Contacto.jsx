"use client";
import React, { useState } from "react";
import ContentSection from "./ContentSection";
import Image from "next/image";
import JossImage from "../../../public/joss-camara-polaroid.jpg";
import Title2 from "./Title2";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    cell: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false); // Para controlar el estado de envío
  const [submitted, setSubmitted] = useState(false); // Para controlar si el mensaje se ha enviado

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Inicia el estado de envío

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      setSubmitted(true); // Si la respuesta es exitosa, se marca como enviado
      setFormData({ name: "", mail: "", cell: "", message: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al enviar el mensaje");
    } finally {
      setIsSubmitting(false); // Finaliza el estado de envío
    }
  };

  return (
    <ContentSection SectionId={"contacto"}>
      <article className="mb-5 pt-20 flex flex-col xl:flex-row gap-10 justify-center items-center">
        <Image
          src={JossImage}
          alt="Joss posando con una camara polaroid."
          className="lg:size-[600px] xl:size-[500px] object-cover rounded-[12px]"
        />
        {/* Si se ha enviado el formulario, renderizar el mensaje de éxito */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center p-10">
            <p className="text-3xl font-bold text-[#ffffff]">¡Mensaje enviado con éxito!</p>
            <p className="mt-4 text-lg">Gracias por contactarme, pronto me comunicaré contigo.</p>
          </div>
        ) : (
          /* Si no se ha enviado el formulario, renderizar el formulario */
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 text-[#000000] w-full lg:w-[600px] xl:w-[360px] [&>input]:rounded-[12px] [&>input]:text-xl [&>input]:h-12 [&>input]:p-4 [&>textarea]:h-52 [&>input]:placeholder-[#5d3427] [&>input]:text-[#5d3427] [&>textarea]:p-4 [&>textarea]:text-xl [&>textarea]:rounded-[12px] [&>textarea]:placeholder-[#5d3427] [&>textarea]:text-[#5d3427]"
          >
            <input
              id="name"
              type="text"
              placeholder="Nombre *"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              id="mail"
              type="email"
              placeholder="Correo electrónico *"
              required
              value={formData.mail}
              onChange={handleChange}
            />
            <input
              id="cell"
              type="tel"
              placeholder="Número de teléfono"
              value={formData.cell}
              onChange={handleChange}
            />
            <textarea
              id="message"
              placeholder="Cuerpo del mensaje *"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={isSubmitting} // Deshabilitar el botón cuando se esté enviando
              className="bg-[#5d3427] rounded-[12px] uppercase tracking-widest text-[#ffffff] xl:hover:bg-[#ffffff] xl:hover:text-[#5d3427] w-fit px-8 py-4 text-xl transition-colors ease-in-out duration-300"
            >
              {isSubmitting ? "Enviando..." : "Enviar"} {/* Cambiar el texto del botón */}
            </button>
          </form>
        )}
      </article>
    </ContentSection>
  );
}
