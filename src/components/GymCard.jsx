import Image from "next/image";
import Link from "next/link";

export default function GymCard({
  name,
  image,
  locations,
  description,
  website,
  instagram,
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{name}</h2>

      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p>
          📍{" "}
          {locations.map((loc, i) => (
            <span key={i}>
              <Link
                href={loc.map}
                target="_blank"
                className="underline underline-offset-4"
              >
                {loc.label}
              </Link>
              {i < locations.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>

      <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
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
