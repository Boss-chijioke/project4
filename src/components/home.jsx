

import Hero from "./hero";
import King from "./king";
import Me from "./me"
import Products from "./products";


function Home(){
    return(
        <div className="flex flex-col bg-slate-400 md:flex object-cover w-full">
            
            
            <Hero/>
            <King/>
            <Me/>
            <Products/>
            
            
            
            
        </div>
    )
}

export default Home