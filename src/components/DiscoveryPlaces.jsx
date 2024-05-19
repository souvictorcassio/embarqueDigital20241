export default function DiscoveryPlaces(){

    const list = [
        "Encontre um novo sabor",
        "Sabor vegano",
        "Regional da terra",
        "Água na boca",
        "Danado de bom",
        "Tasty!!!"
    ]

    return (
        <div className="section discovery-places">
            <div className="col img">
                <img src="/img/gallery/gatorestaurante.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="tittle"> Novos sabores </h1>
                { list.map((item, index) => (
                    <p className="discovery-item" key={index}>{item}</p>
                ))}
                <button className="btn"> Descubra agora </button>
            </div>
        </div>
    )
}