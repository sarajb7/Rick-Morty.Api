import "./gallery/Gallery.scss"

export default function Gallery({arrayCharacter}){

    return (
        <div className="row">
            {arrayCharacter.map((item,index) =>(
            <div key={index} className="col-2 c-Gallery">
            <img src={item.image} alt="images"/>
            <h2 className="hover">{item.name}</h2>
            </div>
            ))}
        </div>
    )
}