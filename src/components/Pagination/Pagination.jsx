import "./Pagination.scss"

export default function Pagination({onChangePage,page}) {

    return <div className="div-buttons">
        <div className="div-b">
       <button className="b-btn" onClick={() => onChangePage( page -1)}>{"Back"}</button> 
        </div>
        {page}
        <div className="div-b">
          <button className="b-btn" onClick={() => onChangePage( page +1)}>{"Next"}</button>  
        </div>
    </div>
}