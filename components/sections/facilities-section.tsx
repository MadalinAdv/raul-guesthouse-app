import {
  Wifi,
  Car,
  Coffee,
  Utensils,
  Mountain,
  Trees,
  Clock,
  Shield,
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
      icon: Shield,
      title: "Anulare flexibilă",
      description: "Anulare gratuită până cu 24h înainte",
    },
    {
      icon: MapPin,
      title: "Poziție strategică",
      description: "Pe E70, între Craiova și Calafat",
    },
  ];

  return (
    <section id="facilitati" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Facilitățile Pensiunii Raul din Galicea Mare
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Tot ce aveți nevoie pentru o ședere perfectă aproape de Craiova
          </p>
          <p className="text-lg text-green-600 font-semibold">
            🌟 Toate facilitățile incluse în preț - fără costuri suplimentare!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <facility.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600 text-sm">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
            De ce Pensiunea Raul din Galicea Mare?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-600 mb-3">
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
              <h4 className="font-semibold text-green-600 mb-3">
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
