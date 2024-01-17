import Gallery from "./Components/Gallery";

const GalleryImages = [
  {
    largeURL:
      "/image (1).jpg",
    thumbnailURL:
      "/image (1).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (2).jpg",
    thumbnailURL:
      "/image (2).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (3).jpg",
    thumbnailURL:
      "/image (3).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (4).jpg",
    thumbnailURL:
      "/image (4).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (5).jpg",
    thumbnailURL:
      "/image (5).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (6).jpg",
    thumbnailURL:
      "/image (6).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (7).jpg",
    thumbnailURL:
      "/image (7).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (8).jpg",
    thumbnailURL:
      "/image (8).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (9).jpg",
    thumbnailURL:
      "/image (9).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (10).jpg",
    thumbnailURL:
      "/image (10).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (11).jpg",
    thumbnailURL:
      "/image (11).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (12).jpg",
    thumbnailURL:
      "/image (12).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (13).jpg",
    thumbnailURL:
      "/image (13).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (14).jpg",
    thumbnailURL:
      "/image (14).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (15).jpg",
    thumbnailURL:
      "/image (15).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (16).jpg",
    thumbnailURL:
      "/image (16).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (17).jpg",
    thumbnailURL:
      "/image (17).jpg",
    width: 2500,
    height: 3750,
  },
  {
    largeURL:
      "/image (18).jpg",
    thumbnailURL:
      "/image (18).jpg",
    width: 2500,
    height: 3750,
  },
  
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
