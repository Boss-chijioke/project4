import mnm from "../assets/mnm.jpg"
import p887 from "../assets/p887.jpg"
import p880 from "../assets/p880.jpg"
import p886 from "../assets/p886.jpg"
import p836 from "../assets/p836.jpg"
import p839 from "../assets/p839.jpg"
import p883 from "../assets/p883.jpg"
import p890 from "../assets/p890.jpg"
import p892 from "../assets/p892.jpg"
import p199 from "../assets/p199.jpg"

function Products(){
    return(
        <div className="flex p-6 h-100% mt-5  m-8 flex-col bg-gray-100    ">
            {/* <img src={p199} alt="p199" className=" flex w-full h-52" /> */}
        <div className="flex flex-1  m-4 justify-center bg-slate-300"><b>Awards</b> </div>
        <div className="flex flex-1  w-100%">
        <div className="flex flex-1 m-2 flex-col"><img src={p883} alt="p883" className="flex h-80 w-full" /></div>
        <div className="flex flex-1 m-2 justify-center flex-col "><img src={p887} alt="p887" className="flex h-80" /></div>
        <div className="flex flex-1 m-2  h-100% p-2 flex-col justify-center"> <img src={p880} alt="p880" className="flex w-full h-80" /></div>    
         </div>

         
        <div className="flex flex-1  w-100% p-2 m-6">
        <div className="flex flex-1 m-2 justify-center flex-col"> <img src={p890} alt="p890" className="flex h-80" /></div>
        <div className="flex flex-1 m-2 justify-center flex-col "><img src={p839} alt="p839" className="flex h-80" /></div>
        <div className="flex flex-1 m-2  h-100% p-2 flex-col justify-center"> <img src={p836} alt="p836" className="flex w-full h-80" /></div>
        <div className="flex flex-1 m-2 h-100% p-2 flex-col justify-center"> <img src={p892} alt="p892" className="flex w-full h-80" /></div>
        
        <div className="flex flex-1 m-2  h-100% p-2 flex-col justify-center"> <img src={p886} alt="p886" className="flex w-full h-80" /></div>
     
         </div>

         


    </div>


    )

    }
export default Products