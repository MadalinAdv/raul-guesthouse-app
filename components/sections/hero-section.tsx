import Image from "next/image";

import { Button } from "@/components/ui/button";

import { SEOOptimizedContent } from "./seo-optimized-content";

export function HeroSection() {
  return (
    <section className="relative flex h-[80vh] items-center justify-center">
      <SEOOptimizedContent />
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Pensiunea+Raul+Galicea+Mare"
          alt="Pensiunea Raul - cazare premium în Galicea Mare, Dolj, aproape de Craiova"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">Pensiunea Raul</h1>
        <p className="mb-4 text-xl opacity-90 md:text-2xl">
          Cazare premium în Galicea Mare, Dolj
        </p>
        <p className="mb-8 text-lg opacity-80 md:text-xl">
          La 15 minute de Craiova • La 20 minute de Calafat • Camere avantajoase
          • Confort garantat
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-green-600 px-8 py-3 text-lg hover:bg-green-700"
          >
            Rezervă camera ta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent px-8 py-3 text-lg text-white hover:bg-white hover:text-gray-900"
          >
            Descoperă mai mult
          </Button>
        </div>
      </div>
    </section>
  );
}
