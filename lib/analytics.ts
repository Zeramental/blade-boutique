"use client";

function gtagEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  // @ts-expect-error - gtag injected via layout Script tag
  if (typeof window.gtag === "function") window.gtag("event", name, params);
}

export const GA = {
  whatsappClick: (label: string) =>
    gtagEvent("whatsapp_click", { event_category: "engagement", event_label: label }),

  bookingFormStart: () =>
    gtagEvent("booking_form_start", { event_category: "engagement" }),

  bookingFormSubmit: (service: string) =>
    gtagEvent("booking_form_submit", { event_category: "conversion", event_label: service }),
};
