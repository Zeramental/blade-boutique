"use client";

import { useEffect } from "react";
import { gtagEvent } from "@/lib/analytics";

export function PageViewTracker({
  event,
  params,
}: {
  event: string;
  params?: Record<string, string | number | boolean>;
}) {
  useEffect(() => {
    gtagEvent(event, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
