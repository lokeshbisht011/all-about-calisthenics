import Link from "next/link";

export const metadata = {
  title: "Planche Hold Guide: Progressions, Time Targets & Common Mistakes",
  description:
    "Learn how long to hold each planche progression, proper form cues, and common mistakes. A complete planche hold guide for calisthenics athletes.",
  keywords: [
    "planche hold",
    "planche calisthenics",
    "planche progression",
    "planche hold time",
    "how long to hold planche",
  ],
};

export default function PlancheHoldGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* HERO */}
      <header className="mb-10">

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Planche Hold Guide: Progressions, Time Targets & Mistakes
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Holding a planche isn’t about surviving as long as possible. This guide
          explains what a proper planche hold is, how long you should hold each
          progression, and the mistakes that slow progress.
        </p>
      </header>

      {/* CONTENT */}
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-base leading-relaxed text-foreground">
          If you’re new to planche training, start with{" "}
          <Link
            href="/blogs/what-is-the-planche"
            className="font-medium underline underline-offset-4"
          >
            what the planche is
          </Link>{" "}
          and{" "}
          <Link
            href="/blogs/how-to-do-a-planche"
            className="font-medium underline underline-offset-4"
          >
            how to progress toward it
          </Link>{" "}
          before worrying about hold times.
        </p>

        {/* What is a planche hold */}
        <h2 className="text-2xl font-semibold tracking-tight">
          What Is a Planche Hold?
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          A planche hold is an isometric position where your body stays parallel
          to the ground while supported only by your hands, with arms fully
          locked and shoulders protracted.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Unlike dynamic exercises, planche holds train straight-arm strength,
          shoulder stability, and core tension simultaneously — which is why
          quality matters far more than duration.
        </p>

        {/* Time targets */}
        <h2 className="text-2xl font-semibold tracking-tight">
          How Long Should You Hold Each Planche Progression?
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          These are realistic targets used by experienced calisthenics athletes.
          If you can hold longer with perfect form, you’re likely ready to
          progress.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>
            <strong>Frog Stand:</strong> 20–30 seconds
          </li>
          <li>
            <strong>Tuck Planche:</strong> 10–20 seconds
          </li>
          <li>
            <strong>Advanced Tuck:</strong> 8–15 seconds
          </li>
          <li>
            <strong>Straddle Planche:</strong> 5–10 seconds
          </li>
          <li>
            <strong>Full Planche:</strong> 3–8 seconds
          </li>
        </ul>

        <p className="text-base leading-relaxed text-foreground">
          Being able to repeat these holds for multiple clean sets is more
          important than hitting a single long max hold.
        </p>

        {/* Form checklist */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Planche Hold Form Checklist
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Use this checklist every time you hold:
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>Arms completely locked (no elbow bend)</li>
          <li>Shoulders protracted (push the floor away)</li>
          <li>Posterior pelvic tilt (no arching)</li>
          <li>Body parallel to the floor</li>
          <li>Neutral head position</li>
        </ul>

        <p className="text-base leading-relaxed text-foreground">
          If one of these breaks down, the hold stops — even if you feel like you
          could keep going.
        </p>

        {/* Mistakes */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Common Planche Hold Mistakes
        </h2>

        <h3 className="text-xl font-semibold tracking-tight">
          ❌ Bent Arms
        </h3>
        <p className="text-base leading-relaxed text-foreground">
          Bent elbows turn the planche into a bent-arm strength skill and remove
          the straight-arm stimulus required for real planche progress.
        </p>

        <h3 className="text-xl font-semibold tracking-tight">
          ❌ Banana Back (Lower Back Arch)
        </h3>
        <p className="text-base leading-relaxed text-foreground">
          An arched lower back reduces shoulder load and shifts stress away from
          the correct muscles. This is one of the most common beginner mistakes.
        </p>

        <h3 className="text-xl font-semibold tracking-tight">
          ❌ Rushing Progressions
        </h3>
        <p className="text-base leading-relaxed text-foreground">
          Moving up before mastering a progression leads to poor form, plateaus,
          and elbow or shoulder pain.
        </p>

        {/* Longer holds myth */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Why Longer Holds ≠ Better Planche
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Holding a tuck planche for 60 seconds doesn’t automatically mean you’re
          close to a full planche.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Planche strength is about <strong>leverage</strong>, not endurance.
          Progressing to harder shapes with clean form builds more usable
          strength than chasing long holds in easy positions.
        </p>

        {/* Next steps */}
        <h2 className="text-2xl font-semibold tracking-tight">
          What to Train Next
        </h2>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>
            <Link
              href="/blogs/planche-workout-for-beginners"
              className="font-medium underline underline-offset-4"
            >
              Planche Workout for Beginners
            </Link>
          </li>
          <li>
            <Link
              href="/blogs/planche-push-ups"
              className="font-medium underline underline-offset-4"
            >
              Planche Push-Ups & Dynamic Progressions
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
