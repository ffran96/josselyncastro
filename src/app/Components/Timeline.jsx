import React from "react";

export default function Timeline({ Competencia }) {
  return (
    <section className="bg-[#fffbfa] flex justify-center pt-12">
      <div className="w-80">
        <ul>
          {Competencia.map(({ Titulo, Lugar, Fecha }) => (
            <li
              key={Titulo}
              className="relative flex gap-6 item pb-5 items-baseline *:before:absolute *:before:left-[5.5px] *:before:h-full *:before:w-[1px] *:before:bg-[#5d3427] *:last:before:w-[0px]"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#5d3427"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </span>
              <div className="">
                <p className="text-[#5d3427b7] text-sm">{Fecha}</p>
                <p className="mt-1 text-[#5d3427] font-medium text-sm">{Titulo}</p>
                <p className="text-[#5d3427b7] italic text-sm">{Lugar}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}