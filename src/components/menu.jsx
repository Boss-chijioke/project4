import { useState } from "react"
import logo from "../assets/faz.jpg"
import { Link } from "react-router-dom"
function Menu() {
    const [open,setOpen]=useState(true)
    const handleClick =(e)=>{
        // console.log("we clicked again",e.target)
        setOpen(!open)
        console.log(open)
    }
    return(
        <div className="flex h-16 w-full justify-between p-2 bg-gradient-to-tr from-slate-500 via via-white ">
            <div className="flex justify-start items-center gap-2 font-bold lg:flex" >
                <img src={logo} alt="logo"className="h-12 w-12  ring-2 ring-black"  /><p>Boss Chijioke International</p>
              
            </div>
            {open ? (
            <div className={`justify-end flex-1 md:flex  flex-col absolute top-16 md:top-0 md:w-full flex  right-0 md:flex-row w-1/3 gap-4 p-4 `}>
                <span className="menu">
                    <Link to="/" className="menu_a">
                    Home
                   </Link>
                </span>
                <span className="menu"> 
                    <Link to="/products" className="menu_a">
                    Products
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
                <Link to="/diagnostic" className="menu_a">
                Diagnostic
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