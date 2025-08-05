"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp number (replace with actual restaurant number)
  const whatsappNumber = "40761692023"; // Romanian format without +
  const message = "Bunza ziua! Aș dori să fac o rezervare la Pensiunea Raul.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute top-1/2 right-16 -translate-y-1/2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-300 ${
            isHovered ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
          }`}
        >
          Scrie-ne pe WhatsApp
          <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900"></div>
        </div>

        {/* WhatsApp Button */}
        <div className="transform rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl">
          <MessageCircle className="h-6 w-6" />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20"></div>
      </a>
    </div>
  );
}
