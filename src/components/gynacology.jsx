import p52 from "../assets/p52.jpg"
import z103 from "../assets/z103.jpg"
import p18 from "../assets/p18.jpg"
import p603 from "../assets/p603.jpg"
function Gynacology (){
    return(
        <div className="flex  justify-center flex-col  bg-gray-500    ">
            <div className="flex-1 justify-center  flex"><b> Gynacology Unit</b></div>
        <div className="flex flex-1  flex-col justify-center relative m-2 h-90 ">
        <div className="flex flex-1  justify-center  "><img src={z103} alt="z103" className="flex   h-60 md:w-3/3 w-screen " />
    
        </div>
        <div className="flex flex-1  p-2 h-70 m-10 bg-blue-200">We provide comprehensie peventive care fpr women begining at puberty and continuing through all stages of life. 
            We listin carefully to our patients to determine an underlying health issues and working together to create specific individual awareness
            <br />Because we handle female healths we have personal understanding of women health issues and can work
            one-on-one with all of our patients to meet their obsteric gynacologic needs We work closely with many Atlantas specialists including internists, oncologists, determatologists, orthopedists</div>
                      
        </div>

        <div className="flex flex-1  ">
        <div className=" flex-1  justify-center  flex-col "><img src={p52} alt="p52" className=" w-screen   justify-center object-cover " />
        <div className="flex justify-center"><b>Comprehensive Pregnacy Care</b></div>
        <div className="flex "><p>A healthy delivery begins before the labor pain start our team will care for you and your baby from prenatal through delivery
            and post-partum  </p></div>
        </div>
        <div className="flex flex-1 justify-center flex-col  "><img src={p603} alt="p603" className="w-screen h-50 flex justify-center " />
        <div className="flex justify-center"><b>Gynacologic Care</b></div>
        <div className="flex"><p>A healthy delivery begins before the labor pain start our team will care for you and your baby from prenatal through delivery
            and post-partum  </p></div>
        </div>
        <div className="flex flex-1 flex-col"><img src={p18} alt="kkk" className=" w-screen  justify-center h-60 " />
        <div className="flex-1 justify-center flex flex-col  items-center gap-3   "> <p>See a Gynacologist</p>
             <div ><input type="text" placeholder="username" className="border hover:bg-white rounded-md justify-center" 
         /></div>
             <div><input type="maritial status " placeholder="martial status" className="border  hover:bg-white rounded-md text-yellow-100" /></div>
             <div><input type="file number" placeholder="file number" className="border  hover:bg-white rounded-md" /></div>
             <div><input type="mobile number" placeholder="mobile number" className="border  hover:bg-white rounded-md" /></div>
             <div><input type="you problem" placeholder="your problem" className="border  hover:bg-white rounded-md" /></div>
             <div className="inline  "><button className=" flex-grow-0 hover:bg-gray-50  !w-20"><b>Submit</b></button></div>
             </div>
        </div>
        
        </div>
        <div className="flex flex-1 justify-center flex-col  p-4">
        {/* <div className="flex flex-1  justify-center "><b>About us</b></div>
        <div className="flex flex-1  flex-col justify-center bg-gradient-to-tr from-slate-300 via-blue-200 p-8">
        <div className="flex flex-1 border justify-center "><b>Comperhensive care</b></div>
        <div className="flex flex-1 border p-4">Our gynacology department provides comprehensive care for women's reproductive healh. From routine check-ups o complex surgeries,
             our team of experienced gynacologists and nurses are dedicated to delivering personalized care with compassion and empathy </div>
                      
        </div>
         */}
        {/* <div className="flex flex-1  flex-col justify-center bg-gradient-to-tr from-slate-300 via-blue-200 p-4">
        <div className="flex flex-1 border justify-center"><b>Pregnancy Care</b></div>
        <div className="flex flex-1 border p-4">From conception to delivery we offer comprehensive "prenantal" care to ensure a healthy pregnancy and a happy baby.
           Pregnancy can be thrilling yet overwhelming experience. our dedicated team is here to support you physically, emmotionally and mentally throuhout your pregnancy <br />our hospital is highly equiped with the state of art facilities and technology to ensure 
           you recieve the best possible care during your pregnancy.We understand that every pregnancy is umique our team closely with you to creat a intimate care plan tailored to your 
           individual needsand preferences. 
        </div>
                      
        </div> */}
        {/* <div className="flex flex-1 bg-gradient-to-tr from-slate-300 via-blue-200  flex-col justify-center">
        <div className="flex flex-1 border justify-center"><b>Unparalleled Expertise</b></div>
        <div className="flex flex-1 border p-4">"Expert care, Exeptional Outcomes. we own a rapid team of renowned gynacologists and specialists collaborate from other countries like US,UK,CANADA,INDIA 
            to provide comprehensive 100% cutting-edge care for even the most complex conditions </div>
                      
        </div>
        */}
       
        
        
        </div>
        

        
        
        
        </div>
    )
}
export default Gynacology