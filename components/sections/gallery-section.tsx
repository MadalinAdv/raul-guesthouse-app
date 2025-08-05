import Image from "next/image";

export function GallerySection() {
  const galleryImages = [
    {
      src: "/images/camera1.png",
      alt: "...",
      title: "...",
    },
    {
      src: "/images/camera2.png",
      alt: "...",
      title: "...",
    },
    {
      src: "/images/camera3.png",
      alt: "...",
      title: "...",
    },
    {
      src: "/images/camera4.jpeg", // extensie corectă
      alt: "...",
      title: "...",
    },
    {
      src: "/images/camera5.png", // extensie corectă
      alt: "...",
      title: "...",
    },
    {
      src: "/images/camera6.jpeg", // extensie corectă
      alt: "...",
      title: "...",
    },
    {
      src: "/images/camera9.jpeg", // extensie corectă
      alt: "...",
      title: "...",
    },
    {
      src: "/images/restaurant-traditional-dolj.jpg", // sau orice ai în `public/`
      alt: "...",
      title: "...",
    },
  ];

  return (
    <section id="galerie" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Galeria Foto - Pensiunea Raul Galicea Mare
          </h2>
          <p className="mb-2 text-xl text-gray-600">
            Descoperiți frumusețea cazării noastre din Dolj, aproape de Craiova
          </p>
          <p className="text-lg text-green-600">
            📸 Imagini reale din pensiunea noastră din Galicea Mare
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[0].src || "/placeholder.svg"}
                alt={galleryImages[0].alt}
                width={300}
                height={300}
                priority
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                width={300}
                height={200}
                priority
                className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[2].src || "/placeholder.svg"}
                alt={galleryImages[2].alt}
                width={300}
                height={200}
                loading="eager"
                className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[3].src || "/placeholder.svg"}
                alt={galleryImages[3].alt}
                width={300}
                loading="eager"
                height={300}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[4].src || "/placeholder.svg"}
                alt={galleryImages[4].alt}
                width={300}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[5].src || "/placeholder.svg"}
                alt={galleryImages[5].alt}
                width={300}
                height={200}
                className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[6].src || "/placeholder.svg"}
                alt={galleryImages[6].alt}
                width={300}
                height={200}
                priority
                className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={galleryImages[7].src || "/placeholder.svg"}
                alt={galleryImages[7].alt}
                width={300}
                height={300}
                priority
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            🏨 Pensiunea Raul - cazare de calitate în Galicea Mare, Dolj
          </p>
          <p className="text-sm text-gray-500">
            Toate imaginile sunt reale și reprezintă facilitățile disponibile la
            pensiunea noastră.
          </p>
        </div>
      </div>
    </section>
  );
}
