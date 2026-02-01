"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { gyms } from "@/lib/gymsData";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";

export default function GymsPage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");
  const [country, setCountry] = useState("all");

  // Build filter options dynamically
  const { cities, countries } = useMemo(() => {
    const citySet = new Set();
    const countrySet = new Set();

    gyms.forEach((gym) => {
      if (gym.city) citySet.add(gym.city);
      if (gym.country) countrySet.add(gym.country);
    });

    return {
      cities: Array.from(citySet).sort(),
      countries: Array.from(countrySet).sort(),
    };
  }, []);

  // Filter gyms
  const filteredGyms = useMemo(() => {
    return gyms.filter((gym) => {
      const matchesSearch =
        gym.name.toLowerCase().includes(search.toLowerCase()) ||
        gym.city?.toLowerCase().includes(search.toLowerCase()) ||
        gym.country?.toLowerCase().includes(search.toLowerCase());

      const matchesCity = city === "all" || gym.city === city;
      const matchesCountry =
        country === "all" || gym.country === country;

      return matchesSearch && matchesCity && matchesCountry;
    });
  }, [search, city, country]);

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 space-y-12">
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Calisthenics Gyms Around the World
        </h1>
        <p className="mt-4 text-muted-foreground">
          Discover calisthenics gyms, street workout parks, and training spaces
          across cities and countries worldwide.
        </p>
      </header>

      {/* Search & Filters */}
      <section className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search gym, city or country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border px-4 py-2 text-sm"
        />

        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded-lg border px-3 py-2 text-sm"
        >
          <option value="all">All Countries</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-lg border px-3 py-2 text-sm"
        >
          <option value="all">All Cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </section>

      {/* Results */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredGyms.map((gym) => (
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
                {gym.city}
                {gym.country ? `, ${gym.country}` : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredGyms.length === 0 && (
        <p className="text-center text-muted-foreground">
          No gyms found. Try adjusting your search or filters.
        </p>
      )}

      <MissingSpotCTA />
    </article>
  );
}
