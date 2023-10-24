import { useEffect, useState } from "react"
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import Menu from "../../components/Menu/Menu";
import "./CharacterPage.scss"
import Search from "../../components/Search/Search";

let globalFilterName;


export default function CharacterPage(){
    const[characters, setCharacters] = useState([]);
    const[page, setPage] = useState(1)

    const getCharacters = async(newPage, filterName) =>{
        try {
            setPage(newPage);
            globalFilterName = filterName ? filterName: globalFilterName
            const {data: {results}} = await axios("https://rickandmortyapi.com/api/character/?page=" + newPage + (globalFilterName ? "&name=" + filterName : "") )
        setCharacters(results)
        
        } catch (error) {
            setCharacters([])
        }
    };      
    useEffect(() =>{
     getCharacters(1);
    }, []);

return <div className="container text-center p-characterPage">
    <Menu/>
    <Search onSearch={getCharacters}/>
    <Gallery arrayCharacter ={characters}/>
    <Pagination page ={page} onChangePage={getCharacters}/>
</div>
}