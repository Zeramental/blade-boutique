import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_type, page, utm_campaign, utm_content, utm_term, utm_device } = body;

    if (!event_type) return Response.json({ ok: false, error: "missing event_type" }, { status: 400 });

    const referrer = req.headers.get("referer") ?? null;

    await supabase.from("bb_events").insert({
      event_type,
      page: page ?? null,
      utm_campaign: utm_campaign ?? null,
      utm_content: utm_content ?? null,
      utm_term: utm_term ?? null,
      utm_device: utm_device ?? null,
      referrer,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
