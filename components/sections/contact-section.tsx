"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    mesaj: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Salut! Sunt ${formData.nume} ${formData.prenume}.
    
Email: ${formData.email}
Telefon: ${formData.telefon}

Mesaj: ${formData.mesaj}

Trimis de pe site-ul Pensiunii Raul`;

    const whatsappUrl = `https://wa.me/40761692023?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Contact și Rezervări Pensiunea Raul
          </h2>
          <p className="text-xl text-gray-600">
            Suntem în Galicea Mare, Dolj - la 15 minute de Craiova și 20 minute
            de Calafat
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Informații de contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <div>
                  <span className="font-medium">
                    DJ561G 1, Galicea Mare, Dolj
                  </span>
                  <p className="text-sm text-gray-600">
                    La 15 km de Craiova • La 20 km de Calafat • Pe drumul E70
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">(0761) 692 023</div>
                  <div className="font-medium">(0768) 584 230</div>
                  <p className="text-sm text-gray-600">Apeluri și WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span>angidraghici81@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <span>WhatsApp disponibil 24/7</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold">
                Program și informații
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Recepție:</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>14:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span>08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Distanța până în Craiova:</span>
                  <span>15 km (15 min)</span>
                </div>
                <div className="flex justify-between">
                  <span>Distanța până în Calafat:</span>
                  <span>20 km (20 min)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-green-50 p-4">
              <h4 className="mb-2 font-semibold text-green-800">
                De ce să alegi Pensiunea Raul?
              </h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>✓ Aproape de Craiova - doar 15 minute</li>
                <li>✓ Aproape de Calafat - doar 20 minute</li>
                <li>✓ Pe drumul european E70 - acces facil</li>
                <li>✓ Prețuri foarte avantajoase</li>
                <li>✓ Camere moderne și confortabile</li>
                <li>✓ Parcare gratuită și WiFi inclus</li>
                <li>✓ Restaurant cu bucătărie tradițională</li>
                <li>✓ Ideal pentru tranzit spre Bulgaria</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <span>Trimite mesaj pe WhatsApp</span>
              </CardTitle>
              <CardDescription>
                Completează formularul și mesajul va fi trimis direct pe
                WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Nume *
                    </label>
                    <input
                      type="text"
                      name="nume"
                      required
                      value={formData.nume}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Prenume *
                    </label>
                    <input
                      type="text"
                      name="prenume"
                      required
                      value={formData.prenume}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      placeholder="Prenumele tău"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="email@exemplu.ro"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="+40 123 456 789"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Mesaj *
                  </label>
                  <textarea
                    name="mesaj"
                    required
                    rows={4}
                    value={formData.mesaj}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Scrie-ne despre rezervarea dorită, perioada, numărul de persoane..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Trimite pe WhatsApp
                </Button>
              </form>

              <div className="mt-4 rounded-lg bg-blue-50 p-3">
                <p className="text-sm text-blue-700">
                  💬 Mesajul va fi trimis direct pe WhatsApp la numărul (0761)
                  692 023. Vei primi răspuns rapid!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
