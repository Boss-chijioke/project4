import p830 from "../assets/p830.jpg"
function Footeer2 (){
    return(
        <div className="flex  h-full bg-gray-500 w-30 md:flex-row flex-col">
          <div className="flex-1 flex  flex-col justify-center items-center p-2"><b>Our Location and Offices</b> 
             <div className="flex-1 flex   p-4 ">
                  <div className="flex-1 flex  md:flex-col flex-row p-4 ">
                    <div className="flex-1 flex    ">
                     <div className="flex-1 flex   p-4 m-2">200 Boss chijioke Internationals on M5G 2C4, Canada <br />Phone:+14163403111</div>
                     <div className="flex-1 flex  p-4 m-2">Steelhouse Ln Birmingham B4 6NH, UK <br />Phone:+44 1213339999</div>
                    </div>
                    <div className="flex-1 flex   p-4 ">
                     <div className="flex-1 flex   p-4 m-2">Outram Rd, Singapore 169608 <br />Phone:+6562223322</div>
                    
                    </div>
                    
                  </div>
                  <div className="flex-1 flex   p-4 ">
                  <div className="flex-1 flex   flex-col ">
                    <div className="flex-1 flex   p-4 ">
                      <div className="flex-1 flex   p-4 m-2">757 Westwood Plaza, Los Angeles,CA 900095 USA <br />Phone:+1 3108256301</div>
                      <div className="flex-1 flex   p-4 m-2">Euston Rd, London NW1 2BU, UK <br />Phone:+44 2034567890</div>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row w-20 md:w-full  p-4 m-2">
                    <div className="flex-1 flex   p-6 mr-8">idi-Araba, surulere,Lagos <br />Phone:+2348033074011</div>
                    <div className="flex-1 flex   p-4 m-2">PMB 237, Boss chijioke Internarionals Gwagwalada, Abuja FCT <br />Phone:+234 7045223545</div>
                    </div>
                  </div>
                  </div>
             </div>
      
             </div>
            <div className="flex-1 md:flex  p-2 rounded-e-lg hidden"><img src={p830} alt="p830" className="flex   w-full"  />
                 
            </div>


        </div>

    )
}

export default Footeer2