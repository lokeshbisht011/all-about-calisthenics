import PRCalculator from "@/components/PrCalculator";

export async function generateMetadata() {
  return {
    title: "One Rep Max Calculator",
    description: "One Rep Max Calculator",
  };
}

const PRCalculatorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PRCalculator />
    </div>
  );
};

export default PRCalculatorPage;
