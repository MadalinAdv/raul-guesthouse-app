"use client";

import { useEffect } from "react";

import { gtag } from "@/lib/gtag"; // Assuming gtag is imported from a library

export function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
            // Send to analytics
            if (typeof gtag !== "undefined") {
              gtag("event", "web_vitals", {
                name: "LCP",
                value: Math.round(entry.startTime),
                event_category: "Web Vitals",
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ["largest-contentful-paint"] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const eventEntry = entry as PerformanceEventTiming;
          console.log(
            "FID:",
            eventEntry.processingStart - eventEntry.startTime
          );
          if (typeof gtag !== "undefined") {
            gtag("event", "web_vitals", {
              name: "FID",
              value: Math.round(
                eventEntry.processingStart - eventEntry.startTime
              ),
              event_category: "Web Vitals",
            });
          }
        }
      });

      fidObserver.observe({ entryTypes: ["first-input"] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & {
            value: number;
            hadRecentInput: boolean;
          };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        console.log("CLS:", clsValue);
        if (typeof gtag !== "undefined") {
          gtag("event", "web_vitals", {
            name: "CLS",
            value: Math.round(clsValue * 1000),
            event_category: "Web Vitals",
          });
        }
      });

      clsObserver.observe({ entryTypes: ["layout-shift"] });
    }
  }, []);

  return null;
}
