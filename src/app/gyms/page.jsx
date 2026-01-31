import { MissingSpotCTA } from "@/components/MissingSpotCTA";
import { gyms } from "@/lib/gymsData";
import Link from "next/link";

export const metadata = {
  title: "All Calisthenics Gyms in India",
  description:
    "Discover the best calisthenics gyms across India where you can build strength, learn skills, and join a vibrant fitness community.",
  keywords: [
    "calisthenics gyms india",
    "bodyweight training india",
    "street workout india",
    "fitness parks india",
  ],
  openGraph: {
    title: "All Calisthenics Gyms in India",
    description:
      "Discover the best calisthenics gyms across India where you can build strength, learn skills, and join a vibrant fitness community.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596796679119-7cf1a9e5448b",
      },
    ],
  },
};

export default function GymsPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 space-y-12">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          All Calisthenics Gyms in India
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Explore top calisthenics gyms across cities like Bangalore, Mumbai,
          Pune, and Delhi. Click on a gym to see details, locations, and links.
        </p>
      </header>

      {/* Gym list */}
      <div className="grid gap-8 md:grid-cols-2">
        {gyms.map((gym) => (
          <Link
            key={gym.slug}
            href={`/gyms/${gym.slug}`}
            className="group flex flex-col border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={gym.image}
                alt={gym.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{gym.name}</h2>
              <p className="text-sm text-muted-foreground">
                {gym.city} • {gym.locations.map((l) => l.label).join(", ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <MissingSpotCTA />
    </article>
  );
}
