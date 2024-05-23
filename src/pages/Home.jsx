import HeroSection from "../components/HeroSection";
import DiscoveryPlaces from "../components/DiscoveryPlaces";
import Carrossel from "../components/Carrossel";


export default function Home() {

    return(
        <div>
            <Carrossel />
            <HeroSection />
            <DiscoveryPlaces />
        </div>
    )
}