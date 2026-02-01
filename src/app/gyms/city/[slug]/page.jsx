import { notFound } from "next/navigation";
import CoachingBanner from "@/components/CoachingBanner";
import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";
import { gyms } from "@/lib/gymsData";
import { slugify } from "@/lib/utils";

/* ---------- STATIC PARAMS ---------- */
export function generateStaticParams() {
  const cities = Array.from(new Set(gyms.map((g) => g.city)));

  return cities.map((city) => ({
    slug: slugify(city),
  }));
}

/* ---------- METADATA ---------- */
export function generateMetadata({ params }) {
  const cityName = params.slug.replace(/-/g, " ");
  const cityFormatted = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return {
    title: `Calisthenics Gyms in ${cityFormatted}`,
    description: `Discover calisthenics gyms and parks in ${cityFormatted}. Find training spots, coaches, and calisthenics communities.`,
  };
}

/* ---------- PAGE ---------- */
export default function CityPage({ params }) {
  const cityGyms = gyms.filter((g) => slugify(g.city) === params.slug);

  if (cityGyms.length === 0) notFound();

  const cityName = cityGyms[0].city;

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 space-y-12">
      <CoachingBanner />

      {/* HEADER */}
      <header>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Calisthenics Gyms in {cityName}
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Explore top calisthenics gyms, parks, and training centers in{" "}
          {cityName}. Train bodyweight strength, freestyle, endurance, and
          skills with the local community.
        </p>
      </header>

      {/* GYMS */}
      <section className="space-y-6">
        {cityGyms.map((gym) => (
          <GymCard
            key={gym.slug}
            slug={gym.slug}
            name={gym.name}
            image={gym.image}
            locations={gym.locations}
            description={gym.description}
            website={gym.website}
            instagram={gym.instagram}
          />
        ))}
      </section>

      {/* CTA */}
      <MissingSpotCTA />
    </article>
  );
}
