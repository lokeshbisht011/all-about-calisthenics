import Link from "next/link";

export const metadata = {
  title: "Planche Prerequisites: Are You Strong Enough?",
  description:
    "Before training the planche, test your push-ups, dips, handstands, core strength, and wrist mobility. Learn if you're ready for planche calisthenics.",
  keywords: [
    "planche prerequisites",
    "how to do planche",
    "planche calisthenics",
    "planche strength requirements",
  ],
};

export default function PlanchePrerequisites() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* HERO */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Planche Prerequisites: Are You Strong Enough?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Many athletes fail the planche not because of bad genetics, but because
          they skip the basics. Use this checklist to see if your body is ready
          for planche training.
        </p>
      </header>

      {/* CONTENT */}
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-base leading-relaxed text-foreground">
          If you’re new to the skill, start with{" "}
          <Link
            href="/blogs/what-is-the-planche"
            className="font-medium underline underline-offset-4"
          >
            what the planche is
          </Link>{" "}
          before diving into progressions. The planche is a straight-arm,
          shoulder-dominant skill that demands strong foundations.
        </p>

        <p className="text-base leading-relaxed text-foreground">
          Below are realistic benchmarks used by calisthenics and gymnastics
          coaches worldwide.
        </p>

        {/* Push-ups */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Push-Up Benchmark
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Push-ups test basic pushing strength and shoulder stability — both
          critical for planche calisthenics.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>30–40 clean push-ups</li>
          <li>Chest touches the ground</li>
          <li>Full lockout at the top</li>
        </ul>

        <p className="text-base leading-relaxed text-foreground">
          If this feels hard, focus on general pushing strength before starting{" "}
          <Link
            href="/blogs/how-to-do-a-planche"
            className="font-medium underline underline-offset-4"
          >
            planche progressions
          </Link>
          .
        </p>

        {/* Dips */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Dips Benchmark
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Dips build chest, shoulders, and straight-arm support strength —
          especially important for planche push variations.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>15–20 deep parallel bar dips</li>
          <li>Controlled tempo</li>
          <li>No shoulder pain</li>
        </ul>

        {/* Handstand */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Handstand Benchmark
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          While the handstand is a vertical push, it teaches shoulder control,
          balance, and wrist tolerance.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>30–60 second wall handstand</li>
          <li>Active shoulders (shrugged)</li>
          <li>Straight arms</li>
        </ul>

        <p className="text-base leading-relaxed text-foreground">
          If handstands feel unstable, your shoulders aren’t ready for long
          planche holds.
        </p>

        {/* Core */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Core Strength Test
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          The planche is a full-body skill. Weak core leads to banana back and
          stalled progress.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>45–60 second hollow body hold</li>
          <li>10–15 hanging leg raises</li>
          <li>Lower back stays flat</li>
        </ul>

        <p className="text-base leading-relaxed text-foreground">
          Learn why form matters in the{" "}
          <Link
            href="/blogs/planche-hold-guide"
            className="font-medium underline underline-offset-4"
          >
            planche hold guide
          </Link>
          .
        </p>

        {/* Wrist mobility */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Wrist Mobility Test
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Wrist pain is the number one reason people quit planche training early.
          Mobility and tolerance matter more than brute strength.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>Comfortable full wrist extension on the floor</li>
          <li>No pain during planche leans</li>
          <li>Can tolerate light loading for 30–60 seconds</li>
        </ul>

        {/* Verdict */}
        <h2 className="text-2xl font-semibold tracking-tight">
          So… Are You Ready for the Planche?
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          If you meet most of these benchmarks, you’re ready to start{" "}
          <Link
            href="/blogs/how-to-do-a-planche"
            className="font-medium underline underline-offset-4"
          >
            structured planche progressions
          </Link>{" "}
          and follow a proper{" "}
          <Link
            href="/blogs/best-planche-workout-for-beginners"
            className="font-medium underline underline-offset-4"
          >
            planche workout plan
          </Link>
          .
        </p>

        <p className="text-base leading-relaxed text-foreground">
          If not, that’s completely normal. Build your base first — your elbows
          and shoulders will thank you.
        </p>
      </div>
    </article>
  );
}
