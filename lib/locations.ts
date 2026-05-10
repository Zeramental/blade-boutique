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
    driveMinutes: 13,
    driveRange: "12–15 minutes",
    driveRoute: "via William Nicol Drive or Rivonia Road",
    directions:
      "From Sandton, head north on William Nicol Drive through Bryanston into Northriding. The studio is inside Balance Wellness Centre at 8 Tin Road, Bromhof. Free parking on arrival. Easy off the N1 and straightforward from the Sandton CBD.",
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
    driveMinutes: 10,
    driveRange: "8–12 minutes",
    driveRoute: "via Witkoppen Road",
    directions:
      "From Fourways, take Witkoppen Road east towards Northriding. The studio is at Balance Wellness Centre, 8 Tin Road, Bromhof — about 10 minutes from Fourways Mall. Free parking on arrival.",
    landmarks: ["Fourways Mall", "Monte Casino", "Lonehill Shopping Centre"],
    areaIntro:
      "Fourways is one of Johannesburg's fastest-growing northern suburbs, drawing a broad mix of families, young professionals and business owners. It is one of Sam's busiest client areas — close enough that returning for a touch-up or a seasonal brow lamination is practical without planning the day around it.",
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
    driveMinutes: 12,
    driveRange: "10–14 minutes",
    driveRoute: "via William Nicol Drive or Bryanston Drive",
    directions:
      "From Bryanston, head north on William Nicol Drive or cut through via Bryanston Drive into Northriding. Balance Wellness Centre is at 8 Tin Road, Bromhof — a 10-minute drive with free parking on site.",
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
    driveMinutes: 18,
    driveRange: "15–22 minutes",
    driveRoute: "via Hendrik Potgieter Road through Northriding",
    directions:
      "From Roodepoort and Clearwater, head east on Hendrik Potgieter Road through Northriding towards Bromhof. Balance Wellness Centre is at 8 Tin Road, Bromhof — about 15 minutes from Clearwater Mall with free on-site parking.",
    landmarks: ["Clearwater Mall", "Florida Park", "Constantia Kloof"],
    areaIntro:
      "Roodepoort and the western Johannesburg suburbs are underserved for specialist PMU at Sam's level. Clients from Clearwater, Florida Park and Constantia Kloof rarely have to drive further to find quality permanent makeup — Sam is the closest trained PMU artist in this tier to this part of Johannesburg.",
    clienteleSentence:
      "Roodepoort clients often find Blade Boutique through Google after looking for microblading or dark lip treatment and discovering that the closest specialist at this quality level is at Bromhof.",
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
      "From Centurion, head south on the N1 towards Johannesburg. Exit at Bram Fischer Drive or William Nicol and follow into Northriding. Balance Wellness Centre is at 8 Tin Road, Bromhof. Allow 35 minutes during morning peak.",
    landmarks: ["Centurion Mall", "Irene Village", "SuperSport Park"],
    areaIntro:
      "Centurion sits between Pretoria and Johannesburg, drawing a growing professional and young-family demographic from the expanding residential estates. PMU demand in Centurion is rising — and the closest specialist studio with Sam's level of training and pigment range is at Blade Boutique, Bromhof.",
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
      "From Pretoria East and Brooklyn, head south on the N1 towards Johannesburg. Exit at Bram Fischer Drive or William Nicol and follow into Northriding. The studio is at Balance Wellness Centre, 8 Tin Road, Bromhof. Allow 45 minutes from Pretoria East during peak.",
    landmarks: ["Menlyn Park", "Brooklyn Mall", "Hatfield Square"],
    areaIntro:
      "Pretoria clients make the drive to Blade Boutique because Sam offers a standard of specialist PMU — particularly dark lip neutralisation and nano brows — that is difficult to find in the capital at the same level. Many book two services in one extended visit to make the trip worthwhile. Sam is happy to schedule a combined brow and lip appointment on request.",
    clienteleSentence:
      "Pretoria clients often combine a brow and lip service in a single extended appointment. Sam builds extra consultation time into these visits and sends a prep guide tailored to combined sessions.",
    servingBlurb:
      "Serving Pretoria East, Brooklyn, Hatfield, Menlyn, Faerie Glen, Garsfontein and surrounds.",
    nearbyLocations: ["centurion", "sandton"],
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
