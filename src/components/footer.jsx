import ink from "../assets/ink.jpg"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className=" p-4 h-20 flex flex-1 border bg-gray-500 md:flex-row flex-col  ">

        <div className="flex-1 flex ">
            <div className="flex-1 "> <button>News</button></div>
            </div><div className="flex-1 "> <button>Bill payment</button>
            </div><div className="flex-1 "> <button>Insurance plan</button>
            </div>
        <div className="flex-1 "><button>providers</button></div>
            
            
            
        
            
        </div> 

    )
}
export default Footer