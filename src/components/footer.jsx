
import { Link } from "react-router-dom"
function Footer(){
    return(
        <div className=" p-4  flex flex-1  bg-gray-500 md:flex-row h-90 md:h-full flex-col  ">

        <div className="flex-1 flex ">
            <div className="flex-1 "> 
            <span className="menu">
                <Link to="/news" className="menu_a">
                News
                </Link>
            </span></div>
            </div><div className="flex-1 "> <button>Bill payment</button>
            </div><div className="flex-1 "> <button>Insurance plan</button>
            </div>
        <div className="flex-1 "><button>providers</button></div>
            
            
            
        
            
        </div> 

    )
}
export default Footer