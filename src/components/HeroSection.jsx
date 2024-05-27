import CustomImage from "./CostumeImage"

export default function HeroSection() {
    const images =[
        "/img/home/pizzamedia_1.jpg",
        "/img/home/pizzamedia_2.jpg",
        "/img/home/pizzamedia_3.jpg",
        "/img/home/pizzamedia_4.jpg",
        "/img/home/pizzamedia_5.jpg",
        "/img/home/pizzamedia_6.jpg",
        "/img/home/pizzamedia_7.jpg",
        "/img/home/pizzamedia_8.jpg",
        "/img/home/pizzamedia_9.jpg"
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