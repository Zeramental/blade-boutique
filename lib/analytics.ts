"use client";

const ADS_CONV = {
  bookingFormSubmit: "AW-18121242373/hRLpCIPR8aIcEIXu8MBD",
  whatsappClick:     "AW-18121242373/0k5uCIbR8aIcEIXu8MBD",
};

export function gtagEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  // @ts-expect-error - gtag injected via layout Script tag
  if (typeof window.gtag === "function") window.gtag("event", name, params);
}

function gtagConversion(send_to: string, value?: number) {
  if (typeof window === "undefined") return;
  // @ts-expect-error - gtag injected via layout Script tag
  if (typeof window.gtag === "function")
    // @ts-expect-error - gtag injected via layout Script tag
    window.gtag("event", "conversion", { send_to, ...(value ? { value, currency: "ZAR" } : {}) });
}

export const GA = {
  whatsappClick: (label: string) => {
    gtagEvent("whatsapp_click", { event_category: "engagement", event_label: label });
    gtagConversion(ADS_CONV.whatsappClick);
  },

  bookingFormStart: () =>
    gtagEvent("booking_form_start", { event_category: "engagement" }),

  bookingFormSubmit: (service: string) => {
    gtagEvent("booking_form_submit", { event_category: "conversion", event_label: service });
    gtagConversion(ADS_CONV.bookingFormSubmit, 2500);
  },

  serviceView: (serviceName: string, slug: string) =>
    gtagEvent("service_view", { event_category: "engagement", event_label: serviceName, service_slug: slug }),

  pricingView: () =>
    gtagEvent("pricing_view", { event_category: "engagement" }),
};
