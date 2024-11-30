import p801 from "../assets/p801.png"
function Hero(){
    return(
        <div className="flex ">
            
            
            <div className=" flex-1  flex relative h-64 justify-center ">
                <img src={p801} alt="p801" className="flex md:h-44 absolute w-3/3 md:w-full  md:-z-90" />
               <div className="flex "><p className="flex  mt-10 text-sm md:flex md:text-xl"><marquee> <b>Welcome to Boss chijioke Internationals Your smile our passion</b></marquee> </p></div> 
            
                
         
            </div>
       
            
        </div>
    
    )
}
export default Hero