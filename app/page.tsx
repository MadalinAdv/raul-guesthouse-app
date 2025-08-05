import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { Footer } from "@/components/sections/footer";
import { GallerySection } from "@/components/sections/gallery-section";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PerformanceMonitor } from "@/components/sections/performance-monitor";
import { RoomsSection } from "@/components/sections/rooms-section";
import { StructuredData } from "@/components/sections/structured-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <Header />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <FacilitiesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <PerformanceMonitor />
    </div>
  );
}
