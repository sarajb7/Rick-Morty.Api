export default function Search ({onSearch}) {

    return(
        <div>
            <input className="buscador" type="text" onChange={(e) => onSearch(1, e.target.value)} />
        </div>
    )
}