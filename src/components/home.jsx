import p902 from "../assets/p902.png"
import Content from "./content";
import Eye from "./eye";
import Gynacology from "./gynacology";
import Hero from "./hero";
import King from "./king";
import Me from "./me"
import Pediatrics from "./pediatrics";
import Products from "./products";
import Services from "./services";


function Home(){
    return(
        <div className="flex flex-col bg-slate-400">
            
            
            <Hero/>
            <King/>
            <Me/>
            <Products/>
            
            
            
            
        </div>
    )
}

export default Home