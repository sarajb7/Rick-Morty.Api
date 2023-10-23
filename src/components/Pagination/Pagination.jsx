import { useState } from "react";
import "./Pagination.scss"

export default function Pagination({onChangePage}) {
    const[page, setPage] = useState(1)

    const doChangePage =(newPage) => {
        setPage(newPage)
        onChangePage(newPage)
    }

    return <div className="div-buttons">
        <div className="div-b">
       <button className="b-btn" onClick={() => doChangePage( page -1)}>{"Back"}</button> 
        </div>
        {page}
        <div className="div-b">
          <button className="b-btn" onClick={() => doChangePage( page +1)}>{"Next"}</button>  
        </div>
    </div>
}