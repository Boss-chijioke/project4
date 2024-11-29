import p601 from "../assets/p601.jpg"
import p626 from "../assets/p626.jpg"
import p612 from "../assets/p612.jpg"
import p619 from "../assets/p619.jpg"
import p902 from "../assets/p902.png"
import p813 from "../assets/p813.jpg"
import p809 from "../assets/p809.jpg"
import p808 from "../assets/p808.jpg"
function Me (){
    return(
        <div className="flex p-6 h-100% mt-5  m-8 flex-row bg-gray-600 md:flex-col ">
            <div className="flex flex-1  m-4 justify-center bg-slate-300"><b>Board Members</b> </div>
            <div className="flex flex-1  w-100%">
            <div className="flex flex-1 m-2 flex-col"><img src={p813} alt="p813" className="flex h-80 w-full" />
            <div className="flex-1 flex justify-center">Dr Rui Zhang </div><p className="flex text-xl justify-center">Service Line Director <br />And specialist</p></div>
            <div className="flex flex-1 m-2 justify-center flex-col "><img src={p601} alt="p601" className="flex h-80" /> 
            <div className="flex-1 flex justify-center">Dr Eily Lauren Thompson </div><p className="flex justify-center text-xl">Chief  Medical officer</p></div>
            <div className="flex flex-1 m-2  h-100% p-2 flex-col justify-center"> <img src={p626} alt="p626" className="flex w-full h-80" />
            <div className="flex-1 flex justify-center">Dr MacKenzie</div><p className="flex justify-center text-xl">Surgeon-In-Chief</p></div>    
             </div>

             
            <div className="flex flex-1  w-100% p-2 m-6">
            <div className="flex flex-1 m-2 justify-center flex-col"> <img src={p809} alt="p809" className="flex h-80" />
            <div className="flex-1 flex justify-center">Dr Logan Tyler Hall </div><p className="flex justify-center text-xl">Chief Nursing Officer (CNO)</p></div>
            <div className="flex flex-1 m-2 justify-center flex-col "><img src={p902} alt="p902" className="flex h-80" />
            <div className="flex-1 flex justify-center">Dr Logan Tyler Hall </div><p className="flex justify-center text-xl">Pharmacy Director</p></div>
            <div className="flex flex-1 m-2  h-100% p-2 flex-col justify-center"> <img src={p619} alt="p619" className="flex w-full h-80" />
            <div className="flex-1 flex justify-center">Dr Zara Saeed </div><p className="flex justify-center text-xl">Infection Control Specialist</p></div>
            <div className="flex flex-1 m-2 h-100% p-2 flex-col justify-center"> <img src={p808} alt="p612" className="flex w-full h-80" />
            <div className="flex-1 flex ">Chief Accountant</div></div>
            <div className="flex flex-1 m-2  h-100% p-2 flex-col justify-center"> <img src={p612} alt="p612" className="flex w-full h-80" />
            <div className="flex-1 flex  justify-center">Dr Ethan Alexander Russell</div><p className="flex justify-center text-xl">Chief Pediatrics Manager</p></div>      
             </div>

             


        </div>
        
    )
}
export default Me