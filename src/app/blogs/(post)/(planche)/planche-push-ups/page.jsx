import Link from "next/link";

export const metadata = {
  title: "Planche Push-Ups: How to Build Strength Safely",
  description:
    "Learn what planche push-ups are, who should attempt them, safe progressions, and how to build planche push-up strength without injury.",
  keywords: [
    "planche pushups",
    "planche push ups calisthenics",
    "planche push-up progression",
    "planche strength training",
  ],
};

export default function PlanchePushUps() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* HERO */}
      <header className="mb-10">
        
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Planche Push-Ups: How to Build Strength Safely
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Planche push-ups are one of the hardest pushing movements in
          calisthenics. This guide breaks down who should train them, how to
          progress safely, and how to avoid common mistakes.
        </p>
      </header>

      {/* CONTENT */}
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-base leading-relaxed text-foreground">
          Before attempting planche push-ups, you should already understand{" "}
          <Link
            href="/blogs/what-is-the-planche"
            className="font-medium underline underline-offset-4"
          >
            what the planche is
          </Link>{" "}
          and be comfortable with your current{" "}
          <Link
            href="/blogs/planche-hold-guide"
            className="font-medium underline underline-offset-4"
          >
            planche hold progression
          </Link>
          . Dynamic planche work builds on static strength — not the other way
          around.
        </p>

        {/* What are planche push-ups */}
        <h2 className="text-2xl font-semibold tracking-tight">
          What Are Planche Push-Ups?
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Planche push-ups are a dynamic calisthenics movement where you perform
          a push-up while maintaining a planche position. Your arms stay straight
          at the top, shoulders remain protracted, and your body stays parallel
          to the ground.
        </p>

        <p className="text-base leading-relaxed text-foreground">
          Unlike normal push-ups, planche push-ups heavily load the shoulders,
          biceps (straight-arm strength), chest, and core.
        </p>

        {/* Who should attempt */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Who Should Attempt Planche Push-Ups (And Who Shouldn’t)
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          This exercise is not for beginners. Attempting it too early is one of
          the fastest ways to develop elbow or shoulder pain.
        </p>

        <h3 className="text-xl font-semibold tracking-tight">
          You should attempt planche push-ups if:
        </h3>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>You can hold a solid tuck or advanced tuck planche</li>
          <li>You have pain-free wrists, elbows, and shoulders</li>
          <li>You already train straight-arm strength regularly</li>
        </ul>

        <h3 className="text-xl font-semibold tracking-tight">
          You should avoid them if:
        </h3>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>You cannot hold any planche progression yet</li>
          <li>You feel elbow or shoulder discomfort during leans</li>
          <li>You skip warm-ups or recovery work</li>
        </ul>

        {/* Progressions */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Planche Push-Up Progressions
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Always master each step before moving forward. Rushing progressions
          increases injury risk without speeding up results.
        </p>

        <h3 className="text-xl font-semibold tracking-tight">
          1. Lean Push-Ups
        </h3>
        <p className="text-base leading-relaxed text-foreground">
          Lean forward at the top of a push-up to shift your shoulders past your
          wrists. This builds tolerance for planche loading.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>3–4 sets of 8–12 reps</li>
          <li>Focus on shoulder protraction</li>
        </ul>

        <h3 className="text-xl font-semibold tracking-tight">
          2. Pseudo Planche Push-Ups
        </h3>
        <p className="text-base leading-relaxed text-foreground">
          Place your hands closer to your hips and lean forward throughout the
          entire push-up. These are the foundation for planche push-ups.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>4 sets of 5–8 reps</li>
          <li>Elbows locked at the top</li>
        </ul>

        <h3 className="text-xl font-semibold tracking-tight">
          3. Tuck Planche Push-Ups
        </h3>
        <p className="text-base leading-relaxed text-foreground">
          Perform push-ups while holding a tuck planche position. This is the
          first true planche push-up variation.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>3–5 sets of 3–5 reps</li>
          <li>Full control on every rep</li>
        </ul>

        {/* Volume */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Volume Recommendations
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          Dynamic planche work is extremely demanding. Less volume usually
          produces better results.
        </p>

        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>Train planche push-ups 1–2 times per week</li>
          <li>Stop 1–2 reps before failure</li>
          <li>Pair with static holds, not max sets</li>
        </ul>

        <p className="text-base leading-relaxed text-foreground">
          If your planche holds start regressing, your volume is too high.
        </p>

        {/* Next steps */}
        <h2 className="text-2xl font-semibold tracking-tight">
          What to Read Next
        </h2>
        <ul className="ml-5 list-disc space-y-2 text-base text-foreground">
          <li>
            <Link
              href="/blogs/how-to-do-a-planche"
              className="font-medium underline underline-offset-4"
            >
              How to Do a Planche (Step-by-Step Progression)
            </Link>
          </li>
          <li>
            <Link
              href="/blogs/best-planche-workout-for-beginners"
              className="font-medium underline underline-offset-4"
            >
              Best Planche Workout for Beginners
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
