export const STUDIO = {
  name: "Blade Boutique",
  address: {
    street: "8 Tin Road",
    suburb: "Bromhof",
    city: "Randburg",
    province: "Gauteng",
    country: "South Africa",
    postalCode: "2154",
  },
  fullAddress: "8 Tin Road, Bromhof, Randburg, Gauteng, 2154",
  phone: "+27724111476",
  whatsappNumber: "27724111476",
  email: "hello@bladeboutique.co.za",
  url: "https://bladeboutique.co.za",
  hours: [
    { day: "Mon-Fri", open: "09:00", close: "17:00" },
    { day: "Sat", open: "09:00", close: "14:00" },
    { day: "Sun", open: null, close: null },
  ] as const,
  social: {
    instagram: "https://www.instagram.com/bladeboutique_/",
    facebook: "https://www.facebook.com/bladeboutiquesa/",
    tiktok: "https://www.tiktok.com/@bladeboutique",
  },
  freshaUrl: "", // pending Sam's Fresha onboarding
  geo: {
    latitude: -26.0731,
    longitude: 27.9756,
  },
};
