"use client";

import React, { useMemo, useState } from "react";
import { competitions } from "@/lib/competitionData";
import Link from "next/link";

export const CompetitionsPage = () => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("date-desc");

  const today = new Date();

  // Unique country list
  const countries = useMemo(() => {
    return Array.from(new Set(competitions.map((c) => c.country))).sort();
  }, []);

  const filteredCompetitions = useMemo(() => {
    let list = competitions.filter((comp) => {
      const compDate = new Date(comp.date);

      const matchesTab =
        tab === "all"
          ? true
          : tab === "upcoming"
          ? compDate >= today
          : compDate < today;

      const matchesSearch =
        comp.name.toLowerCase().includes(search.toLowerCase()) ||
        comp.city.toLowerCase().includes(search.toLowerCase()) ||
        comp.country.toLowerCase().includes(search.toLowerCase());

      const matchesCountry = country === "" || comp.country === country;

      return matchesTab && matchesSearch && matchesCountry;
    });

    // Sorting
    list = [...list].sort((a, b) => {
      if (sort === "date-desc")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sort === "date-asc")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    return list;
  }, [search, country, tab, sort]);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_60%)]" />

        <div className="relative container mx-auto max-w-6xl px-4 py-28 text-center">
          <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
            Global Calisthenics Events
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Calisthenics <br className="hidden sm:block" />
            Competitions
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Explore upcoming and past calisthenics competitions across the world
            — battles, freestyle events, endurance meets, and championships.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => setTab("upcoming")}
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              View Upcoming
            </button>

            <button
              onClick={() => setTab("all")}
              className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
            >
              Browse All
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-10">
        {/* TABS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["upcoming", "past", "all"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition
        ${tab === t ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
            >
              {t === "upcoming" && "Upcoming"}
              {t === "past" && "Past"}
              {t === "all" && "All Competitions"}
            </button>
          ))}
        </div>

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by name, city, country"
            className="border px-4 py-2 rounded-md w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border px-4 py-2 rounded-md md:w-56"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">All Countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            className="border px-4 py-2 rounded-md md:w-56"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="date-desc">Date (Newest)</option>
            <option value="date-asc">Date (Oldest)</option>
            <option value="name">Name (A–Z)</option>
          </select>
        </div>

        {/* RESULTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((comp) => (
            <Link
              key={comp.slug}
              href={`/competitions/${comp.slug}`}
              className="border rounded-xl p-5 hover:shadow-lg transition"
            >
              {comp.poster && (
                <img
                  src={comp.poster}
                  alt={comp.name}
                  className="rounded-lg mb-4 aspect-video object-cover"
                />
              )}

              <h3 className="text-lg font-semibold">{comp.name}</h3>

              <p className="text-sm text-muted-foreground mt-1">
                {comp.city}, {comp.country}
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                {new Date(comp.date).toDateString()}
              </p>
            </Link>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            No competitions found.
          </p>
        )}
      </div>
    </div>
  );
};
