import CustomImage from "./CostumeImage"

export default function HeroSection() {
    const images =[
        "/img/gallery/pizzamedia_1.jpg",
        "/img/gallery/pizzamedia_2.jpg",
        "/img/gallery/pizzamedia_3.jpg",
        "/img/gallery/pizzamedia_4.jpg",
        "/img/gallery/pizzamedia_5.jpg",
        "/img/gallery/pizzamedia_6.jpg",
        "/img/gallery/pizzamedia_7.jpg",
        "/img/gallery/pizzamedia_8.jpg",
        "/img/gallery/pizzamedia_9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="tittle"> Quem somos </h1>
                <p className="info"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero vitae obcaecati totam natus tempora tempore in ut fugiat quod deleniti dicta, corporis illo accusantium maiores magnam amet voluptates esse eligendi. </p>
                <button className="btn"> Venha conhecer </button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    )
}