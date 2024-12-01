import { useState } from "react"

import { Link } from "react-router-dom"
function Menu() {
    const [open,setOpen]=useState(true)
    
        // console.log("we clicked again",e.target)

    return(
        <div className="flex h-16 w-full justify-between p-2 bg-slate-400   ">
            <div className="flex justify-start items-center gap-2 font-bold lg:flex" >
    
              
            </div>
            {open ? (
            <div className={`justify-end flex-1 md:flex  z-10  flex-col absolute top-16 md:top-0 md:w-full flex  right-0 md:flex-row w-1/3 gap-4 p-4 `}>
                <span className="menu">
                    <Link to="/" className="menu_a">
                    Home
                   </Link>
                </span>
                
                <span className="menu">
                    <Link to="/login" className="menu_a">
                     Log in
                   </Link>
                </span>
                <span className="menu">
                    <Link to="/register" className="menu_a">
                Register
               </Link>
            </span>
            

            <span className="menu">
                <Link to="/services" className="menu_a">
                Services
                </Link>
            </span>
           

            
            </div>
                ): null}
            <div className="flex md:hidden">
                <span className="icon-cancel"
                onClick={() => setOpen(!open)}>

                </span>
            </div>
            {/* <span className="menu">
                <Link to="/specialappointment" className="menu_a">
                Special appointment
                </Link>
            </span> */}
           
           </div>
          

        
     
    )
}
export default Menu