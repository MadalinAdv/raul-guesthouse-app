"use client";

import { X, Cookie } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed right-4 bottom-4 left-4 z-50 md:right-4 md:left-auto md:max-w-md">
      <Card className="border-2 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="mt-1 h-6 w-6 flex-shrink-0 text-amber-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-sm font-semibold">
                Utilizăm cookie-uri
              </h3>
              <p className="mb-3 text-xs text-gray-600">
                Folosim cookie-uri pentru a îmbunătăți experiența ta pe site și
                pentru analiză. Continuând să navighezi, accepți utilizarea
                cookie-urilor.
              </p>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="bg-green-600 px-3 py-1 text-xs hover:bg-green-700"
                >
                  Accept
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={declineCookies}
                  className="bg-transparent px-3 py-1 text-xs"
                >
                  Refuz
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={declineCookies}
              className="h-auto p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
