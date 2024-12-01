import z006 from "../assets/z006.jpg"
import z007 from "../assets/z007.jpg"
import z002 from "../assets/z002.jpg"
function Bills (){
    return(
        <div className="flex flex-col">
            <div className="flex-1 flex justify-center items-center">
            <div className="flex-1 flex w-10 justify-center ">
                <img src={z006} alt="z006"  className="w-10 p-2 "/><p className="p-2">Debit card</p>
                <img src={z007} alt="z007" className="w-10 p-2" /><p className="p-2">master card</p>
                <img src={z002} alt="z002" className="w-10 p-2"  /><p className="p-2"> credit card</p>
            </div>
            
            
            </div>
            <div className="flex-1 justify-center flex flex-col  items-center gap-3 "> <p>pay your bills without stress</p>
             <div ><input type="text" placeholder="name" className=" bg-teal-300 hover:bg-white rounded-md justify-center" 
         /></div>
             <div><input type="Amount" placeholder="Amount" className="border bg-teal-300 hover:bg-white rounded-md text-yellow-100" /></div>
             <div><input type="Pin" placeholder="Pin" className="border bg-teal-300 hover:bg-white rounded-md text-yellow-100" /></div>
             <div><input type="text" placeholder="Bank" className="border bg-teal-300 hover:bg-white rounded-md" /></div>
             <div className="inline  "><button className=" flex-grow-0 hover:bg-gray-50  !w-20"><b>Confirm</b></button></div>
             
             
             </div>
        
        </div>

    )
}
export default Bills 