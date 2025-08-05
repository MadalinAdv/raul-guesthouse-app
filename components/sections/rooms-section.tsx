import { Users, Bed, Bath, Wifi, Car, Coffee } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RoomsSection() {
  const rooms = [
    {
      id: 1,
      name: "Camera Dublă Standard",
      price: "180 RON/noapte",
      originalPrice: "XXX RON",
      description: "Cameră confortabilă cu vedere la grădină",
      image:
        "/placeholder.svg?height=300&width=400&text=Camera+dubla+Galicea+Mare",
      features: ["2 persoane", "Pat dublu", "Baie privată"],
      amenities: [Wifi, Car, Coffee],
      popular: true,
      discount: "18% reducere",
    },
    {
      id: 2,
      name: "Camera Familială",
      price: "280 RON/noapte",
      originalPrice: "350 RON",
      description: "Spațioasă, perfectă pentru familii",
      image: "/placeholder.svg?height=300&width=400&text=Camera+familiala+Dolj",
      features: ["4 persoane", "2 paturi", "Baie privată"],
      amenities: [Wifi, Car, Coffee],
      discount: "20% reducere",
    },
    {
      id: 3,
      name: "Suita de Lux",
      price: "350 RON/noapte",
      originalPrice: "450 RON",
      description: "Eleganță și confort superior cu balcon",
      image:
        "/placeholder.svg?height=300&width=400&text=Suita+lux+aproape+Craiova",
      features: ["2 persoane", "Pat king", "Jacuzzi"],
      amenities: [Wifi, Car, Coffee],
      premium: true,
      discount: "22% reducere",
    },
  ];

  return (
    <section id="camere" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Camere Avantajoase în Galicea Mare
          </h2>
          <p className="mb-2 text-xl text-gray-600">
            Prețuri foarte competitive pentru cazare de calitate aproape de
            Craiova
          </p>
          <p className="text-lg font-semibold text-green-600">
            🔥 Oferte speciale - Economisești până la 22%!
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={`${room.name} - Pensiunea Raul Galicea Mare`}
                  fill
                  className="object-cover"
                />
                {room.popular && (
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    Populară
                  </Badge>
                )}
                {room.premium && (
                  <Badge className="absolute top-4 left-4 bg-yellow-600">
                    Premium
                  </Badge>
                )}
                <Badge className="absolute top-4 right-4 bg-red-600">
                  {room.discount}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {room.name}
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      {room.price}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      {room.originalPrice}
                    </div>
                  </div>
                </CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{room.features[0]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{room.features[1]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{room.features[2]}</span>
                  </div>
                </div>

                <div className="mb-4 flex items-center space-x-2">
                  {room.amenities.map((Icon, index) => (
                    <Icon key={index} className="h-4 w-4 text-green-600" />
                  ))}
                  <span className="text-xs text-gray-500">
                    WiFi, Parcare, Mic dejun
                  </span>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Rezervă la preț avantajos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            ⭐ Toate camerele includ: WiFi gratuit, parcare gratuită, mic dejun
            tradițional
          </p>
          <p className="text-sm text-gray-500">
            Prețurile afișate sunt pentru cazare în Galicea Mare, Dolj. Oferte
            valabile pentru rezervări online.
          </p>
        </div>
      </div>
    </section>
  );
}
