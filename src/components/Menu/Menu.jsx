import { Link } from "react-router-dom";
import "./Menu.scss"

export default function Menu(){
    return <div className="div-menu">
        <div className="div-home">
            <Link to='home'>Home</Link> 
        </div>
        <div className="div-home">
            <Link to='characters'>Characters</Link>
        </div>
        <div className="div-home">
          <Link to='episodes'>Episodes</Link>  
        </div>
        
        
    </div>
}