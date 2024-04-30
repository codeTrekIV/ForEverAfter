import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="container mx-auto px-4 bg-dark-green">
      <Hero
        title="Prepare Your Legacy with Peace of Mind"
        description="Join ForEverAfter and secure your future today."
        imageUrl="/Foreverafter.png"
      />
    </div>
  );
}
