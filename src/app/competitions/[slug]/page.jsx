import { notFound } from "next/navigation";
import { competitions } from "@/lib/competitionData";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateMetadata({ params }) {
  const comp = competitions.find((c) => c.slug === params.slug);

  if (comp) {
    return {
      title: `${comp.name} | All About Calisthenics`,
      description: "",
    };
  }
}

export default function CompetitionPage({ params }) {
  const comp = competitions.find((c) => c.slug === params.slug);
  if (!comp) notFound();

  const today = new Date();

  const upcomingComps = competitions.filter(
    (c) => new Date(c.date) >= today && c.slug !== comp.slug
  );

  const pastComps = competitions.filter(
    (c) => new Date(c.date) < today && c.slug !== comp.slug
  );

  const sameCountryComps = competitions.filter(
    (c) => c.country === comp.country && c.slug !== comp.slug
  );

  const isPast = new Date(comp.date) < today;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* MAIN */}
        <main className="lg:col-span-2 space-y-8">
          {/* POSTER */}
          {comp.poster && (
            <img
              src={comp.poster}
              alt={comp.name}
              className="rounded-2xl border w-full object-cover"
            />
          )}

          {/* HEADER */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold">{comp.name}</h1>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  isPast
                    ? "bg-gray-200 text-gray-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {isPast ? "Past Event" : "Upcoming"}
              </span>
            </div>

            <p className="text-muted-foreground">
              {comp.city}, {comp.country} • {new Date(comp.date).toDateString()}
            </p>
          </div>

          {/* DESCRIPTION */}
          {comp.description && (
            <p className="leading-relaxed text-base">{comp.description}</p>
          )}

          {/* LINKS */}
          <div className="flex flex-wrap gap-4">
            {comp.website && (
              <a
                href={comp.website}
                target="_blank"
                className="text-sm underline"
              >
                Official Website
              </a>
            )}
            {comp.instagram && (
              <a
                href={comp.instagram}
                target="_blank"
                className="text-sm underline"
              >
                Instagram
              </a>
            )}
            {comp.youtube && (
              <a
                href={comp.youtube}
                target="_blank"
                className="text-sm underline"
              >
                YouTube
              </a>
            )}
          </div>

          {/* RESULTS */}
          {comp.results && (
            <section className="space-y-5 pt-6 border-t">
              <h2 className="text-2xl font-semibold">Results</h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(comp.results).map(([category, winners]) => (
                  <div
                    key={category}
                    className="rounded-xl border p-4 bg-white"
                  >
                    <h3 className="font-medium capitalize mb-3">{category}</h3>

                    <ul className="space-y-2 text-sm">
                      {winners.map((winner) => (
                        <li
                          key={winner.position}
                          className="flex items-center gap-2"
                        >
                          <span>🏅</span>
                          <span>
                            {winner.position}. {winner.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          {/* UPCOMING */}
          {upcomingComps.length > 0 && (
            <SidebarSection title="Upcoming Competitions">
              {upcomingComps.slice(0, 5).map((c) => (
                <SidebarItem key={c.slug} comp={c} />
              ))}
            </SidebarSection>
          )}

          {/* PAST */}
          {pastComps.length > 0 && (
            <SidebarSection title="Past Competitions">
              {pastComps.slice(0, 5).map((c) => (
                <SidebarItem key={c.slug} comp={c} />
              ))}
            </SidebarSection>
          )}

          {/* SAME COUNTRY */}
          {sameCountryComps.length > 0 && (
            <SidebarSection title={`More in ${comp.country}`}>
              {sameCountryComps.slice(0, 5).map((c) => (
                <SidebarItem key={c.slug} comp={c} showCity />
              ))}
            </SidebarSection>
          )}
        </aside>
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function SidebarSection({ title, children }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SidebarItem({ comp, showCity = false }) {
  return (
    <Link href={`/competitions/${comp.slug}`} className="block group">
      <Card className="transition-all hover:border-primary/40 hover:shadow-sm">
        <CardContent className="p-4 space-y-1">
          <div className="text-sm font-medium leading-tight group-hover:text-primary">
            {comp.name}
          </div>

          <div className="text-xs text-muted-foreground">
            {showCity ? comp.city : new Date(comp.date).toDateString()}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
