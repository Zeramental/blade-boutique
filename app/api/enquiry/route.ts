import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, preferred_date, message, source } = body;

    if (!name || !phone || !service) {
      return Response.json({ ok: false, error: "missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("enquiries").insert({
      name,
      phone,
      email: email || null,
      service,
      preferred_date: preferred_date || null,
      message: message || null,
      source: source ?? "website",
    });

    if (error) {
      console.error("[enquiry] Supabase insert failed:", error.message);
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
