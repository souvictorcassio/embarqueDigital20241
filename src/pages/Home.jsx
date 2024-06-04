import HeroSection from "../components/home/HeroSection";
import DiscoveryPlaces from "../components/home/DiscoveryPlaces";
import CarrosselHero from "../components/home/CarrosselHero";

export default function Home() {
  return (
    <div>
      <h1 className="tittle1" style={{display:"flex",justifyContent:"center"}}>RECEITAS EM DESTAQUE</h1>
      <CarrosselHero />
      <HeroSection />
      <DiscoveryPlaces />
    </div>
  );
}