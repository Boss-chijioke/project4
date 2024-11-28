import p74 from "../assets/p74.jpg"
import p24 from "../assets/p24.jpg"
import p23 from "../assets/p23.jpg"
import p78 from "../assets/p78.jpg"
import p75 from "../assets/p75.jpg"
function Pediatrics(){
    return(
        <div className="flex border flex-col">
        <div className=" border flex-1 flex-col flex w-full  "><p className="flex justify-center">-Medical services</p>
            <div className="flex-1 border justify-center flex">vv</div>

        </div>
        <div className=" border flex-1  flex w-full  ">
            <di className="flex flex-col flex-1 border justify-center"><p >who we are</p>
            <div className="flex flex-1 border text-black">we offer expensive medical proceduers to outbond and inbond patient</div>
            <div className="flex flex-1 border text-black p-2">our special expert care for infants, toddlers,personalized treatment,and comprehensive services for healthy growth and development</div>
            <div className=" flex-1 border text-black p-3">Our services:
                <li>Pediatric cadioloy</li>
                <li>multi disciplinary care for children with solid tumors</li>
                <li>Anxiety and depression management</li>
                <li>Chronic condition management (asthma, ADHD, etc)</li>
                <li>Board certified pediatrician</li>
                <li>Pediatric pulmonoloy</li>
                <li>Vaccinations and immunizaions</li>
                <li>Pediatric neuroloy</li>
                </div>
        </di>
            <div className="flex-1 border justify-center flex"><img src={p23} alt="p23" /></div>

        </div>

        <div className=" border flex-1  flex w-full bg-slate-100  ">
        <div className="flex-1 border justify-center flex"><img src={p24} alt="p24" /></div>

            <di className="flex flex-col flex-1 border justify-center p-3"><p >who we are</p>
            <div className="flex flex-1 border text-black m-2">we offer expensive medical proceduers to outbond and inbond patient</div>
            <div className="flex flex-1 border text-black p-2 m-2">our special expert care for infants, toddlers,personalized treatment,and comprehensive services for healthy growth and development</div>
            <div className=" flex-1 border text-black p-3">Our services:
                <li>Pediatric cadioloy</li>
                <li>multi disciplinary care for children with solid tumors</li>
                <li>Anxiety and depression management</li>
                <li>Chronic condition management (asthma, ADHD, etc)</li>
                <li>Board certified pediatrician</li>
                <li>Pediatric pulmonoloy</li>
                <li>Vaccinations and immunizaions</li>
                <li>Pediatric neuroloy</li>
                </div>
        </di>
            

        </div>
        
        
        
        </div>
        
    )
}
export default Pediatrics