// Home.jsx

import HeroSection from "../components/HeroSection";
import DiscoveryPlaces from "../components/DiscoveryPlaces";
import CarrosselHero from "../components/CarrosselHero";

export default function Home() {
  return (
    <div>
      <h1 className="carrossel-title">RECEITAS EM DESTAQUE</h1>
      <CarrosselHero />
      <HeroSection />
      <DiscoveryPlaces />
    </div>
  );
}