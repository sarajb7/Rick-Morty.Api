import { useState } from "react";
import React from "react";

export default function Search ({onSearch}) {

    const[charactersFilter, setCharactersFilter] = useState("");
    const handleSearch = (e) => {
        const value = e.target.value;
        setCharactersFilter(value);
        onSearch(value);
    }
    return(
        <div>
            <input className="buscador" type="text" placeholder='buscar' value={charactersFilter} onChange={handleSearch} ></input>
        </div>
    )
}