import { useEffect, useState } from "react"
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import Menu from "../../components/Menu/Menu";
import "./CharacterPage.scss"
import Search from "../../components/Search/Search";

export default function CharacterPage(){
    const[characters, setCharacters] = useState([]);
    const[charactersFilter, setCharactersFilter] = useState([]);

    const getCharacters = async(newPage) =>{
        const {data: {results}} = await axios("https://rickandmortyapi.com/api/character/?page=" + newPage)
        setCharacters(results)
        setCharactersFilter(results)
    }
    useEffect(() =>{
    getCharacters(1);
    }, [])

    const handleSearch = (filterText) => {
        const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(filterText.toLowerCase()));
        setCharactersFilter(filteredCharacters)
    }


return <div className="container text-center p-characterPage">
    <Menu/>
    <Search onSearch={handleSearch}/>
    <Gallery arrayCharacter ={charactersFilter}/>
    <Pagination onChangePage={getCharacters}/>
</div>
}