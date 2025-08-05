"use client";

import { Mountain, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">
              Pensiunea Raul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="#despre"
              className="text-gray-600 transition-colors hover:text-green-600"
            >
              Despre noi
            </Link>
            <Link
              href="#camere"
              className="text-gray-600 transition-colors hover:text-green-600"
            >
              Camere
            </Link>
            <Link
              href="#facilitati"
              className="text-gray-600 transition-colors hover:text-green-600"
            >
              Facilități
            </Link>
            <Link
              href="#galerie"
              className="text-gray-600 transition-colors hover:text-green-600"
            >
              Galerie
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 transition-colors hover:text-green-600"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="hidden bg-green-600 hover:bg-green-700 md:inline-flex">
              Rezervă acum
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 border-t pb-4 md:hidden">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="#despre"
                className="text-gray-600 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Despre noi
              </Link>
              <Link
                href="#camere"
                className="text-gray-600 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Camere
              </Link>
              <Link
                href="#facilitati"
                className="text-gray-600 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilități
              </Link>
              <Link
                href="#galerie"
                className="text-gray-600 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 transition-colors hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Rezervă acum
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
