import { Link } from "react-router-dom";
import CarrosselDiscovery from "./CarrosselDiscovery";

export default function DiscoveryPlaces() {
  const list = [
    "Descubra um mundo de novos sabores autênticos e surpreendentes da culinária nordestina em nossos restaurantes e bares, onde cada prato é uma verdadeira experiência gastronômica.",
    "Visite nossos restaurantes da terra e sinta o verdadeiro sabor do Nordeste, com pratos preparados com ingredientes frescos e regionais que trazem o gosto autêntico das nossas raízes.",
    "Explore os bares autênticos do Nordeste, onde você pode desfrutar de bebidas típicas, petiscos deliciosos e um ambiente vibrante que celebra a cultura e a alegria da nossa região.",
    "Prepare-se para ficar com água na boca ao conhecer nosso guia de restaurantes e bares nordestinos, onde cada prato é uma tentação e cada visita uma nova descoberta culinária."
  ];

  return (
    <div className="section discovery-places">
      <div className="col img">
        <CarrosselDiscovery /> 
      </div>
      <div className="col typography">
        <h1 className="tittle">Indico sabor</h1>
        {list.map((item, index) => (
          <p className="discovery-item" key={index}>{item}</p>
        ))}
        <Link to="/indications" className="btn">Descubra agora</Link>
      </div>
    </div>
  );
}