export const WHATSAPP_NUMBER = "27724111476";

const SITE = "bladeboutique.co.za";

type HeroContext = { context: "hero" };
type ServiceContext = {
  context: "service";
  service: string;
  slug: string;
  price?: string;
};
type FormContext = {
  context: "form";
  name: string;
  service: string;
  preferredDate?: string;
  email?: string;
  phone?: string;
  message?: string;
};
type GenericContext = { context: "generic"; message: string };

export type WhatsAppContext =
  | HeroContext
  | ServiceContext
  | FormContext
  | GenericContext;

export function buildWhatsAppMessage(ctx: WhatsAppContext): string {
  switch (ctx.context) {
    case "hero":
      return `Hi Sam, I'd like to book a consultation. Sent from ${SITE}`;
    case "service":
      return `Hi Sam, I'd like to book ${ctx.service}${
        ctx.price ? ` (from ${ctx.price})` : ""
      }. Sent from ${SITE}/services/${ctx.slug}`;
    case "form": {
      const lines = [
        `Hi Sam, I'd like to book ${ctx.service}.`,
        `Name: ${ctx.name}`,
        ctx.preferredDate ? `Preferred date: ${ctx.preferredDate}` : null,
        ctx.phone ? `Phone: ${ctx.phone}` : null,
        ctx.email ? `Email: ${ctx.email}` : null,
        ctx.message ? `\n${ctx.message}` : null,
        `\nSent from ${SITE}/book`,
      ].filter(Boolean);
      return lines.join("\n");
    }
    case "generic":
      return ctx.message;
  }
}

export function whatsappLink(ctx: WhatsAppContext): string {
  const text = encodeURIComponent(buildWhatsAppMessage(ctx));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
