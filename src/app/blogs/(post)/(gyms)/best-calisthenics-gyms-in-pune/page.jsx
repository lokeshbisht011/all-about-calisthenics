import CoachingBanner from "@/components/CoachingBanner";
import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";

export const metadata = {
  title: "Best Calisthenics Gyms in Pune",
  description:
    "Discover the top calisthenics gyms in Pune to build strength, learn skills, and train with a passionate fitness community.",
  keywords: [
    "calisthenics gyms pune",
    "calisthenics pune",
    "bodyweight training pune",
    "street workout pune",
  ],
  openGraph: {
    title: "Best Calisthenics Gyms in Pune",
    description:
      "Discover the top calisthenics gyms in Pune to build strength and join a vibrant fitness community.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618805714320-f8825019c1be",
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
          Best Calisthenics Gyms in Pune
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Explore the best calisthenics gyms in Pune where you can build strength,
          master skills, and train alongside a dedicated fitness community.
        </p>
      </header>

      <GymCard
        name="Zenith Calipark"
        image="https://lh5.googleusercontent.com/p/AF1QipPcTCHTK_6q7mB0lHfSvA87uYJxByQPAyKNRP52"
        locations={[
          {
            label: "Wakad",
            map: "https://maps.app.goo.gl/d3zL2XFs6hLmTzMM6",
          },
        ]}
        description="Zenith Calipark is the first calisthenics park in PCMC, offering state-of-the-art facilities for bodyweight training. The park is designed to cater to calisthenics enthusiasts of all levels, providing a community-centric approach to fitness."
        instagram="https://www.instagram.com/zenithcalipark"
      />

      <GymCard
        name="AlphaNation Calisthenics Gym"
        image="https://lh5.googleusercontent.com/p/AF1QipMa_AKS6H0ANQHOeoBO82a0veZwZe1fPcC3DWBe"
        locations={[
          {
            label: "Kalyani Nagar",
            map: "https://maps.app.goo.gl/6Y9uGDjhwPieWANo9",
          },
        ]}
        description="AlphaNation Calisthenics Gym offers a holistic fitness experience curated by international athletes and exercise physiology experts. Their training programs focus on comprehensive fitness, including calisthenics, strength training, and more."
        instagram="https://www.instagram.com/alphanation.calisthenics"
      />

      <GymCard
        name="MuscleBar"
        image="https://lh5.googleusercontent.com/p/AF1QipMrqY_Dx5uL6jR1-xe1P5RUL5sgh_aPziQGiJ4u"
        locations={[
          {
            label: "Ghorpadi (Sopanbaug)",
            map: "https://maps.app.goo.gl/CeZeLMbzK7jVWKKx8",
          },
        ]}
        description="Launched in February 2019, MuscleBar is located in Pune's serene Sopanbaug neighborhood. It features a unique combination of natural light and seasoned equipment, making it a great place for intense calisthenics workouts."
        website="https://www.musclebar.in"
        instagram="https://www.instagram.com/musclebar.pune"
      />

      <GymCard
        name="Strize Fitness"
        image="https://lh5.googleusercontent.com/p/AF1QipNpxJ8Hx9H3YguepuRJCfrqMl-uXKoKogwApXYR"
        locations={[
          {
            label: "Balewadi",
            map: "https://maps.app.goo.gl/BHFPjn9ZiaRurhhk9",
          },
        ]}
        description="Strize Fitness is known as India's highest altitude calisthenics center. It offers a specialized environment for calisthenics enthusiasts looking to challenge themselves and achieve new heights in their fitness journey."
        instagram="https://www.instagram.com/strizefitness"
      />

      <GymCard
        name="Cali Keeda"
        image="https://lh5.googleusercontent.com/p/AF1QipPV-3-EnGbIZUFSNhOb85ynlwLo5eZv5xiKOiIi"
        locations={[
          {
            label: "Shaniwar Peth",
            map: "https://maps.app.goo.gl/etnTAgmW8hBwZp9s6",
          },
          {
            label: "Sinhagad Road",
            map: "https://maps.app.goo.gl/etnTAgmW8hBwZp9s6",
          },
        ]}
        description="Cali Keeda offers a holistic approach to calisthenics, emphasizing the significance of health and nutrition. Their vision is to transform lifestyles through dedicated training and education. Their motto is #KeedaHaitoKarega."
        website="https://calikeeda.com"
        instagram="https://www.instagram.com/calikeeda"
      />

      <MissingSpotCTA />
    </article>
  );
}
