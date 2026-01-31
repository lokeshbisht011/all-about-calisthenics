import Image from "next/image";
import Link from "next/link";

export default function GymCard({
  name,
  image,
  location,
  map,
  description,
  website,
  instagram,
}) {
  return (
    <section className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="text-sm text-muted-foreground">
        📍{" "}
        {location.split(",").map((loc, index) => {
          const maps = map?.split(",");
          const mapLink = maps?.[index]?.trim();
          const label = loc.trim();

          return (
            <span key={index}>
              {mapLink ? (
                <Link href={mapLink} target="_blank" className="underline">
                  {label}
                </Link>
              ) : (
                label
              )}
              {index < location.split(",").length - 1 && ", "}
            </span>
          );
        })}
      </p>

      <p className="leading-relaxed text-muted-foreground">{description}</p>

      <div className="flex flex-wrap gap-4 text-sm">
        {website && (
          <Link href={website} target="_blank" className="underline">
            Website
          </Link>
        )}
        {instagram && (
          <Link href={instagram} target="_blank" className="underline">
            Instagram
          </Link>
        )}
      </div>
    </section>
  );
}
