// import { useState } from "react"
import cat from "../assets/cat.jpg"
import p52 from "../assets/p52.jpg"
import hope from "../assets/hope.jpg"
import p1 from "../assets/p1.jpg"

function Content(){
    // const [isLogin, setisLogin] =useState(false)
    // const action = ()=>{setisLogin(!isLogin)}
    return(
 <div className=" h-90 border  flex  ">
    <div className="flex-1 border p-2">
        <p>Free insurance verification</p>
        <b>we accept most insurance plan</b>
        <div className="flex-1  border m-2"><li>Medicaid Insurance</li> <li>Long-term Disability Insurance</li>
         <li>Hospital Indemity Insurance</li>
         <li>Accident Insurance</li>
        
        </div>

        <div className="flex border text-slate-500 m-2"><p>note:if you do not have health insurance or cannot pay the fee you can still get services
            health insurance and billing practices vary by clinic type and may depend on the patient age, family size and income     </p></div>
    <div className="flex bg-blue-400 ring-2 "><button className="flex  hover:bg-gray-50 w-20"><b>Verify</b></button></div>
    </div>
    <div className="flex-1 flex border flex-col">
        <div className="flex justify-center"><img src={cat} alt="cat" className="" /></div>
        <div className="flex justify-center flex-row border flex-1">
        <div className="flex-1 justify-center border"><img src={p1} alt="p1" /></div>
        <div className="flex-1 justify-center border"><img src={p52} alt="p52" /></div>
        <div className="flex-1 justify-center border"><img src={hope} alt="hope" /></div>
        </div>
    </div>
      
     
 </div>   
        )
}
export default Content