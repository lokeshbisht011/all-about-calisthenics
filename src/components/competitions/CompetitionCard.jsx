import Link from "next/link";
import Image from "next/image";
import { formatCompetitionDates } from "@/lib/utils";

export const CompetitionCard = ({ comp }) => {
  const startDate = comp.startDate || comp.date;
  const endDate = comp.endDate || comp.date;

  const formattedDate = formatCompetitionDates(startDate, endDate);

  return (
    <Link href={`/competitions/${comp.slug}`} className="h-full">
    <div className="h-full flex flex-col border rounded-xl overflow-hidden hover:shadow-lg transition">
      {/* IMAGE */}
      {comp.poster && (
        <img
          src={comp.poster}
          alt={comp.name}
          className="h-48 w-full object-cover"
        />
      )}

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold">{comp.name}</h3>

        <p className="text-sm text-muted-foreground mt-1">
          {comp.city}, {comp.country}
        </p>

        <div className="pt-4 text-sm text-muted-foreground">
          {formattedDate}
        </div>
      </div>
    </div>
  </Link>
  );
};
