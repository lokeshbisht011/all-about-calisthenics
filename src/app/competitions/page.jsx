import React from "react";
import { competitions } from "@/lib/competitionData";
import { CompetitionsPage } from "@/components/competitions/CompetitionsPage";

export function generateMetadata({ params }) {
  const comp = competitions.find((c) => c.slug === params.slug);

  return {
    title: "Calisthenics Competitions | All About Calisthenics",
    description:
      "Explore upcoming and past calisthenics competitions across the world.",
  };
}

export default function Page() {
  return <CompetitionsPage />;
};
