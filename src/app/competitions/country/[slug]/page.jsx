import CountryCompetitionsPage from "@/components/competitions/CountryCompetitionsPage";

export function generateMetadata({ params }) {
  const country = params.slug.replace("-", " ");

  return {
    title: `Calisthenics Competitions in ${country} | All About Calisthenics`,
    description: `Browse upcoming and past calisthenics competitions in ${country}. Dates, locations, results, and official links.`,
  };
}

export default function Page({ params }) {
  const country = decodeURIComponent(params.slug);
  return <CountryCompetitionsPage country={country} />;
}
