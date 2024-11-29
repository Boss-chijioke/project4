
import cici from "../assets/cici.jpg"
import p19 from "../assets/p19.jpg"
import p603 from "../assets/p603.jpg"
import { Link } from "react-router-dom"
function Services(){
    return(
        <div className="flex   h-90 flex-col bg-gradient-to-tr from-white via-slate-500  ">
            
            <div className="flex-1 flex m-5 ">
                <div className="flex-1  justify-center items-center flex text-2xl "><b className="flex justify-center items-center">Take the world best quality Treatment </b> 
                </div>
                
            </div>
            <div className="flex-1 flex h-40 ">
                <div className="flex-1  m-5 ">
                   <b className="flex justify-center items-center">PEDIATRICS DEPARTMENT</b> 
                   
                    <li>Specialised Units
                        <ul>Pediatric Oncology Unit- for cancer treatment</ul>
                        <ul>Neonatal Intensive Care (NICU)-newborns</ul>
                        <ul>Pediatric Intensive Care Unit (PICU)- for critically ill children</ul>
                        <ul>Pediatric Endocrinology Unit</ul>
                        <ul>Pediatric Cardiology Unit -for heart conditions</ul>
                        <ul>Pediatrics Neurology Unit</ul>
                        <ul>Child life department (for therapy and support)</ul>
                        <ul>Pediatrics Nephrology Unit</ul>
                    </li>
                    <li>Age Specified Units 
                        <ul>Neonatal Unit (0-1 month)</ul>
                        <ul>Infant Unit (1-12 months)</ul>
                        <ul>Toddler Unit (1-3 years)</ul>
                        <ul>Pediatric Unit (4-12 years)</ul>
                        <ul>Adolescent Unit (13-18 years)</ul>
                    </li>
                    
                    <div className="flex-1 p-4 m-2"><span className="menu">
                <Link to="/pediatrics" className="menu_a">
               visit our Pediatrics Department
                </Link>
            </span></div>
                </div>
                
                <div className="flex-1 m-5 ">
                    <img src={cici} alt="cici" className="w-full h-50 " />
                </div>
                
            </div>
            
            <div className=" flex-1 flex h-60 "> 
                <div className="flex-1 justify-center "><img src={p19} alt="p19" className="  w-full p-8  " /></div>
                <div className=" flex-1 justify-center items-center "><b className="justify-center flex items-center">Radiology DEPARTMENT</b>
                
                Get Diagnosed Get Treated Get Better

                <li>OUR SERVICES:
                    <ul>X-ray</ul>
                    <ul>CT Scan</ul>
                    <ul>Ultrasound</ul>
                    <ul>Mammography</ul>
                    <ul>Laoratory Tests</ul>
                </li>
                <div className="flex-1 p-4 m-4"><span className="menu">
                <Link to="/diagnostic" className="menu_a">
                Visit our Radiology Department
                </Link>
            </span></div>
                
                </div>
            </div>
            <div className="flex-1 flex h-60 ">
            <div className=" flex-1 justify-center items-center m-10 "><b className="justify-center flex items-center">EYE DEPARTMENT</b>
                
                Get Diagnosed Get Treated Get Better

                <li>OUR SERVICES:
                    <ul>Board certified Opthalmogist</ul>
                    <ul>CT Scan</ul>
                    <ul>Pediatric eye care</ul>
                    <ul>Personalised Treatment</ul>
                    <ul>Laoratory Tests</ul>
                </li>
                <div className="flex-1 p-4  m-4"><span className="menu">
                <Link to="/eye" className="menu_a">
               Visit our Eye Diagnostic Departmennt
                </Link>
            </span>
                  </div>
                </div> 
                <div className="flex-1 justify-center "><img src={p19} alt="p19" className="  w-full p-8  " /></div>
                <div className=" flex-1 justify-center items-center "><b className="justify-center flex items-center">Psychiatric DEPARTMENT</b>
                
                Get Diagnosed Get Treated Get Better

                <li>OUR SERVICES:
                    <ul>X-ray</ul>
                    <ul>CT Scan</ul>
                    <ul>Mental Disorder</ul>
                    <ul>Mammography</ul>
                    <ul>Laoratory Tests</ul>
                </li>
                <div className="flex-1 p-4 m-4"><button className="bg-yellow-200 ring-black ring-4">visit our Diagnostic department</button></div>
                </div>
            </div>
          <div className="flex  flex-1 ">
            <div className="flex-1  m-10"><b className="justify-center flex items-center">Obstetrics and Gynecology DEPARTMENT</b>
            Get Diagnosed Get Treated Get Better

                   <li>OUR SERVICES:
                        <ul>X-ray</ul>
                        <ul>CT Scan</ul>
                        <ul>Mental Disorder</ul>
                        <ul>Mammography</ul>
                        <ul>Laoratory Tests</ul>
                  </li>
                  <div className="flex-1 p-4  m-4"><span className="menu">
                <Link to="/gynacology" className="menu_a">
               Visit our Gynacology  Departmennt
                </Link>
            </span>
                  </div>
            </div>
            <div className="flex-1 border"><img src={p603} alt="p603" className="w-full"/></div>
            </div>  

            <div className="flex border flex-1 ">bbbbb
            <div className="flex-1 border"><b className="justify-center flex items-center">Pharmacy DEPARTMENT</b>
            Get Diagnosed Get Treated Get Better

                   <li>OUR SERVICES:
                        <ul>X-ray</ul>
                        <ul>CT Scan</ul>
                        <ul>Mental Disorder</ul>
                        <ul>Mammography</ul>
                        <ul>Laoratory Tests</ul>
                  </li>
            </div>
            <div className="flex-1 border"></div>
            </div>  

            <div className="flex border flex-1 ">bbbbb
            <div className="flex-1 border"><b className="justify-center flex items-center">Psychiatric DEPARTMENT</b>
            Get Diagnosed Get Treated Get Better

                   <li>OUR SERVICES:
                        <ul>X-ray</ul>
                        <ul>CT Scan</ul>
                        <ul>Mental Disorder</ul>
                        <ul>Mammography</ul>
                        <ul>Laoratory Tests</ul>
                  </li>
            </div>
            <div className="flex-1 border"></div>
            </div>  

        </div>
    )
}
export default Services