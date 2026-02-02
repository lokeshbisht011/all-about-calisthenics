import Link from "next/link";

export const metadata = {
  title:
    "What Is the Planche? Complete Beginner’s Guide | All About Calisthenics",
  description:
    "Learn what the planche is, why it’s so hard, muscles used, and whether beginners can achieve it. A complete beginner-friendly guide to planche calisthenics.",
  keywords: [
    "what is planche",
    "planche calisthenics",
    "planche hold",
    "planche for beginners",
    "calisthenics planche",
  ],
};

export default function WhatIsThePlanchePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* HERO */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          What Is the Planche? (Complete Beginner’s Guide)
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          The planche is one of the most iconic and difficult calisthenics
          skills. In this guide, you’ll learn what the planche really is, why
          it’s so hard, what muscles it uses, and whether beginners can
          realistically achieve it.
        </p>
      </header>

      {/* CONTENT */}
      <div className="space-y-8">
        {/* What is the planche */}
        <h2 className="text-2xl font-semibold tracking-tight">
          What Is the Planche?
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          The <strong>planche</strong> is a bodyweight strength skill where you
          hold your body completely parallel to the ground, supported only by
          your hands, with your feet lifted off the floor.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Your arms stay straight, your shoulders lean forward, and your core,
          shoulders, chest, and arms work together to keep your body rigid like
          a plank — except your feet never touch the ground.
        </p>

        {/* Why so hard */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Why Is the Planche So Hard?
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          The planche is difficult because it places your entire bodyweight far
          in front of your hands, creating massive leverage against your
          shoulders and core.
        </p>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>Extreme shoulder strength is required</li>
          <li>Straight-arm strength (not bent-arm pushing)</li>
          <li>High core and glute tension</li>
          <li>Excellent body awareness and balance</li>
        </ul>
        <p className="text-base leading-relaxed text-foreground">
          Unlike push-ups or dips, you can’t cheat the planche with momentum.
          Every second is pure strength and control.
        </p>

        {/* Gymnastics vs calisthenics */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Planche in Gymnastics vs Calisthenics
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          In <strong>gymnastics</strong>, the planche is a foundational strength
          element performed on the floor or rings, often by athletes who start
          training very young.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          In <strong>calisthenics</strong>, the planche is treated as a high-level
          skill that athletes work toward using progressions like tuck planche,
          advanced tuck, and straddle planche.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          The main difference isn’t the skill — it’s the training path. Modern
          calisthenics makes the planche more accessible through structured
          progressions.
        </p>

        {/* Muscles */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Muscles Used in the Planche
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          The planche is a full-body skill, but these muscles do most of the
          work:
        </p>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>
            <strong>Shoulders (anterior delts)</strong> – primary driver
          </li>
          <li>
            <strong>Chest</strong> – assists shoulder stability
          </li>
          <li>
            <strong>Triceps</strong> – straight-arm support
          </li>
          <li>
            <strong>Core</strong> – prevents hips from dropping
          </li>
          <li>
            <strong>Glutes</strong> – keeps the body aligned
          </li>
          <li>
            <strong>Wrist flexors</strong> – handle heavy loading
          </li>
        </ul>

        {/* Beginners */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Is the Planche Realistic for Beginners?
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          A full planche is <strong>not realistic for beginners</strong> — but
          training for it absolutely is.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Beginners should focus on:
        </p>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>Planche leans</li>
          <li>Tuck planche holds</li>
          <li>Core and shoulder conditioning</li>
        </ul>
        <p className="text-base leading-relaxed text-foreground">
          With consistent training, most people can build toward advanced
          progressions over time — regardless of age or body type.
        </p>

        {/* Myths */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Common Planche Myths
        </h2>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>
            ❌ <strong>Only light people can do a planche</strong> — strength-to-
            weight ratio matters more than body weight alone.
          </li>
          <li>
            ❌ <strong>You need insane genetics</strong> — progressions and smart
            programming matter more.
          </li>
          <li>
            ❌ <strong>Planche is bad for your shoulders</strong> — poor technique
            is the real problem.
          </li>
        </ul>

        {/* Internal links */}
        <h2 className="text-2xl font-semibold tracking-tight">
          What to Read Next
        </h2>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>
            <Link
              href="/blogs/how-to-do-a-planche"
              className="font-medium underline underline-offset-4"
            >
              How to Do a Planche (Step-by-Step Guide)
            </Link>
          </li>
          <li>
            <Link
              href="/blogs/planche-prerequisites"
              className="font-medium underline underline-offset-4"
            >
              Planche Prerequisites You Must Master First
            </Link>
          </li>
          <li>
            <Link
              href="/blogs/planche-workout-for-beginners"
              className="font-medium underline underline-offset-4"
            >
              Planche Workout for Beginners
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

