import Image from "next/image";

export function GallerySection() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=300&text=Exterior+Pensiunea+Raul+Galicea+Mare",
      alt: "Exterior Pensiunea Raul din Galicea Mare, Dolj",
      title: "Exterior pensiune",
    },
    {
      src: "/placeholder.svg?height=200&width=300&text=Restaurant+traditional+Dolj",
      alt: "Restaurant tradițional Pensiunea Raul aproape de Craiova",
      title: "Restaurant tradițional",
    },
    {
      src: "/placeholder.svg?height=200&width=300&text=Camera+confortabila+Galicea+Mare",
      alt: "Cameră confortabilă cu vedere la munte în Galicea Mare",
      title: "Cameră cu vedere",
    },
    {
      src: "/placeholder.svg?height=300&width=300&text=Gradina+pensiune+Dolj",
      alt: "Grădina frumoasă a Pensiunii Raul din Dolj",
      title: "Grădina pensiunii",
    },
    {
      src: "/placeholder.svg?height=300&width=300&text=Mic+dejun+traditional+romanesc",
      alt: "Mic dejun tradițional românesc la Pensiunea Raul",
      title: "Mic dejun tradițional",
    },
    {
      src: "/placeholder.svg?height=200&width=300&text=Peisaj+Galicea+Mare+Craiova",
      alt: "Priveliște frumoasă din Galicea Mare spre Craiova",
      title: "Priveliște spre Craiova",
    },
    {
      src: "/placeholder.svg?height=200&width=300&text=Zona+comuna+relaxare",
      alt: "Zona comună cu șemineu pentru relaxare",
      title: "Zona comună",
    },
    {
      src: "/placeholder.svg?height=300&width=300&text=Apus+soare+Dolj",
      alt: "Apus de soare spectaculos în Dolj",
      title: "Apus de soare",
    },
  ];

  return (
    <section id="galerie" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Galeria Foto - Pensiunea Raul Galicea Mare
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Descoperiți frumusețea cazării noastre din Dolj, aproape de Craiova
          </p>
          <p className="text-lg text-green-600">
            📸 Imagini reale din pensiunea noastră din Galicea Mare
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[0].src || "/placeholder.svg"}
                alt={galleryImages[0].alt}
                width={300}
                height={300}
                className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                width={300}
                height={200}
                className="object-cover w-full h-32 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[2].src || "/placeholder.svg"}
                alt={galleryImages[2].alt}
                width={300}
                height={200}
                className="object-cover w-full h-32 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[3].src || "/placeholder.svg"}
                alt={galleryImages[3].alt}
                width={300}
                height={300}
                className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[4].src || "/placeholder.svg"}
                alt={galleryImages[4].alt}
                width={300}
                height={300}
                className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[5].src || "/placeholder.svg"}
                alt={galleryImages[5].alt}
                width={300}
                height={200}
                className="object-cover w-full h-32 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[6].src || "/placeholder.svg"}
                alt={galleryImages[6].alt}
                width={300}
                height={200}
                className="object-cover w-full h-32 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={galleryImages[7].src || "/placeholder.svg"}
                alt={galleryImages[7].alt}
                width={300}
                height={300}
                className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
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
