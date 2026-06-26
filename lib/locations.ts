export type Location = {
  slug: string;
  name: string;
  fullName: string;
  region: "Johannesburg" | "Pretoria";
  driveMinutes: number;
  driveRange: string;
  driveRoute: string;
  directions: string;
  landmarks: string[];
  areaIntro: string;
  clienteleSentence: string;
  servingBlurb: string;
  nearbyLocations: string[]; // slugs of nearby locations for internal linking
};

export const LOCATIONS: Location[] = [
  {
    slug: "sandton",
    name: "Sandton",
    fullName: "Sandton, Johannesburg",
    region: "Johannesburg",
    driveMinutes: 14,
    driveRange: "12–15 minutes",
    driveRoute: "via William Nicol Drive",
    directions:
      "From Sandton, head north on William Nicol Drive through Bryanston towards Fourways. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road, on the corner of Kingfisher Drive. Free parking on arrival and an easy run up William Nicol from the Sandton CBD.",
    landmarks: ["Sandton City", "Nelson Mandela Square", "Sandton Convention Centre"],
    areaIntro:
      "Sandton is Johannesburg's financial and corporate hub. Clients here tend to be time-conscious professionals who want natural, maintenance-light results — waking up without a makeup routine, not a conspicuous done look. Discretion and precision matter more than bold colour.",
    clienteleSentence:
      "Sam's Sandton clients are typically professionals aged 28–50 looking for microblading or nano brows that survive gym, pool and boardroom without touching up.",
    servingBlurb: "Serving Sandton, Illovo, Morningside, Rivonia and the Sandton CBD.",
    nearbyLocations: ["bryanston", "fourways"],
  },
  {
    slug: "fourways",
    name: "Fourways",
    fullName: "Fourways, Johannesburg",
    region: "Johannesburg",
    driveMinutes: 3,
    driveRange: "a few minutes",
    driveRoute: "on Witkoppen Road",
    directions:
      "The studio is right here in Fourways, inside Rustic Timber & Garden Centre at 42 Witkoppen Road on the corner of Kingfisher Drive, about 5 minutes from Fourways Mall. Free parking on arrival.",
    landmarks: ["Fourways Mall", "Monte Casino", "Lonehill Shopping Centre"],
    areaIntro:
      "Fourways is one of Johannesburg's fastest-growing northern suburbs, drawing a broad mix of families, young professionals and business owners. It is also home to the studio, which makes returning for a touch-up or a seasonal brow lamination simple to fit into the day.",
    clienteleSentence:
      "Fourways clients often start with brow lamination or a consultation, then return for full PMU once they have seen Sam's work in person.",
    servingBlurb: "Serving Fourways, Lonehill, Douglasdale, Sunninghill, Paulshof and surrounds.",
    nearbyLocations: ["sandton", "bryanston"],
  },
  {
    slug: "bryanston",
    name: "Bryanston",
    fullName: "Bryanston, Johannesburg",
    region: "Johannesburg",
    driveMinutes: 10,
    driveRange: "8–12 minutes",
    driveRoute: "via William Nicol Drive",
    directions:
      "From Bryanston, head north on William Nicol Drive towards Fourways, then turn onto Witkoppen Road. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road, a short drive with free parking on site.",
    landmarks: ["Bryanston Shopping Centre", "Design Quarter", "Nicolway Bryanston"],
    areaIntro:
      "Bryanston is one of Johannesburg's most established northern suburbs, with a settled, discerning demographic. Clients here tend to research thoroughly before booking and arrive knowing what they want. Word-of-mouth is strong — a significant portion of Sam's Bryanston bookings come through referral.",
    clienteleSentence:
      "Bryanston's high density of beauty-conscious women 35–55 makes it one of Sam's most consistent referral areas. Clients often book powder brows or lip blush and bring a friend on the next visit.",
    servingBlurb: "Serving Bryanston, Craigavon, Gallo Manor, Hurlingham and surrounds.",
    nearbyLocations: ["sandton", "fourways"],
  },
  {
    slug: "roodepoort",
    name: "Roodepoort",
    fullName: "Roodepoort, Johannesburg",
    region: "Johannesburg",
    driveMinutes: 23,
    driveRange: "20–28 minutes",
    driveRoute: "via Beyers Naudé Drive and the N1",
    directions:
      "From Roodepoort and Clearwater, take Beyers Naudé Drive north or the N1 towards Fourways. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road, about 25 minutes from Clearwater Mall with free on-site parking.",
    landmarks: ["Clearwater Mall", "Florida Park", "Constantia Kloof"],
    areaIntro:
      "Roodepoort and the western Johannesburg suburbs are underserved for specialist PMU at Sam's level. Clients from Clearwater, Florida Park and Constantia Kloof rarely have to drive further to find quality permanent makeup — Sam is the closest trained PMU artist in this tier to this part of Johannesburg.",
    clienteleSentence:
      "Roodepoort clients often find Blade Boutique through Google after looking for microblading or dark lip treatment and discovering that the closest specialist at this quality level is in Fourways.",
    servingBlurb:
      "Serving Roodepoort, Clearwater, Florida Park, Constantia Kloof, Weltevreden Park and surrounds.",
    nearbyLocations: ["bryanston", "sandton"],
  },
  {
    slug: "centurion",
    name: "Centurion",
    fullName: "Centurion, Gauteng",
    region: "Pretoria",
    driveMinutes: 30,
    driveRange: "25–35 minutes",
    driveRoute: "via the N1 South",
    directions:
      "From Centurion, head south on the N1 towards Johannesburg. Exit at William Nicol Drive or Witkoppen Road and follow into Fourways. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road. Allow 35 minutes during morning peak.",
    landmarks: ["Centurion Mall", "Irene Village", "SuperSport Park"],
    areaIntro:
      "Centurion sits between Pretoria and Johannesburg, drawing a growing professional and young-family demographic from the expanding residential estates. PMU demand in Centurion is rising, and the closest specialist studio with Sam's level of training and pigment range is at Blade Boutique in Fourways.",
    clienteleSentence:
      "Centurion clients commonly ask about powder brows and lip blush — treatments that hold well in the Highveld climate and look polished in a professional setting.",
    servingBlurb: "Serving Centurion, Irene, Lyttelton, Wierdapark and surrounding areas.",
    nearbyLocations: ["pretoria", "roodepoort"],
  },
  {
    slug: "pretoria",
    name: "Pretoria",
    fullName: "Pretoria, Gauteng",
    region: "Pretoria",
    driveMinutes: 38,
    driveRange: "30–45 minutes",
    driveRoute: "via the N1 South",
    directions:
      "From Pretoria East and Brooklyn, head south on the N1 towards Johannesburg. Exit at William Nicol Drive or Witkoppen Road and follow into Fourways. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road. Allow 45 minutes from Pretoria East during peak.",
    landmarks: ["Menlyn Park", "Brooklyn Mall", "Hatfield Square"],
    areaIntro:
      "Pretoria clients make the drive to Blade Boutique because Sam offers a standard of specialist PMU — particularly dark lip neutralisation and nano brows — that is difficult to find in the capital at the same level. Many book two services in one extended visit to make the trip worthwhile. Sam is happy to schedule a combined brow and lip appointment on request.",
    clienteleSentence:
      "Pretoria clients often combine a brow and lip service in a single extended appointment. Sam builds extra consultation time into these visits and sends a prep guide tailored to combined sessions.",
    servingBlurb:
      "Serving Pretoria East, Brooklyn, Hatfield, Menlyn, Faerie Glen, Garsfontein and surrounds.",
    nearbyLocations: ["centurion", "sandton"],
  },
  {
    slug: "randburg",
    name: "Randburg",
    fullName: "Randburg, Johannesburg",
    region: "Johannesburg",
    driveMinutes: 17,
    driveRange: "15–20 minutes",
    driveRoute: "via Witkoppen Road or Northumberland Avenue",
    directions:
      "From Randburg and Ferndale, head north on Malibongwe Drive or cut across via Northumberland Avenue onto Witkoppen Road into Fourways. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road, a 15 to 20 minute drive with free parking on site.",
    landmarks: ["Brightwater Commons", "Northgate Mall", "Randburg CBD"],
    areaIntro:
      "Randburg is one of Johannesburg's most diverse and well-established suburbs and a strong source of Sam's longest-standing clients. Many are local women who found her through word of mouth years before the studio had an online presence, and they still make the short trip north to Fourways for every touch-up.",
    clienteleSentence:
      "Randburg clients include some of Sam's most loyal return clients, many of whom book annual colour boosts and refer family and friends. Local convenience and trust built over years make this Sam's most reliable referral base.",
    servingBlurb:
      "Serving Randburg, Ferndale, Northriding, Bordeaux, Olivedale, Boskruin and surrounds.",
    nearbyLocations: ["bryanston", "fourways"],
  },
  {
    slug: "midrand",
    name: "Midrand",
    fullName: "Midrand, Gauteng",
    region: "Johannesburg",
    driveMinutes: 18,
    driveRange: "15–22 minutes",
    driveRoute: "via the N1 or Allandale Road, exit William Nicol or Witkoppen Road",
    directions:
      "From Midrand, take the N1 South or Allandale Road towards Fourways. Exit at William Nicol Drive or Witkoppen Road. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road, about 18 minutes off-peak. Free parking on site. Allow an extra 10 minutes during morning or afternoon rush.",
    landmarks: ["Mall of Africa", "Waterfall City", "Midrand Gautrain Station"],
    areaIntro:
      "Midrand sits on the N1 corridor between Johannesburg and Pretoria and has grown rapidly into one of Gauteng's most sought-after residential and commercial nodes. Young professionals, families in the Waterfall and Kyalami estates, and corporate workers commuting on the Gautrain all live here. PMU demand is strong — and Blade Boutique is the closest specialist studio at this level for this part of the province.",
    clienteleSentence:
      "Midrand clients often ask about nano brows and lip blush — clean, professional results that look polished whether the day starts with a Gautrain commute or a corporate meeting.",
    servingBlurb:
      "Serving Midrand, Waterfall, Kyalami, Halfway House, Vorna Valley, Grand Central and surrounds.",
    nearbyLocations: ["sandton", "centurion"],
  },
  {
    slug: "soweto",
    name: "Soweto",
    fullName: "Soweto, Johannesburg",
    region: "Johannesburg",
    driveMinutes: 42,
    driveRange: "35–45 minutes",
    driveRoute: "via the N1 North",
    directions:
      "From Soweto, take the N1 North towards Johannesburg and continue to the William Nicol Drive or Witkoppen Road exits for Fourways. The studio is inside Rustic Timber & Garden Centre at 42 Witkoppen Road. Allow 45 minutes during morning peak. Free parking on site.",
    landmarks: ["Maponya Mall", "Chris Hani Baragwanath Academic Hospital", "Soweto Towers"],
    areaIntro:
      "Soweto has a large, beauty-conscious female demographic and one of the strongest word-of-mouth networks in Johannesburg. Dark lip neutralisation is one of Sam's most-booked treatments from this area — addressing hyperpigmentation and uneven lip tone that affects melanin-rich skin. Sam has trained extensively in PMU for deeper skin tones, and many clients from Soweto arrive after seeing results shared in beauty WhatsApp groups or Instagram.",
    clienteleSentence:
      "Soweto clients typically find Sam through community beauty recommendations and arrive knowing exactly what they want — often booking dark lip neutralisation or microblading after researching Sam's results on social media.",
    servingBlurb:
      "Serving Soweto, Dobsonville, Meadowlands, Zola, Protea Glen, Diepkloof and surrounds.",
    nearbyLocations: ["roodepoort", "bryanston"],
  },
];

// Services included in PSEO (excludes freckles, fine-line-tattoos, lash-enhancement)
export const PSEO_SERVICE_SLUGS = [
  "microblading",
  "nano-brows",
  "powder-brows",
  "lip-blush",
  "dark-lip-neutralisation",
  "eyeliner",
  "brow-lamination",
  "lash-lift",
] as const;

export type PseoServiceSlug = (typeof PSEO_SERVICE_SLUGS)[number];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function isPseoService(slug: string): slug is PseoServiceSlug {
  return (PSEO_SERVICE_SLUGS as readonly string[]).includes(slug);
}
