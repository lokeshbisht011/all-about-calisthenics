import CoachingBanner from "@/components/CoachingBanner";
import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";

export const metadata = {
  title: "Best Calisthenics Gyms in Hyderabad",
  description:
    "Discover the top calisthenics gyms in Hyderabad to build strength, learn skills, and train with a passionate fitness community.",
  keywords: [
    "calisthenics gyms hyderabad",
    "calisthenics hyderabad",
    "bodyweight training hyderabad",
    "street workout hyderabad",
  ],
  openGraph: {
    title: "Best Calisthenics Gyms in Hyderabad",
    description:
      "Discover the top calisthenics gyms in Hyderabad to build strength and join a vibrant fitness community.",
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <CoachingBanner />
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Best Calisthenics Gyms in Hyderabad
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Explore the best calisthenics gyms in Hyderabad where you can build strength,
          master skills, and train alongside a dedicated fitness community.
        </p>
      </header>

      <GymCard
        name="Calisthenics Lab India"
        image="https://lh3.googleusercontent.com/p/AF1QipOiTzfZrzguoFvPQ4AfOIfp7vQqONbMrXUGTOc7=w426-h240-k-no"
        locations={[
          {
            label: "Kondapur",
            map: "https://maps.app.goo.gl/GrzDypG9kbavj8Nk6",
          },
        ]}
        description="This gym has International Level Coaches and has premium space for Calisthenics, Zumba, Yoga and Animal Flow."
        instagram="https://www.instagram.com/calisthenics.lab.india/"
      />

      <GymCard
        name="Indian Calisthenics Chamber - ICC"
        image="https://lh3.googleusercontent.com/p/AF1QipO2m3xzou3ZgwtJOdYVmk8wxTeDG-vkUsv7EPe5=w408-h272-k-no"
        locations={[
          {
            label: "Madhapur",
            map: "https://maps.app.goo.gl/sn5cRv6Ds7BTGKpD7",
          },
        ]}
        description="Learn from national level calisthenics athletes."
        instagram="https://www.instagram.com/icc_hyderabad/"
      />

      <GymCard
        name="Kratos Calisthenics Arena"
        image="https://jekmupbkimxtsqgdwamt.supabase.co/storage/v1/object/public/media/1751215124166-9gj5esxrc5r.jpg"
        locations={[
          {
            label: "Kondapur",
            map: "https://maps.app.goo.gl/oaZgJrF9uPRti1tv5",
          },
        ]}
        description="Unleash Your Inner Warrior at Kratos Calisthenics Arena Step into Hyderabad's premier bodyweight training hub, where strength meets discipline. Whether you're a beginner or a pro, their expert coaches and community-driven environment will push you to become your strongest self — no machines, just pure movement."
        website="https://kratoscaliarena.com/"
        instagram="https://www.instagram.com/kratoscaliarena"
      />

      <GymCard
        name="Raw Strength Calisthenics"
        image=""
        locations={[
          {
            label: "Madhapur",
            map: "https://maps.app.goo.gl/kUuXPJfDcnvupMQi8",
          },
        ]}
        description=""
        instagram="https://www.instagram.com/rawstrength_calisthenics"
      />

      <GymCard
        name="Limitless Strength"
        image=""
        locations={[
          {
            label: "Gandhi Nagar",
            map: "https://maps.app.goo.gl/inTNFiBT2Mevdr1X6",
          },
        ]}
        description="STRENGTH BEYOND LIMITS. Hybrid Training | Strength x Calisthenics. Muscle Building • Fat Loss • Performance."
        instagram="https://www.instagram.com/limitless_strength__/"
      />

      <MissingSpotCTA />
    </article>
  );
}
