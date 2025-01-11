import React from "react";

export default function ContentSection({ children, SectionId }) {
  return (
    <section
      id={SectionId}
      className="max-w-[365px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-5xl xl:max-w-7xl mx-auto"
    >
      {children}
    </section>
  );
}
