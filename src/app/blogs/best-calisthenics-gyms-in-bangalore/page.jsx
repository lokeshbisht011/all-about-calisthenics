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
    <article className="mx-auto max-w-4xl px-4 py-12">
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

      <div className="space-y-16">
        <GymCard
          name="Republic of Domination"
          image="https://lh5.googleusercontent.com/p/AF1QipM6hp-XgcYaPv6WwLbgoKbPLbb97j1fiTFnJxra"
          location="Panduranga Nagar"
          map="https://maps.app.goo.gl/xrakRk2YAnrX9HSd7"
          description="Republic of Domination is a vibrant calisthenics sports club in Bengaluru, where people of all ages and fitness levels can come together to learn and compete in calisthenics. With state-of-the-art facilities, the club offers something for everyone. Republic of Domination also offers a wide range of fitness classes, such as calisthenics and yoga, to help members achieve their fitness goals. Whether you're a seasoned athlete or just starting out, Republic of Domination is the perfect place to stay active and have fun."
          instagram="https://www.instagram.com/republic_of_domination"
        />

        <GymCard
          name="CaliOG"
          image="https://lh5.googleusercontent.com/p/AF1QipOE1oSZ0OkLAoE7j7tO1WTK5geJi3nN55jr-biM"
          location="Koramangala"
          map="https://maps.app.goo.gl/mWh2dhuqwqeWb4yM9"
          description="Engage in real-life movements for functional strength and mobility. Build a strong and stable core foundation for better balance and posture. Develop overall strength with multi-muscle group exercises. Customizable training for all fitness levels and goals."
          website="https://caliog.in/"
          instagram="https://www.instagram.com/caliog.in"
        />

        <GymCard
          name="Kineto Calisthenics Park"
          image="https://lh5.googleusercontent.com/p/AF1QipNAGnxPJVsWM7iOqQeFuDBKwXVRLIuwYig3QZzK"
          location="Chikkalasandra"
          map="https://maps.app.goo.gl/GiQzrUFAq5AuCoU17"
          description="Kineto Calisthenics Park was founded on Jan 15, 2023, with the motto to spread calisthenics among the people of South Bangalore and encourage athletes from South India to get trained and participate in competitions across India to step into the global stage."
          website="http://www.kinetocalisthenics.com/"
          instagram="https://www.instagram.com/kineto_calisthenics/"
        />

        <GymCard
          name="Chaos Faktory"
          image="https://lh5.googleusercontent.com/p/AF1QipMSEbHmpMbdjuJ9PDGBqadMU9Kul4VdD6ul-sLb"
          location="HSR Layout"
          map="https://maps.app.goo.gl/QLTYL1esULrH66Jd9"
          description="Chaos Faktory is India's leading professional parkour team & body weight training center. They specialize in the art of both Fight And Flight, each demanding a set of skills which is a mix of Parkour Freerunning, Martial Arts, Gymnastics, Calisthenics, And Ninja Training. To master these skills, one must push their physical limits as well as their mental barriers. Their elite trainers come from various backgrounds such as Martial Arts, Gymnastics, and Stunt Choreography. They have represented India in national and international competitions."
          website="https://chaosfaktory.com/"
          instagram="https://www.instagram.com/chaosfaktory/"
        />

        <GymCard
          name="CaliBAF – The Calisthenics Studio"
          image="https://lh5.googleusercontent.com/p/AF1QipO9DDaRJp9vYnCOvFLpIZP4wOCD-WizzNxBEeNX"
          location="Kalyan Nagar"
          map="https://maps.app.goo.gl/TroDC7T1CCzJJ5Cp8"
          description="CaliBAF studio is designed to help you push your limits and achieve your fitness goals. Learn from experts and get top-notch guidance. Join CALIBAF calisthenics community & get EXPERT Coaches who can provide personalized advice and training programs."
          website="https://www.calibaf.in/"
          instagram="https://www.instagram.com/calisthenicsbybaf/"
        />

        <GymCard
          name="Limitless Calisthenics"
          image="https://lh5.googleusercontent.com/p/AF1QipNxEaWkvdkS9VqmFGtZ5sfzUdS_S6m-vY0XmnmV"
          location="BTM Layout"
          map="https://maps.app.goo.gl/hN4F7F2D5PUxu8k79"
          description="Calisthenics academy with certified coaches and national-level athletes."
          instagram="https://www.instagram.com/limitless_calisthenics/"
        />

        <GymCard
          name="The Movement Fitness Centre"
          image="https://lh5.googleusercontent.com/p/AF1QipNvy8r0w24-25CCiwKdLRz_EmnMLKnWQsuSpkTO"
          location="HSR Layout, Sarjapur"
          map="https://maps.app.goo.gl/NrBEcNBBup7FJ6Gg8, https://maps.app.goo.gl/Pi66fdLLGa92Wdsf8"
          description="At movement gyms, you will get to experience an environment where you are free to work out the way you like. They have trained professionals ready to step in and teach you how to use the equipment."
          website="https://www.bethemovement.in/"
          instagram="https://www.instagram.com/themovement.fitnesscentre/"
        />
      </div>
      <MissingSpotCTA />
    </article>
  );
}
