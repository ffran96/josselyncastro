"use client";
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
/* eslint-disable @next/next/no-img-element */

export default function SimpleGallery(props) {
  const { Images, galleryID } = props;
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
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
        id={galleryID}
      >
        {Images.map(
          ({ largeURL, width, height, galleryID, thumbnailURL, index }) => (
            <a
              key={largeURL}
              className="group xl:hover:z-10 xl:hover:scale-105  xl:transition-all relative"
              href={largeURL}
              data-pswp-width={width}
              data-pswp-height={height}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={thumbnailURL}
                width={314}
                height={471}
                alt=""
                loading="lazy"
              />
              <img
                className="blur-xl absolute inset-0 transition xl:group-hover:scale-105 xl:group-hover:contrast-125 -z-10"
                src={thumbnailURL}
                width={314}
                height={471}
                alt=""
                loading="lazy"
              />
            </a>
          )
        )}
      </div>
    </section>
  );
}
