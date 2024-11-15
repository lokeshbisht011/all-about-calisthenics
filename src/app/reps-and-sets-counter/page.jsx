import RepsAndSetsCounter from "@/components/RepsAndSetsCounter";

export async function generateMetadata() {
  return {
    title: "Reps And Sets Counter",
    description: "Reps And Sets Counter",
  };
}

const page = () => {
  return (
    <div className="min-h-screen flex">
      <RepsAndSetsCounter />
    </div>
  );
};

export default page;
