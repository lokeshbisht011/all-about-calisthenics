import CoachingBanner from "@/components/CoachingBanner";
import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";
import { gyms as gymsData } from "@/lib/gymsData";

export const metadata = {
  title: "Best Calisthenics Gyms in India",
  description:
    "Explore the best calisthenics gyms and parks across India — including Bangalore, Pune, Mumbai, and Delhi.",
};

export default function Page() {
  const gymsByCity = gymsData.reduce((acc, gym) => {
    acc[gym.city] = acc[gym.city] || [];
    acc[gym.city].push(gym);
    return acc;
  }, {});  

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <CoachingBanner />

      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Best Calisthenics Gyms and Parks in India
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Discover top calisthenics gyms and parks across major Indian cities —
          from Bangalore to Delhi, Pune to Mumbai.
        </p>
      </header>

      {/* CITY SECTIONS */}
      {Object.entries(gymsByCity).map(([city, gyms]) => (
        <section key={city}>
          <h2 className="text-2xl font-semibold mb-6">{city}</h2>

          <div className="space-y-6">
            {gyms.map((gym) => (
              <GymCard
                key={gym.slug}
                name={gym.name}
                image={gym.image}
                locations={gym.locations}
                description={gym.description}
                website={gym.website}
                instagram={gym.instagram}
              />
            ))}
          </div>
        </section>
      ))}

      <MissingSpotCTA />
    </article>
  );
}
