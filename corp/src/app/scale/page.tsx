import Hero from "@/components/hero";
import scaleImage from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        src={scaleImage}
        alt="An industrial steel factory with steel beams and machinery, showcasing the manufacturing process."
        title="Scale to infinity"
      />
    </div>
  );
}
