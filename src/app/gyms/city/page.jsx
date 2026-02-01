import { gyms } from "@/lib/gymsData";
import { slugify } from "@/lib/utils";
import Link from "next/link";

function getCitiesWithCounts() {
    const cityMap = new Map();
  
    gyms.forEach((gym) => {
      const slug = slugify(gym.city, {
        lower: true,
        strict: true,
      });
  
      if (!cityMap.has(slug)) {
        cityMap.set(slug, {
          name: gym.city,
          slug,
          count: 0,
        });
      }
  
      cityMap.get(slug).count += 1;
    });
  
    return Array.from(cityMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

export default function CitiesPage() {
  const cities = getCitiesWithCounts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Gyms by City</h1>
      <p className="text-muted-foreground mb-8">
        Browse gyms across different cities
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/city/${city.slug}`}
            className="group rounded-xl border bg-white p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold group-hover:text-primary">
                {city.name}
              </h2>
              <span className="text-sm rounded-full bg-muted px-3 py-1">
                {city.count} gyms
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              View all gyms in {city.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
