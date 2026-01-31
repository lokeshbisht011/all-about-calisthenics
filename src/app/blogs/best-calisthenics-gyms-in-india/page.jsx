import GymCard from "@/components/GymCard";
import { MissingSpotCTA } from "@/components/MissingSpotCTA";
import { FaCity } from "react-icons/fa";

export const metadata = {
  title: "Best Calisthenics Gyms in India",
  description:
    "Explore the best calisthenics gyms and parks across India — including Bangalore, Pune, Mumbai, and Delhi.",
  keywords: [
    "calisthenics gyms India",
    "calisthenics parks India",
    "bodyweight training India",
    "street workout India",
  ],
  openGraph: {
    title: "Best Calisthenics Gyms in India",
    description:
      "A comprehensive guide to top calisthenics gyms and parks in major Indian cities: Bangalore, Pune, Mumbai, Delhi.",
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 space-y-12">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Best Calisthenics Gyms and Parks in India
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Discover top calisthenics gyms and parks across major Indian cities —
          from Bangalore to Delhi, Pune to Mumbai — where you can build
          strength, sharpen skills, and train with a passionate community.
        </p>
      </header>

      {/* BANGALORE */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Bangalore</h2>
        <GymCard
          name="Republic of Domination"
          image="https://lh5.googleusercontent.com/p/AF1QipM6hp-XgcYaPv6WwLbgoKbPLbb97j1fiTFnJxra"
          locations={[
            {
              label: "Panduranga Nagar",
              map: "https://maps.app.goo.gl/xrakRk2YAnrX9HSd7",
            },
          ]}
          description="Republic of Domination is a vibrant calisthenics sports club in Bengaluru..."
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
          description="Engage in real-life movements for functional strength and mobility..."
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
          description="Kineto Calisthenics Park was founded with the mission to spread calisthenics..."
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
          description="Chaos Faktory is India’s leading professional parkour & calisthenics center..."
          website="https://chaosfaktory.com/"
          instagram="https://www.instagram.com/chaosfaktory/"
        />
        <GymCard
          name="CaliBAF – The Calisthenics Studio"
          image="https://lh5.googleusercontent.com/p/AF1QipO9DDaRJp9vYnCOvFLpIZP4wOCD-WizzNxBEeNX"
          locations={[
            {
              label: "Kalyan Nagar",
              map: "https://maps.app.goo.gl/TroDC7T1CCzJJ5Cp8",
            },
          ]}
          description="CaliBAF studio is designed to help you push your limits..."
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
          description="At Movement gyms, you will experience a flexible training environment..."
          website="https://www.bethemovement.in/"
          instagram="https://www.instagram.com/themovement.fitnesscentre/"
        />
      </section>

      {/* PUNE */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Pune</h2>
        <GymCard
          name="Zenith Calipark"
          image="https://lh5.googleusercontent.com/p/AF1QipPcTCHTK_6q7mB0lHfSvA87uYJxByQPAyKNRP52"
          locations={[
            {
              label: "Wakad",
              map: "https://maps.app.goo.gl/d3zL2XFs6hLmTzMM6",
            },
          ]}
          description="Zenith Calipark is the first calisthenics park in PCMC..."
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
          description="AlphaNation offers a holistic training experience..."
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
          description="MuscleBar features seasoned equipment and natural lighting..."
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
          description="Strize Fitness is one of India’s highest altitude calisthenics training centers."
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
          description="Cali Keeda emphasizes holistic fitness through training and nutrition."
          website="https://calikeeda.com"
          instagram="https://www.instagram.com/calikeeda"
        />
      </section>

      {/* MUMBAI */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Mumbai</h2>
        <GymCard
          name="Elysium Calisthenics Park"
          image="https://lh5.googleusercontent.com/p/AF1QipMmU5heJsMF0_JPsO3h2iwstnu91FD_-Xrh3J7x"
          locations={[
            {
              label: "Malad West, Bandra West",
              map: "https://maps.app.goo.gl/GGQs7dXoxpJqXhGRA",
            },
            {
              label: "Malad West",
              map: "https://maps.app.goo.gl/k4zS5jxdxvHJD8u39",
            },
          ]}
          description="Elysium is India’s first official calisthenics and street workout park."
          website="https://elysiumcalipark.com/"
          instagram="https://www.instagram.com/elysiumcalipark"
        />
        <GymCard
          name="ISC – Indian School of Calisthenics"
          image="https://lh5.googleusercontent.com/p/AF1QipPbUZVc4p3z-T_Y4gr-Tq8gofU"
          locations={[
            {
              label: "Goregaon",
              map: "https://maps.app.goo.gl/e42hqfeKAf9aiHeo7",
            },
          ]}
          description="ISC empowers individuals with bodyweight and functional training."
          instagram="https://www.instagram.com/isc.official_/"
        />
        <GymCard
          name="Bar Breed Calisthenics Park"
          image="https://lh5.googleusercontent.com/p/AF1QipP9mUv8IwaH"
          locations={[
            {
              label: "Borivali West",
              map: "https://maps.app.goo.gl/b6o26Bm5vkrEfuMF8",
            },
          ]}
          description="Bar Breed provides a dedicated outdoor space for calisthenics."
          instagram="https://www.instagram.com/barbreed.bombay"
        />
        <GymCard
          name="360 Calisthenics"
          image=""
          locations={[
            {
              label: "Malad West",
              map: "https://maps.app.goo.gl/g89i9Fgrpw2eivoe8",
            },
          ]}
          description="360 Calisthenics delivers a comprehensive workout environment."
          instagram="https://www.instagram.com/360calisthenix/"
        />
      </section>

      {/* DELHI */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Delhi</h2>
        <GymCard
          name="Workout Warriors Calisthenics Academy"
          image=""
          locations={[
            {
              label: "Bhalswa Jahangir Village",
              map: "https://maps.app.goo.gl/GxYq7VuHtV8oDUP9A",
            },
          ]}
          description="Workout Warriors Calisthenics Academy provides a dedicated training space in Delhi."
          instagram="https://www.instagram.com/workout_warriors_official/"
        />
        <GymCard
          name="AlphaPack Calisthenics Academy"
          image=""
          locations={[
            {
              label: "Vikaspuri",
              map: "https://maps.app.goo.gl/3578q9ejzFLjrnau5",
            },
          ]}
          description="AlphaPack is Delhi’s first official calisthenics centre."
          instagram="https://www.instagram.com/alphapack.academy/"
        />
        <GymCard
          name="Indian Calisthenics Academy"
          image="https://static.wixstatic.com/media/d1d3b0_fdb11ce13e894877874dca5be470a2d6~mv2.png"
          locations={[
            {
              label: "Dwarka",
              map: "https://maps.app.goo.gl/xbDgr9t8krp3RyFR6",
            },
          ]}
          description="Indian Calisthenics Academy supports aspiring athletes and promotes healthy living."
          website="https://www.indiancalisthenicsacademy.in/"
          instagram="https://www.instagram.com/indian_calisthenics_academy/"
        />
        <GymCard
          name="Permafly"
          image="https://lh5.googleusercontent.com/p/AF1QipMsGT34vtfaHQT5i5Mv2r-z5XKnn-jt8h77LBeT"
          locations={[
            {
              label: "Shahdara",
              map: "https://maps.app.goo.gl/4TTYjkgABGYVK3ZZ6",
            },
          ]}
          description="Permafly blends calisthenics, parkour, gymnastics, and yoga into unique movement training."
          website="https://www.permafly.in/"
          instagram="https://www.instagram.com/permaflydelhi/"
        />
      </section>

      <MissingSpotCTA />
    </article>
  );
}
