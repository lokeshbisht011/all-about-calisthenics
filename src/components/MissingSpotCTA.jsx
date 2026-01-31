import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MissingSpotCTA() {
  return (
    <section className="mt-12 rounded-2xl border bg-muted/40 p-6 text-center">
      <h3 className="text-xl font-semibold">Missing a Calisthenics Spot?</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Know a gym, park, or training spot we haven't listed yet? Help the
        community by submitting it.
      </p>

      <Button
        className="mt-4"
        data-tally-open="Gxldle"
        data-tally-layout="modal"
        data-tally-width="600"
        data-tally-prefill-city="Bangalore"
        data-tally-prefill-source="calisthenics-gyms-blog"
      >
        Submit a Spot
      </Button>
    </section>
  );
}
