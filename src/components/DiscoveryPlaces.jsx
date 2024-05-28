// DiscoveryPlaces.jsx

import { Link } from "react-router-dom";
import CarrosselDiscovery from "./CarrosselDiscovery";

export default function DiscoveryPlaces() {
  const list = [
    "Encontre um novo sabor",
    "Sabor vegano",
    "Regional da terra",
    "Água na boca",
    "Danado de bom",
    "Tasty!!!"
  ];

  return (
    <div className="section discovery-places">
      <div className="col img">
        <CarrosselDiscovery /> {/* Substitua a imagem estática pelo carrossel */}
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