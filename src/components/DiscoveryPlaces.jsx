import { Link } from "react-router-dom";
import CarrosselDiscovery from "./CarrosselDiscovery";

export default function DiscoveryPlaces() {
  const list = [
    "Encontre um novo sabor",
    "Regional da terra",
    "Cheiro de casa",
    "Danado de bom",
    "Comida de mãe",
    "Água na boca"
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