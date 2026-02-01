import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";

export const metadata = {
  title: "Top Calisthenics Gyms in Delhi",
  description:
    "Discover the best calisthenics gyms in Delhi to build strength, learn skills, and train with a passionate fitness community.",
  keywords: [
    "calisthenics gyms delhi",
    "calisthenics delhi",
    "bodyweight training delhi",
    "street workout delhi",
  ],
  openGraph: {
    title: "Top Calisthenics Gyms in Delhi",
    description:
      "Discover Delhi's premier calisthenics gyms and academies to push your limits and join a thriving fitness community.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1592639296346-560c37a0f711",
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Top Calisthenics Gyms in Delhi
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Explore Delhi’s top calisthenics gyms and academies where you can build
          strength, master bodyweight skills, and train with a dedicated fitness
          community.
        </p>
      </header>

      <GymCard
        name="Workout Warriors Calisthenics Academy"
        image=""
        locations={[
          {
            label: "Bhalswa Jahangir Village",
            map: "https://maps.app.goo.gl/GxYq7VuHtV8oDUP9A",
          },
        ]}
        description="Workout Warriors Calisthenics Academy provides a dedicated training space for calisthenics enthusiasts in Delhi, focusing on strength, skills, and progressive bodyweight training."
        instagram="https://www.instagram.com/workout_warriors_official/"
      />

      <GymCard
        name="AlphaPack Calisthenics Academy"
        image=""
        locations={[
          {
            label: "Vikaspuri",
            map: "https://maps.app.goo.gl/3578q9ejzFLjrnau5",
          },
        ]}
        description="AlphaPack Calisthenics Academy is Delhi’s first official calisthenics centre, offering structured training programs for beginners and advanced athletes alike."
        instagram="https://www.instagram.com/alphapack.academy/"
      />

      <GymCard
        name="Indian Calisthenics Academy"
        image="https://static.wixstatic.com/media/d1d3b0_fdb11ce13e894877874dca5be470a2d6~mv2.png"
        locations={[
          {
            label: "Dwarka",
            map: "https://maps.app.goo.gl/xbDgr9t8krp3RyFR6",
          },
        ]}
        description="Founded by Siddharth Tyagi, winner of the Calisthenics World Cup 2019, Indian Calisthenics Academy focuses on promoting calisthenics as a sustainable and healthy lifestyle while supporting aspiring athletes."
        website="https://www.indiancalisthenicsacademy.in/"
        instagram="https://www.instagram.com/indian_calisthenics_academy/"
      />

      <GymCard
        name="Permafly"
        image="https://lh5.googleusercontent.com/p/AF1QipMsGT34vtfaHQT5i5Mv2r-z5XKnn-jt8h77LBeT"
        locations={[
          {
            label: "Shahdara",
            map: "https://maps.app.goo.gl/4TTYjkgABGYVK3ZZ6",
          },
        ]}
        description="Permafly is a pioneer academy in India offering calisthenics, gymnastics, parkour, and yoga training. Known for its unique movement-based training philosophy, it helps athletes achieve peak physical performance."
        website="https://www.permafly.in/"
        instagram="https://www.instagram.com/permaflydelhi/"
      />

      <MissingSpotCTA />
    </article>
  );
}
