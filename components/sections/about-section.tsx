import { Star, Users, MapPin } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="despre" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Despre Pensiunea Raul din Galicea Mare
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Cazare de calitate în Dolj, la doar câțiva kilometri de Craiova și
              Calafat. Camere confortabile la prețuri foarte avantajoase,
              poziție strategică pe E70.
            </p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Image
                src="/images/camere-confortabile-galicea-mare.jpg"
                alt="Test imagine"
                width={600}
                height={500}
                className="h-auto w-full rounded"
                priority
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900">
                Bun venit la Pensiunea Raul
              </h3>
              <p className="leading-relaxed text-gray-600">
                Situată în comuna Galicea Mare, județul Dolj, Pensiunea Raul
                este alegerea perfectă pentru cei care caută cazare de calitate
                aproape de Craiova și Calafat. Cu o locație strategică pe DJ561G
                și drumul european E70, oferim acces facil la principalele
                atracții din zonă și la frontiera cu Bulgaria.
              </p>
              <p className="leading-relaxed text-gray-600">
                Camerele noastre sunt amenajate modern, cu prețuri foarte
                competitive, fiind ideale pentru turiști, oameni de afaceri sau
                familii care vizitează zona Craiovei și Calafatului. Personalul
                nostru vorbește română și vă stă la dispoziție 24/7.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">Evaluare 4.8/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">
                    500+ oaspeți fericiți
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">15 min de Craiova</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">20 min de Calafat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
