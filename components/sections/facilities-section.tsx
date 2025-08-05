import {
  Wifi,
  Car,
  Coffee,
  Utensils,
  Mountain,
  Trees,
  Clock,
  MapPin,
} from "lucide-react";

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Wifi,
      title: "WiFi gratuit",
      description: "Internet de mare viteză în toate camerele",
    },
    {
      icon: Car,
      title: "Parcare gratuită",
      description: "Locuri de parcare sigure pentru oaspeți",
    },
    {
      icon: Utensils,
      title: "Restaurant tradițional",
      description: "Bucătărie românească autentică",
    },
    {
      icon: Trees,
      title: "Grădină frumoasă",
      description: "Spații verzi pentru relaxare",
    },
    {
      icon: Coffee,
      title: "Mic dejun inclus",
      description: "Mic dejun tradițional românesc",
    },
    {
      icon: Mountain,
      title: "Aproape de Craiova",
      description: "La doar 15 minute de centrul Craiovei",
    },
    {
      icon: Clock,
      title: "Recepție 24/7",
      description: "Asistență non-stop pentru oaspeți",
    },

    {
      icon: MapPin,
      title: "Poziție strategică",
      description: "Pe E70, între Craiova și Calafat",
    },
  ];

  return (
    <section id="facilitati" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Facilitățile Pensiunii Raul din Galicea Mare
          </h2>
          <p className="mb-2 text-xl text-gray-600">
            Tot ce aveți nevoie pentru o ședere perfectă aproape de Craiova
          </p>
          <p className="text-lg font-semibold text-green-600">
            🌟 Toate facilitățile incluse în preț - fără costuri suplimentare!
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group text-center transition-all duration-300 hover:scale-105 hover:transform"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-colors group-hover:bg-green-200">
                <facility.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{facility.title}</h3>
              <p className="text-sm text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
            De ce Pensiunea Raul din Galicea Mare?
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold text-green-600">
                🎯 Locație strategică
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• La 15 km de centrul Craiovei</li>
                <li>• La 20 km de Calafat și frontiera cu Bulgaria</li>
                <li>• Pe drumul european E70</li>
                <li>• Acces facil pe DJ561G</li>
                <li>• Aproape de atracțiile turistice</li>
                <li>• Transport public disponibil</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-green-600">
                💰 Prețuri avantajoase
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Cele mai bune prețuri din zonă</li>
                <li>• Reduceri pentru șederi lungi</li>
                <li>• Fără taxe ascunse</li>
                <li>• Raport calitate-preț excelent</li>
                <li>• Ideal pentru călătorii de afaceri</li>
                <li>• Perfect pentru tranzit Bulgaria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
