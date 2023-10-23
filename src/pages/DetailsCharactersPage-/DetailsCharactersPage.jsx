import { useParams } from "react-router-dom"

export default function DetailsCharactersPage(){
    const{id} = useParams()
    return <div>{id}</div>
}