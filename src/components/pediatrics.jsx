
import p24 from "../assets/p24.jpg"
import p23 from "../assets/p23.jpg"
function Pediatrics(){
    return(
        <div className="flex  flex-col">
         <div className="flex-1 justify-center  flex"><b> Pediatrics Unit</b></div>
            

        
        <div className="  flex-1  flex h-100% h-100%  ">
            <di className="flex flex-col flex-1  justify-center h-20% w-30% m-2">

            our special expert care for infants, toddlers,personalized treatment,and comprehensive services for healthy growth and development
            <div className=" flex-1  text-black p-3"> Our services: Our services:
                <li>Pediatric cadioloy</li>
                <li>multi disciplinary care for children with solid tumors</li>
                <li>Anxiety and depression management</li>
                <li>Chronic condition management (asthma, ADHD, etc)</li>
                <li>Board certified pediatrician</li>
                <li>Pediatric pulmonoloy</li>
                <li>Vaccinations and immunizaions</li>
                <li>Pediatric neuroloy</li>
                <li>Body Language</li>
                <li>Pediatricians interviews the Parent Questions to enable render adequatw treatment</li>
                </div>
        </di>
            <div className=" flex-1 justify-center flex h-80% w-70%"><img src={p23} alt="p23" className="flex w-screen"/></div>

        </div>

        <div className=" flex-1  flex w-full bg-slate-100 ">
        <div className="flex-1 justify-center flex"><img src={p24} alt="p24" className="w-screen -mt-40" /></div>

            <div className="flex-1 justify-center flex flex-col  items-center gap-3   "> <p>See a Pediatrician</p>
             <div ><input type="text" placeholder="name" className=" hover:bg-white rounded-md justify-center" 
         /></div>
             <div><input type="age " placeholder="age" className="border  hover:bg-white rounded-md text-yellow-100" /></div>
             <div><input type="gender" placeholder="gender" className="border  hover:bg-white rounded-md text-yellow-100" /></div>
             <div><input type="file number" placeholder="file number" className="border  hover:bg-white rounded-md" /></div>
             <div><input type="guidian number" placeholder="guidian number" className="border  hover:bg-white rounded-md" /></div>
             <div><input type="you problem" placeholder="your problem" className="border  hover:bg-white rounded-md" /></div>
             <div className="inline  "><button className=" flex-grow-0 hover:bg-gray-50  !w-20"><b>Submit</b></button></div>
             </div>
        </div>
            

        </div>
        
        
        
        
        
    )
}
export default Pediatrics