import Gallery from "./Components/Gallery";

const GalleryImages = [
  {
    largeURL:
      "/image (52).jpg",
    thumbnailURL:
      "/image (52).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (34).jpg",
    thumbnailURL:
      "/image (34).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (215).jpg",
    thumbnailURL:
      "/image (215).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (396).jpg",
    thumbnailURL:
      "/image (396).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (242).jpg",
    thumbnailURL:
      "/image (242).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (189).jpg",
    thumbnailURL:
      "/image (189).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (101).jpg",
    thumbnailURL:
      "/image (101).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (157).jpg",
    thumbnailURL:
      "/image (157).jpg",
    width: 2500,
    height: 3750,
  }
];

export default function Home() {
  return (
    <main className="relative">
      <img
        className="w-screen h-screen object-cover object-top"
        src="/BI2A5681.jpg"
        alt="Joss"
      />

      <section id="conoceme" className="">
        Conoceme
      </section>
      <section id="cv" className="">
        CV
      </section>
      <section id="book" className="">
        <div>
          <Gallery
            galleryID="gallery"
            images={GalleryImages}
          />
        </div>
      </section>
      <section id="vbook" className="">
        VBook
      </section>
      <section id="contacto" className="">
        Contacto
      </section>
    </main>
  );
}
