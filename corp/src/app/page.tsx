import Hero from "@/components/hero";
import homeImage from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        src={homeImage}
        alt="A factory with cars on a conveyor belt, showcasing the manufacturing process."
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
