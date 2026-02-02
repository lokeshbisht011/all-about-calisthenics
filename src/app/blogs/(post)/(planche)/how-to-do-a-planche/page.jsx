import Link from "next/link";

export const metadata = {
  title: "How to Do a Planche: Step-by-Step Progression Guide",
  description:
    "Learn how to do a planche with proper progressions, prerequisites, and tips. A beginner-friendly step-by-step guide to mastering the planche in calisthenics.",
  keywords: [
    "how to do planche",
    "planche progression",
    "planche calisthenics",
    "planche for beginners",
    "planche hold",
  ],
};

export default function HowToDoAPlanchePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* HERO */}
      <header className="mb-12">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          How to Do a Planche (Step-by-Step Progression)
        </h1>

        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          The planche is built through progressions — not shortcuts. This guide
          breaks down exactly how to do a planche, from prerequisites and joint
          prep to each progression step, so you can train safely and effectively.
        </p>
      </header>

      {/* INTRO */}
      <p className="text-base leading-relaxed text-foreground mb-10">
        If you’re new to the skill, make sure you understand{" "}
        <Link
          href="/blogs/what-is-the-planche"
          className="text-primary underline underline-offset-4"
        >
          what the planche is and why it’s so challenging
        </Link>{" "}
        before jumping into training.
      </p>

      {/* PREREQUISITES */}
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        Planche Prerequisites (Strength + Mobility)
      </h2>

      <p className="text-base leading-relaxed mb-4">
        Before attempting serious planche training, you should already have a
        solid foundation of straight-arm strength and shoulder control.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li className="text-base leading-relaxed">
          20–30 seconds plank with strong posterior pelvic tilt
        </li>
        <li className="text-base leading-relaxed">
          15–20 push-ups with clean form
        </li>
        <li className="text-base leading-relaxed">
          30+ seconds hollow body hold
        </li>
        <li className="text-base leading-relaxed">
          Basic scapular control (protraction & depression)
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-12">
        These don’t guarantee a planche — but skipping them almost guarantees
        injury or stagnation.
      </p>

      {/* WRIST + SHOULDER PREP */}
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        Wrist & Shoulder Preparation (Do Not Skip)
      </h2>

      <p className="text-base leading-relaxed mb-4">
        The wrists and shoulders take extreme load during planche training.
        Proper preparation allows you to train consistently without pain.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-12">
        <li className="text-base leading-relaxed">
          Wrist circles, pulses, and palm lifts
        </li>
        <li className="text-base leading-relaxed">
          Planche leans with bent arms (warm-up)
        </li>
        <li className="text-base leading-relaxed">
          Scapular push-ups
        </li>
        <li className="text-base leading-relaxed">
          Band or wall shoulder mobility drills
        </li>
      </ul>

      {/* PROGRESSIONS */}
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        Planche Progressions (In Order)
      </h2>

      <p className="text-base leading-relaxed mb-10">
        The planche is trained through progressive leverage changes. Master
        each level before moving on.
      </p>

      {/* FROG */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        1. Frog Stand
      </h3>

      <p className="text-base leading-relaxed mb-4">
        The frog stand introduces you to balancing your bodyweight on your
        hands while leaning forward.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-10">
        <li className="text-base leading-relaxed">
          Elbows bent, knees resting on arms
        </li>
        <li className="text-base leading-relaxed">
          Focus on balance and wrist comfort
        </li>
        <li className="text-base leading-relaxed">
          Goal: 20–30 seconds
        </li>
      </ul>

      {/* TUCK */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        2. Tuck Planche
      </h3>

      <p className="text-base leading-relaxed mb-4">
        The tuck planche is your first true planche variation with feet off
        the ground and arms straight.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-10">
        <li className="text-base leading-relaxed">
          Knees tucked to chest
        </li>
        <li className="text-base leading-relaxed">
          Arms locked, shoulders protracted
        </li>
        <li className="text-base leading-relaxed">
          Goal: 10–20 seconds
        </li>
      </ul>

      {/* ADV TUCK */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        3. Advanced Tuck Planche
      </h3>

      <p className="text-base leading-relaxed mb-4">
        This variation increases leverage by opening the hips while keeping
        knees bent.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-10">
        <li className="text-base leading-relaxed">
          Hips more open, back flatter
        </li>
        <li className="text-base leading-relaxed">
          Significantly more shoulder demand
        </li>
        <li className="text-base leading-relaxed">
          Goal: 8–15 seconds
        </li>
      </ul>

      {/* STRADDLE */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        4. Straddle Planche
      </h3>

      <p className="text-base leading-relaxed mb-4">
        The straddle planche reduces leverage slightly by spreading the legs,
        making it a common step before the full planche.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-10">
        <li className="text-base leading-relaxed">
          Legs wide, body parallel to floor
        </li>
        <li className="text-base leading-relaxed">
          Requires strong hip and core control
        </li>
        <li className="text-base leading-relaxed">
          Goal: 5–10 seconds
        </li>
      </ul>

      {/* FULL */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        5. Full Planche
      </h3>

      <p className="text-base leading-relaxed mb-4">
        The full planche is the final form — legs together, body completely
        horizontal, supported only by straight arms.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-12">
        <li className="text-base leading-relaxed">
          Maximum shoulder and core demand
        </li>
        <li className="text-base leading-relaxed">
          No bend in arms or hips
        </li>
        <li className="text-base leading-relaxed">
          Even a 3–5 second hold is elite
        </li>
      </ul>

      {/* WHEN TO MOVE */}
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        When Should You Move to the Next Level?
      </h2>

      <p className="text-base leading-relaxed mb-4">
        Advancing too early is one of the biggest mistakes in planche training.
        Use these rules before progressing:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-12">
        <li className="text-base leading-relaxed">
          You can hold the progression for at least 10–15 seconds
        </li>
        <li className="text-base leading-relaxed">
          Your arms stay fully locked
        </li>
        <li className="text-base leading-relaxed">
          No elbow or shoulder pain
        </li>
        <li className="text-base leading-relaxed">
          You can repeat the hold for multiple sets
        </li>
      </ul>

      {/* NEXT */}
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        What to Train Next
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li className="text-base leading-relaxed">
          <Link
            href="/blogs/planche-hold-guide"
            className="text-primary underline underline-offset-4"
          >
            Planche Hold Guide (Sets, Time & Frequency)
          </Link>
        </li>
        <li className="text-base leading-relaxed">
          <Link
            href="/blogs/planche-workout-for-beginners"
            className="text-primary underline underline-offset-4"
          >
            Planche Workout for Beginners
          </Link>
        </li>
      </ul>
    </article>
  );
}
