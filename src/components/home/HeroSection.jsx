import CustomImage from "../CostumeImage";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const images = [
    "/img/home/image_1.jpg",
    "/img/home/image_2.jpg",
    "/img/home/image_3.jpg",
    "/img/home/image_4.jpg",
    "/img/home/image_5.jpg",
    "/img/home/image_6.jpg",
    "/img/home/image_7.jpg",
    "/img/home/image_8.jpg",
    "/img/home/image_9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="tittle">Receitas arretadas e mais!</h1>
        <p className="info">Somos um portal para um mundo de sabores, aromas e experiências culinárias inesquecíveis. Aqui, você encontrará uma seleção exclusiva de receitas do Nordeste brasileiro, uma região rica em tradições gastronômicas que encantam o paladar. Explore pratos icônicos, desde o acarajé da Bahia até o baião de dois do Ceará, e deixe-se envolver pelas histórias e culturas que fazem dessas receitas algo tão especial. Além disso, oferecemos um catálogo selecionado de bares e restaurantes, cuidadosamente escolhidos para proporcionar a você o melhor da culinária nordestina. Venha descobrir e saborear a autêntica cozinha do Nordeste através do nosso portal, uma verdadeira viagem culinária que você não vai querer perder.</p>
        <Link to="/recipes" className="btn">Confira aqui</Link>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}