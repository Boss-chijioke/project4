import p801 from "../assets/p801.png"
function Hero(){
    return(
        <div className="flex border">
            
            
            <div className=" flex-1  flex relative h-64 justify-center   ">
                <img src={p801} alt="p801" className="flex w-full h-44 absolute -z-90" />
               <div className="flex "><p className="flex  mt-10 "><marquee> <b></b>your smile our passion</marquee> </p></div> 
            
                
                
            </div>
       
            
        </div>
    
    )
}
export default Hero