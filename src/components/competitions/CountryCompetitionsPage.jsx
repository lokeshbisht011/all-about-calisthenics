"use client"

import { useMemo, useState } from "react";
import Link from "next/link";
import { competitions } from "@/lib/competitionData";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

export default function CountryCompetitionsPage({ country }) {
  const today = new Date();

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("upcoming");

  const countryCompetitions = useMemo(
    () =>
      competitions.filter(
        (c) => c.country.toLowerCase() === country.toLowerCase()
      ),
    [country]
  );

  const filteredCompetitions = useMemo(() => {
    return countryCompetitions.filter((c) => {
      const date = new Date(c.date);
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.city.toLowerCase().includes(search.toLowerCase());

      const matchesTab =
        tab === "all"
          ? true
          : tab === "upcoming"
          ? date >= today
          : date < today;

      return matchesSearch && matchesTab;
    });
  }, [countryCompetitions, search, tab]);

  const upcoming = filteredCompetitions.filter(
    (c) => new Date(c.date) >= today
  );
  const past = filteredCompetitions.filter(
    (c) => new Date(c.date) < today
  );

  if (countryCompetitions.length === 0) {
    return (
      notFound()
    )
  }

  return (
    <div className="space-y-20">
      {/* ================= HERO ================= */}
      <section className="py-28 text-center bg-gradient-to-b from-black to-gray-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Calisthenics Competitions in {country.toUpperCase()}
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Discover upcoming and past calisthenics competitions, freestyle
          battles, and championships happening across {country.toUpperCase()}.
        </p>

        <div className="flex justify-center gap-4 mt-6 text-sm text-gray-300">
          <span>{countryCompetitions.length}+ Events</span>
          <span>•</span>
          <span>
            {new Set(countryCompetitions.map((c) => c.city)).size} Cities
          </span>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search by competition or city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex gap-2">
            {["upcoming", "past", "all"].map((t) => (
              <Button
                key={t}
                variant={tab === t ? "default" : "outline"}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UPCOMING GRID ================= */}
      {upcoming.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-semibold">Upcoming Competitions</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((comp) => (
              <Link key={comp.slug} href={`/competitions/${comp.slug}`}>
                <Card className="hover:shadow-lg transition">
                  {comp.poster && (
                    <img
                      src={comp.poster}
                      alt={comp.name}
                      className="rounded-t-xl aspect-video object-cover"
                    />
                  )}
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-semibold">{comp.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {comp.city}
                    </p>
                    <Badge variant="secondary">
                      {new Date(comp.date).toDateString()}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ================= PAST ================= */}
      {past.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-semibold">Past Competitions</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
            {past.map((comp) => (
              <Link key={comp.slug} href={`/competitions/${comp.slug}`}>
                <Card className="hover:shadow-md transition">
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-medium">{comp.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {comp.city}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(comp.date).toDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ================= SEO CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-4 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-black">
          About Calisthenics Competitions in {country}
        </h2>
        <p>
          Calisthenics competitions in {country} have grown rapidly, featuring
          freestyle battles, endurance challenges, and strength-based events.
          Athletes from multiple cities participate to showcase bodyweight
          strength, control, and creativity.
        </p>
        <p>
          These competitions are open to beginners and advanced athletes alike,
          often categorized by skill level and gender. Many events also serve as
          qualifiers for international championships.
        </p>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-semibold">FAQs</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <strong>Are there calisthenics competitions in {country}?</strong>
              <p className="text-sm text-muted-foreground mt-1">
                Yes, multiple competitions are organized every year across
                different cities in {country}.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <strong>Who can participate?</strong>
              <p className="text-sm text-muted-foreground mt-1">
                Most competitions are open to beginners, intermediates, and
                advanced athletes with separate categories.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="max-w-4xl mx-auto px-4 space-y-4">
        <h3 className="font-semibold">Explore More</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/competitions" className="underline">
            All Competitions
          </Link>
          <Link href="/gyms" className="underline">
            Calisthenics Gyms
          </Link>
        </div>
      </section>

      {/* ================= SUBSCRIBE ================= */}
      <section className="py-20 bg-gray-50 text-center space-y-4">
        <h3 className="text-xl font-semibold">
          Get notified about competitions in {country}
        </h3>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <Input placeholder="Enter your email" />
          <Button>Notify Me</Button>
        </div>
      </section>
    </div>
  );
}
