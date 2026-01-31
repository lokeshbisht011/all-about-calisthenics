import Image from "next/image";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";

export const metadata = {
  title:
    "Calisthenics for Kids: Fun and Effective Exercises for Growing Bodies",
  description:
    "Discover how calisthenics can be a fun and effective way for kids to stay active and healthy. Explore bodyweight exercises for children that promote strength, coordination, and fitness.",
  keywords: [
    "calisthenics for kids",
    "kids fitness",
    "bodyweight exercises children",
    "healthy kids workouts",
  ],
  openGraph: {
    title:
      "Calisthenics for Kids: Fun and Effective Exercises for Growing Bodies",
    description:
      "Discover how calisthenics can be a fun and effective way for kids to stay active and healthy. Explore bodyweight exercises for children that promote strength, coordination, and fitness.",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1684581969661-60e7249a51d1?w=800&auto=format&fit=crop&q=60",
      },
    ],
  },
};

export default function CalisthenicsForKids() {
  const exercises = [
    {
      name: "Jumping Jacks",
      steps: [
        "Start with feet together and arms by your sides.",
        "Jump while spreading your legs and raising your arms overhead.",
        "Return to the starting position and repeat.",
      ],
      benefits:
        "Improve cardiovascular fitness, coordination, and endurance. Develop rhythm and timing.",
    },
    {
      name: "Bear Crawls",
      steps: [
        "Start on your hands and knees with your hips raised.",
        "Crawl forward using your hands and feet while keeping your knees off the ground.",
        "Move in different directions for variety.",
      ],
      benefits:
        "Strengthen core, shoulders, and legs while enhancing coordination and balance.",
    },
    {
      name: "Monkey Bars",
      steps: [
        "Find a set of monkey bars or a sturdy horizontal bar.",
        "Grip the bar with both hands and swing from one end to the other.",
        "Use your legs to help propel yourself forward.",
      ],
      benefits:
        "Build upper body strength, grip strength, and improve hand-eye coordination.",
    },
    {
      name: "Frog Jumps",
      steps: [
        "Start in a squat position with your hands on the ground.",
        "Jump forward as far as you can, landing softly and returning to the squat position.",
        "Repeat the jumps.",
      ],
      benefits:
        "Enhance leg strength, power, and explosive movement while improving coordination.",
    },
    {
      name: "Plank Holds",
      steps: [
        "Start in a push-up position with your body in a straight line.",
        "Hold the position, keeping your core engaged and hips level.",
        "Gradually increase the hold time.",
      ],
      benefits:
        "Strengthen core, shoulders, and back; promote good posture and stability.",
    },
    {
      name: "Wall Sits",
      steps: [
        "Stand with your back against a wall and slide down until your knees are at a 90-degree angle.",
        "Hold the position as long as you can.",
        "Slide back up to stand.",
      ],
      benefits:
        "Build leg strength and endurance, focusing on quadriceps, hamstrings, and glutes.",
    },
    {
      name: "High Knees",
      steps: [
        "Stand with feet hip-width apart.",
        "Alternate lifting your knees as high as possible while jogging in place.",
        "Swing your arms to match the movement.",
      ],
      benefits:
        "Improve cardiovascular fitness, leg strength, and coordination.",
    },
  ];

  const tips = [
    "Keep it fun: Turn exercises into games or challenges to maintain interest.",
    "Safety first: Ensure a safe environment and supervise children to prevent injuries.",
    "Incorporate play: Combine calisthenics with active playtime like obstacle courses or relay races.",
    "Encourage consistency: Establish a regular routine alongside other physical activities.",
    "Celebrate achievements: Recognize milestones to boost motivation and confidence.",
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Calisthenics for Kids: Fun and Effective Exercises for Growing Bodies
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Encourage your kids to stay active and build strength, coordination,
          and confidence with these fun calisthenics exercises.
        </p>
        <div className="relative w-full h-[400px] border border-white/20 rounded-lg overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1684581969661-60e7249a51d1?w=800&auto=format&fit=crop&q=60"
            alt="Calisthenics for Kids"
            className="object-cover"
            fill
          />
        </div>
      </header>

      {/* Why Calisthenics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Why Calisthenics is Great for Kids
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Bodyweight training builds strength, coordination, and flexibility
            safely.
          </li>
          <li>Fun and engaging exercises keep kids motivated.</li>
          <li>Develops essential motor skills for everyday life.</li>
          <li>
            Promotes healthy habits and a positive attitude toward fitness.
          </li>
        </ul>
      </section>

      {/* Exercises */}
      <section className="">
        <h2 className="text-2xl font-semibold">Fun and Effective Exercises</h2>
        {exercises.map((exercise, index) => (
          <div
            key={exercise.name}
            className="border border-white/20 rounded-lg p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold">
              {index + 1}. {exercise.name}
            </h3>
            <p className="italic">{exercise.benefits}</p>
            <ol className="list-decimal list-inside space-y-1">
              {exercise.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      {/* Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Tips for a Successful Routine
        </h2>
        <ul className="space-y-2 list-none">
          {tips.map((tip, idx) => {
            const [label, ...desc] = tip.split(":");
            return (
              <li
                key={idx}
                className="before:content-['•'] before:text-blue-500 before:mr-2"
              >
                <span className="font-semibold">{label}:</span>{" "}
                {desc.join(":").trim()}
              </li>
            );
          })}
        </ul>
      </section>

      {/* New Sections */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Creating a Fun Calisthenics Routine for Kids
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Start with short sessions of 15–20 minutes, gradually increasing as
            kids build endurance.
          </li>
          <li>Mix different exercises to keep variety and excitement high.</li>
          <li>
            Include playful warm-ups and cooldowns with stretching to prevent
            injuries.
          </li>
          <li>
            Rotate exercises each day to target different muscle groups and
            maintain interest.
          </li>
          <li>
            Use music, timers, or simple challenges to make routines more
            engaging and enjoyable for children.
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Motivating Kids to Stay Active
        </h2>
        <ul className="list-none list-inside space-y-2">
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Set achievable goals and celebrate accomplishments.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Participate in workouts together as a family or group.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Introduce fun challenges or mini competitions with rewards.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Provide positive feedback and encouragement consistently.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Let kids track progress visually with charts, stickers, or apps.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Safety Tips for Kids' Calisthenics Workouts
        </h2>
        <ul className="list-none list-inside space-y-2">
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Ensure exercises are done in a safe space with no sharp or hard
            objects nearby.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Supervise children at all times to maintain proper form and prevent
            falls.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Use soft mats or grass surfaces for exercises like crawling,
            jumping, or balancing.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Encourage breaks and hydration to avoid fatigue or overexertion.
          </li>
          <li className="before:content-['•'] before:text-blue-500 before:mr-2">
            Introduce exercises progressively; avoid advanced movements until
            strength and coordination are developed.
          </li>
        </ul>
      </section>

      <section>
        <p>
          Calisthenics offers a fun and effective way for kids to stay active
          and healthy. By incorporating bodyweight exercises into their
          routines, children develop strength, coordination, and flexibility
          while enjoying the process.
        </p>
        <p>
          Whether through playful activities or structured routines,
          calisthenics helps kids build a foundation for lifelong fitness and
          well-being.
        </p>
      </section>

      <MissingSpotCTA />
    </article>
  );
}
