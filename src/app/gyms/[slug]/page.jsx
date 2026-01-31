import { notFound } from "next/navigation";
import Link from "next/link";
import { gyms } from "@/lib/gymsData";

export function generateStaticParams() {
  return gyms.map((gym) => ({
    slug: gym.slug,
  }));
}

export function generateMetadata({ params }) {
  const gym = gyms.find((g) => g.slug === params.slug);

  if (!gym) return {};

  return {
    title: `${gym.name} | Calisthenics Gym in ${gym.city}`,
    description: gym.description,
    openGraph: {
      title: gym.name,
      description: gym.description,
      images: [{ url: gym.image }],
    },
  };
}

export default function Page({ params }) {
  const gym = gyms.find((g) => g.slug === params.slug);

  if (!gym) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-10">
      {/* Hero */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {gym.name}
        </h1>
        <p className="text-muted-foreground">Calisthenics gym in {gym.city}</p>
      </header>

      {/* Image */}
      <div className="relative h-[360px] w-full overflow-hidden rounded-xl border">
        <img
          src={gym.image}
          alt={gym.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Description */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="leading-relaxed text-muted-foreground">
          {gym.description}
        </p>
      </section>

      {/* Locations */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Locations</h2>
        <ul className="space-y-2">
          {gym.locations.map((loc, i) => (
            <li key={i}>
              📍{" "}
              <Link
                href={loc.map}
                target="_blank"
                className="underline underline-offset-4"
              >
                {loc.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Links */}
      <section className="flex gap-4 flex-wrap">
        {gym.website && (
          <Link
            href={gym.website}
            target="_blank"
            className="text-sm underline"
          >
            Website
          </Link>
        )}
        {gym.instagram && (
          <Link
            href={gym.instagram}
            target="_blank"
            className="text-sm underline"
          >
            Instagram
          </Link>
        )}
      </section>

      {/* Back */}
      <div className="pt-8">
        <Link href="/gyms" className="text-sm text-muted-foreground underline">
          ← Back to gyms
        </Link>
      </div>
    </article>
  );
}
