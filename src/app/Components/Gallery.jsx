"use client";
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <section id="book" className="lg:max-w-7xl mx-auto">
      <h2 className=" pt-32 pb-8 text-3xl font-semibold mb-2 px-3 lg:px-0">
        Book
      </h2>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
        id={props.galleryID}
      >
        {props.images.map((image, index) => (
          <a
            className="group xl:hover:z-10 xl:hover:scale-105  xl:transition-all relative"
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              className="blur-xl absolute inset-0 transition xl:group-hover:scale-105 xl:group-hover:contrast-125 -z-10"
              src={image.thumbnailURL}
              alt=""
            />
            <img
              loading="lazy"
              src={image.thumbnailURL}
              alt=""
            />
          </a>
        ))}
      </div>
    </section>
  );
}
