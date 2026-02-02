import Link from "next/link";

export const metadata = {
  title: "Best Planche Workout for Beginners (3-4 Days per Week)",
  description:
    "A simple 3-4 day planche workout for beginners. Build straight-arm strength, improve shoulder stability, and progress safely in planche calisthenics.",
  keywords: [
    "planche workout",
    "planche calisthenics workout",
    "planche workout for beginners",
    "planche training routine",
  ],
};

export default function BestPlancheWorkoutForBeginners() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* HERO */}
      <header className="mb-14">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          Best Planche Workout for Beginners (3–4 Days/Week)
        </h1>

        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          This beginner-friendly planche workout focuses on straight-arm
          strength, shoulder stability, and core control — without overtraining
          your joints.
        </p>
      </header>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-foreground mb-6">
        If you’re new to planche training, first understand{" "}
        <Link
          href="/blogs/what-is-the-planche"
          className="font-medium underline underline-offset-4"
        >
          what a planche is
        </Link>{" "}
        and follow a proper{" "}
        <Link
          href="/blogs/planche-hold-guide"
          className="font-medium underline underline-offset-4"
        >
          planche hold progression
        </Link>{" "}
        before jumping into intense workouts.
      </p>

      {/* CALLOUT */}
      <div className="mb-12 rounded-xl border bg-muted/40 p-5">
        <p className="text-sm leading-relaxed">
          ⚠️ <strong>Beginner rule:</strong> If your elbows bend or shoulders
          shrug during holds, the progression is too hard. Regress and rebuild
          strength first.
        </p>
      </div>

      {/* WEEKLY SPLIT */}
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Weekly Planche Workout Split (Simple)
      </h2>

      <p className="text-base leading-relaxed mb-4">
        Beginners progress best with{" "}
        <strong>3–4 focused sessions per week</strong>. Straight-arm strength
        adapts slowly, so recovery days are essential.
      </p>

      <ul className="mb-6 space-y-2 text-base">
        <li>
          <strong>3 Days/Week:</strong> Monday – Wednesday – Friday
        </li>
        <li>
          <strong>4 Days/Week:</strong> Upper / Rest / Upper / Rest / Upper
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-12">
        Always keep at least one rest day between hard planche sessions to
        protect your shoulders and elbows.
      </p>

      {/* WARM-UP */}
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Warm-Up (10–12 Minutes)
      </h2>

      <p className="text-base leading-relaxed mb-6">
        Never skip your warm-up. Planche training places extreme stress on the
        wrists, elbows, and shoulders.
      </p>

      <div className="mb-12 rounded-xl border p-5">
        <ul className="space-y-2 text-sm">
          <li>• Wrist circles & palm pulses – 2 minutes</li>
          <li>• Scapular push-ups – 2 × 10</li>
          <li>• Band shoulder openers – 2 × 15</li>
          <li>• Planche leans – 2 × 20–30 sec</li>
        </ul>
      </div>

      {/* MAIN WORK */}
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Main Planche Strength Work
      </h2>

      <p className="text-base leading-relaxed mb-6">
        Choose the hardest progression you can hold with perfect form for{" "}
        <strong>8–15 seconds</strong>. Stop the set immediately if form breaks.
      </p>

      <div className="mb-8 rounded-xl border p-5">
        <ul className="space-y-2 text-sm">
          <li>• Tuck planche holds – 4 × 8–15 sec</li>
          <li>• Advanced tuck holds – 3 × 8–12 sec</li>
          <li>• Planche leans – 3 × 20–30 sec</li>
        </ul>
      </div>

      <p className="text-base leading-relaxed mb-12">
        Rest <strong>90–120 seconds</strong> between sets. Focus on shoulder
        protraction and locked elbows.
      </p>

      {/* ACCESSORIES */}
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Accessory Work (Scapula & Core)
      </h2>

      <p className="text-base leading-relaxed mb-6">
        Accessories strengthen the weak links that limit planche progress —
        mainly the scapula and core.
      </p>

      <h3 className="text-xl font-semibold mb-3">Scapula</h3>
      <ul className="mb-8 space-y-2 text-sm border rounded-lg p-4">
        <li>• Scapular dips – 3 × 10</li>
        <li>• Band face pulls – 3 × 15</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Core</h3>
      <ul className="mb-12 space-y-2 text-sm border rounded-lg p-4">
        <li>• Hollow body holds – 3 × 30 sec</li>
        <li>• Hanging knee raises – 3 × 10–12</li>
      </ul>

      {/* RECOVERY */}
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Rest Days & Recovery
      </h2>

      <p className="text-base leading-relaxed mb-6">
        Planche calisthenics stresses tendons more than muscles. Recovery is part
        of the program — not optional.
      </p>

      <ul className="mb-12 space-y-2 text-base">
        <li>• Sleep 7–9 hours per night</li>
        <li>• Light wrist mobility on rest days</li>
        <li>• Avoid max-effort holds every session</li>
      </ul>

      {/* NEXT STEPS */}
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        What to Do Next
      </h2>

      <ul className="space-y-3 text-base">
        <li>
          <Link
            href="/blogs/how-to-do-a-planche"
            className="font-medium underline underline-offset-4"
          >
            Step-by-Step Planche Progression
          </Link>
        </li>
        <li>
          <Link
            href="/blogs/planche-push-ups"
            className="font-medium underline underline-offset-4"
          >
            Planche Push-Ups & Dynamic Strength
          </Link>
        </li>
      </ul>
    </article>
  );
}
