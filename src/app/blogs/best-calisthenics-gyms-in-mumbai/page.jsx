import CoachingBanner from "@/components/CoachingBanner";
import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Best Calisthenics Gyms in Mumbai",
  description:
    "Explore Mumbai’s top calisthenics gyms and parks. Discover places to train, improve strength, and connect with the calisthenics community.",
  openGraph: {
    title: "Best Calisthenics Gyms in Mumbai",
    description:
      "Explore Mumbai’s top calisthenics gyms and parks for strength training and community workouts.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-16">
      <CoachingBanner />
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Best Calisthenics Gyms in Mumbai
        </h1>
        <p className="text-muted-foreground">
          Experience a fitness revolution in Mumbai, where the city's dynamic
          spirit meets a growing calisthenics culture. From beginners to elite
          athletes, these gyms and parks offer something for everyone.
        </p>
      </header>

      <GymCard
        name="Elysium Calisthenics Park"
        image="https://lh5.googleusercontent.com/p/AF1QipMmU5heJsMF0_JPsO3h2iwstnu91FD_-Xrh3J7x=w408-h275-k-no"
        locations={[
          {
            label: "Malad West",
            map: "https://maps.app.goo.gl/GGQs7dXoxpJqXhGRA",
          },
          {
            label: "Bandra West",
            map: "https://maps.app.goo.gl/k4zS5jxdxvHJD8u39",
          },
        ]}
        description="Elysium Calisthenics Park is India's first official calisthenics and street workout park. Founded in 2018, it aims to spread awareness about calisthenics (bodyweight training) and provide Indian athletes with a platform to showcase their skills and talent."
        website="https://elysiumcalipark.com/"
        instagram="https://www.instagram.com/elysiumcalipark"
      />

      <GymCard
        name="ISC - Indian School of Calisthenics"
        image="https://lh5.googleusercontent.com/p/AF1QipPbUZVc4p3z-T_Y4gr-Tq8gofU-EvzfiAuQpXO3=w408-h550-k-no"
        locations={[
          {
            label: "Goregaon",
            map: "https://maps.app.goo.gl/e42hqfeKAf9aiHeo7",
          },
        ]}
        description="ISC provides a holistic approach to fitness that aims to empower individuals, foster independence, and push them to become the best version of themselves. Their philosophy is, We train your mind, not your body; everything else is complimentary."
        website="https://indianschoolofcalisthenics.com/"
        instagram="https://www.instagram.com/isc.official_/"
      />

      <GymCard
        name="Bar Breed Calisthenics Park"
        image="https://lh5.googleusercontent.com/p/AF1QipP9mUv8IwaH120LX9lI8Dc7VAPLhyp5e7NX9BuP=w408-h725-k-no"
        locations={[
          {
            label: "Borivali West",
            map: "https://maps.app.goo.gl/b6o26Bm5vkrEfuMF8",
          },
        ]}
        description="Bar Breed Calisthenics Park is Borivali's first calisthenics park, designed to provide a space for calisthenics enthusiasts to train and excel in their fitness journey."
        instagram="https://www.instagram.com/barbreed.bombay"
      />

      <GymCard
        name="360 Calisthenics"
        image="https://lh5.googleusercontent.com/p/AF1QipPiO4bYBNkDwYRFDJyfHifFITHQnXoBgkOHDis9=w408-h725-k-no"
        locations={[
          {
            label: "Malad West",
            map: "https://maps.app.goo.gl/g89i9Fgrpw2eivoe8",
          },
        ]}
        description="360 Calisthenics offers a comprehensive calisthenics experience in Malad West, featuring a range of equipment and facilities designed to meet various fitness needs."
        instagram="https://www.instagram.com/360calisthenix/"
      />

      <GymCard
        name="Califit Calisthenics Park"
        image="https://lh5.googleusercontent.com/p/AF1QipMCEz3ohFSNRkrGuL138wwTumma7yaws8GRz_uV=w408-h544-k-no"
        locations={[
          {
            label: "Vikhroli",
            map: "https://maps.app.goo.gl/297tEUZLYC8Cq7Cg6",
          },
        ]}
        description="Califit Calisthenics Park is the first calisthenics park in Vikhroli, offering a dedicated space for bodyweight training and fitness enthusiasts in the area."
        instagram="https://www.instagram.com/califit___/"
      />
      <MissingSpotCTA />
    </article>
  );
}
