import React from "react";

export default function Conoceme() {
  return (
    <section
      id={"conoceme"}
      className="flex flex-col lg:flex-row items-center justify-between lg:max-w-7xl mx-auto"
    >
      <div className="pt-32 lg:max-w-xl [&>p]:mb-4 [&>p]:leading-7	 [&>p]:text-lg [&>p]:text-pretty">
        <h2 className="text-3xl font-semibold mb-3">Mi historia</h2>
        <p>
          En la adolescencia, mis aspiraciones evolucionaron. Al concluir la
          educación secundaria, decidí optar por una carrera &#34;realista&#34;: la
          abogacía. No obstante, a los 12 años, me recuerdo buscando escuelas de
          interpretación por internet, mi pasión por el arte dramático seguía
          estando ahí. A los 18 años, decidí independizarme y trabajar para
          costearme la carrera de derecho y mis clases de teatro, las cuales
          realizaba tres días a la semana y fueron la principal razón de que
          saltara al mundo laboral.
        </p>
        <p>
          A pesar de mis esfuerzos por conciliar ambos estudios y el trabajo en
          la hostelería, los textos de actuación siempre eclipsaban a las leyes
          y apuntes de derecho, así que pausé mi formación como actriz, pero la
          llamada de los focos y las tablas nunca cesó. En el tercer año de
          derecho, la certeza de que mi lugar estaba frente a una cámara o sobre
          un escenario se hizo innegable. Pero persistí y concluí mi primera
          carrera como jurista antes de lanzarme de lleno a mi verdadera
          vocación.
        </p>
        <p>
          En los últimos ocho años, me he formado con rigor, cursando los
          estudios en la Escuela Superior de Arte Dramático y entrenándome
          simultáneamente en el Atelier del Drama dónde he descubierto a los
          grandes autores como Shakespeare, Chéjov, Strindberg o T. Williams.
          Además junto con mis compañeros de promoción he fundado la asociación
          cultural Comboi estrenando nuestra primera obra teatral en 2023. Todo
          ello no ha hecho sino que acrecentar mis ganas de dedicar mi vida a la
          actuación
        </p>
        <p>
          Ahora, tras años de dedicación y aprendizaje, me siento lista para
          salir al mundo y ver crecer a mi actriz.
        </p>
      </div>
      <div className="">
        <img
          loading="lazy"
          className="size-[550px] object-cover rounded-full blur-lg absolute -z-10 "
          src="./Joss-coceme.jpg"
        />
        <img
          loading="lazy"
          className="size-[550px] object-cover rounded-full"
          src="./Joss-coceme.jpg"
        />
      </div>
    </section>
  );
}
