import Hero from "@/components/hero";
import reliabilityImage from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        src={reliabilityImage}
        alt="A man in a blue jacket and helmet welding sparks while working on a project."
        title="Relaiability is our number one priority"
      />
    </div>
  );
}
