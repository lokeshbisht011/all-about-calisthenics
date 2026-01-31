import Link from "next/link";

export const CompetitionCard = ({ comp }) => (
  <Link href={`/competitions/${comp.slug}`}>
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
      {comp.poster && (
        <img
          src={comp.poster}
          alt={comp.name}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{comp.name}</h3>
        <p className="text-sm text-gray-600">
          {comp.city}, {comp.country}
        </p>
        <p className="text-sm mt-1">{new Date(comp.date).toDateString()}</p>
      </div>
    </div>
  </Link>
);
