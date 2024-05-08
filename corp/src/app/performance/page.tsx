import Hero from "@/components/hero";
import performanceImage from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        src={performanceImage}
        alt="A machine cutting metal, producing sparks."
        title="Blazing fast performance"
      />
    </div>
  );
}
