import { Mountain, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Pensiunea Raul</span>
            </div>
            <p className="mb-4 text-gray-400">
              Cazare premium în Galicea Mare, Dolj - la doar 15 minute de
              Craiova și 20 minute de Calafat. Camere confortabile la prețuri
              foarte avantajoase pe drumul european E70.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>DJ561G 1, Galicea Mare, Dolj</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(0761) 692 023 • (0768) 584 230</span>
              </div>
              <div className="text-xs text-gray-500">
                15 min de Craiova • 20 min de Calafat • Pe E70
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Navigare rapidă</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="#despre"
                  className="transition-colors hover:text-white"
                >
                  Despre pensiune
                </Link>
              </li>
              <li>
                <Link
                  href="#camere"
                  className="transition-colors hover:text-white"
                >
                  Camere avantajoase
                </Link>
              </li>
              <li>
                <Link
                  href="#facilitati"
                  className="transition-colors hover:text-white"
                >
                  Facilități incluse
                </Link>
              </li>
              <li>
                <Link
                  href="#galerie"
                  className="transition-colors hover:text-white"
                >
                  Galerie foto
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact și rezervări
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Servicii și facilități
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Rezervări online</li>
              <li>✓ Restaurant tradițional</li>
              <li>✓ WiFi gratuit în toate camerele</li>
              <li>✓ Parcare gratuită</li>
              <li>✓ Mic dejun inclus</li>
              <li>✓ Recepție 24/7</li>
              <li>✓ Informații tranzit Bulgaria</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact și program</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="font-medium text-white">Rezervări:</span>
                </div>
                <div className="text-sm">
                  <div>(0761) 692 023</div>
                  <div>(0768) 584 230</div>
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <span className="font-medium text-white">Email:</span>
                </div>
                <div className="text-sm">angidraghici81@gmail.com</div>
              </div>

              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-400" />
                  <span className="font-medium text-white">Program:</span>
                </div>
                <div className="text-sm">
                  <div>Check-in: 14:00 - 22:00</div>
                  <div>Check-out: 08:00 - 12:00</div>
                  <div>Recepție: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="grid items-center gap-4 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; 2025 Pensiunea Raul - Galicea Mare, Dolj. Toate
                drepturile rezervate.
              </p>
              <a href="https://www.madalindvp.ro/" target="_blank">
                {" "}
                <p className="text-sm text-gray-500">
                  Made with ❤️ by MadalinDVP{" "}
                </p>
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                Cazare de calitate aproape de Craiova și Calafat | Prețuri
                avantajoase | Pe drumul E70 | Rezervări WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
