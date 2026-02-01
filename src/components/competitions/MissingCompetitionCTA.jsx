import { Button } from "@/components/ui/button";

export function MissingCompetitionCTA() {
  return (
    <section className="mt-12 rounded-2xl border bg-muted/40 p-6 text-center">
      <h3 className="text-xl font-semibold">
        Missing a Calisthenics Competition?
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Know about an upcoming or past calisthenics competition we haven’t
        listed yet? Help the community by submitting it.
      </p>

      <Button
        className="mt-4"
        data-tally-open="D4z1kZ"
        data-tally-layout="modal"
        data-tally-width="600"
        data-tally-prefill-source="calisthenics-competitions"
      >
        Submit a Competition
      </Button>
    </section>
  );
}
