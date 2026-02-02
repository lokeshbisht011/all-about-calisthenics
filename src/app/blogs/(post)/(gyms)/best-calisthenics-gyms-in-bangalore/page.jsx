import CoachingBanner from "@/components/CoachingBanner";
import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";

export const metadata = {
  title: "Best Calisthenics Gyms in Bangalore",
  description:
    "Discover the top calisthenics gyms in Bangalore to build strength, learn skills, and join a vibrant fitness community.",
  keywords: [
    "calisthenics gyms bangalore",
    "calisthenics india",
    "bodyweight training bangalore",
    "street workout bangalore",
  ],
  openGraph: {
    title: "Best Calisthenics Gyms in Bangalore",
    description:
      "Discover the top calisthenics gyms in Bangalore to build strength and join a vibrant fitness community.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596796679119-7cf1a9e5448b",
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <CoachingBanner />
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Best Calisthenics Gyms in Bangalore
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Discover the top calisthenics gyms in Bangalore where you can build
          strength, master skills, and train with a passionate community.
        </p>
      </header>

      <GymCard
        name="Republic of Domination"
        image="https://lh5.googleusercontent.com/p/AF1QipM6hp-XgcYaPv6WwLbgoKbPLbb97j1fiTFnJxra"
        locations={[
          {
            label: "Panduranga Nagar",
            map: "https://maps.app.goo.gl/xrakRk2YAnrX9HSd7",
          },
        ]}
        description="Republic of Domination is a vibrant calisthenics gym in Bengaluru, where people of all ages and fitness levels come together to learn, train, and compete in calisthenics."
        instagram="https://www.instagram.com/republic_of_domination"
      />

      <GymCard
        name="CaliOG"
        image="https://lh5.googleusercontent.com/p/AF1QipOE1oSZ0OkLAoE7j7tO1WTK5geJi3nN55jr-biM"
        locations={[
          {
            label: "Koramangala",
            map: "https://maps.app.goo.gl/mWh2dhuqwqeWb4yM9",
          },
        ]}
        description="CaliOG focuses on functional strength, mobility, and real-life movement patterns with customizable programs for all levels."
        website="https://caliog.in/"
        instagram="https://www.instagram.com/caliog.in"
      />
      <GymCard
        name="Kineto Calisthenics Park"
        image="https://lh5.googleusercontent.com/p/AF1QipNAGnxPJVsWM7iOqQeFuDBKwXVRLIuwYig3QZzK"
        locations={[
          {
            label: "Chikkalasandra",
            map: "https://maps.app.goo.gl/GiQzrUFAq5AuCoU17",
          },
        ]}
        description="Kineto Calisthenics Park was founded on Jan 15, 2023, with the motto to spread calisthenics among South Bangalore residents and encourage athletes to compete nationally and globally."
        website="http://www.kinetocalisthenics.com/"
        instagram="https://www.instagram.com/kineto_calisthenics/"
      />

      <GymCard
        name="Chaos Faktory"
        image="https://lh5.googleusercontent.com/p/AF1QipMSEbHmpMbdjuJ9PDGBqadMU9Kul4VdD6ul-sLb"
        locations={[
          {
            label: "HSR Layout",
            map: "https://maps.app.goo.gl/QLTYL1esULrH66Jd9",
          },
        ]}
        description="Chaos Faktory is India's leading professional parkour and bodyweight training center, blending parkour, martial arts, gymnastics, calisthenics, and ninja training."
        website="https://chaosfaktory.com/"
        instagram="https://www.instagram.com/chaosfaktory/"
      />

      <GymCard
        name="CaliBAF - The Calisthenics Studio"
        image="https://lh5.googleusercontent.com/p/AF1QipO9DDaRJp9vYnCOvFLpIZP4wOCD-WizzNxBEeNX"
        locations={[
          {
            label: "Kalyan Nagar",
            map: "https://maps.app.goo.gl/TroDC7T1CCzJJ5Cp8",
          },
        ]}
        description="CaliBAF studio helps you push your limits with expert guidance and personalized training programs."
        website="https://www.calibaf.in/"
        instagram="https://www.instagram.com/calisthenicsbybaf/"
      />

      <GymCard
        name="Limitless Calisthenics"
        image="https://lh5.googleusercontent.com/p/AF1QipNxEaWkvdkS9VqmFGtZ5sfzUdS_S6m-vY0XmnmV"
        locations={[
          {
            label: "BTM Layout",
            map: "https://maps.app.goo.gl/hN4F7F2D5PUxu8k79",
          },
        ]}
        description="Calisthenics academy with certified coaches and national-level athletes."
        instagram="https://www.instagram.com/limitless_calisthenics/"
      />

      <GymCard
        name="The Movement Fitness Centre"
        image="https://lh5.googleusercontent.com/p/AF1QipNvy8r0w24-25CCiwKdLRz_EmnMLKnWQsuSpkTO"
        locations={[
          {
            label: "HSR Layout",
            map: "https://maps.app.goo.gl/NrBEcNBBup7FJ6Gg8",
          },
          {
            label: "Sarjapur",
            map: "https://maps.app.goo.gl/Pi66fdLLGa92Wdsf8",
          },
        ]}
        description="At Movement gyms, you will experience an environment where you are free to work out your way with trained professionals ready to guide you."
        website="https://www.bethemovement.in/"
        instagram="https://www.instagram.com/themovement.fitnesscentre/"
      />
      <MissingSpotCTA />
    </article>
  );
}
