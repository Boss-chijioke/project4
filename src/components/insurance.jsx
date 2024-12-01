
function Insurance (){
    return(
        <div className=" h-90   flex p-2 m-2 ">
    <div className="flex-1  p-6">
        <p>Free insurance verification</p>
        <b>we accept most insurance plan</b>
        <div className="flex-1  m-2"><li>Medicaid Insurance</li> <li>Long-term Disability Insurance</li>
         <li>Hospital Indemity Insurance</li>
         <li>Accident Insurance</li>
        
        </div>

        <div className="flex  text-slate-500 m-2"><p>note:if you do not have health insurance or cannot pay the fee you can still get services
            health insurance and billing practices vary by clinic type and may depend on the patient age, family size and income     </p></div>
    <div className="inline bg-blue-400 ring-2 "><button className=" flex-grow-0 hover:bg-gray-50 !w-20"><b>Verify</b></button></div>

    </div>

    
      
     
 </div>   
    )
}
export default Insurance