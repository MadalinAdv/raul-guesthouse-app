declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const gtag = (
  event: string,
  action: string,
  params: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(event, action, params);
  } else {
    console.warn("gtag is not properly initialized");
  }
};
