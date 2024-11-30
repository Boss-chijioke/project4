import p9 from "../assets/p9.jpg"
import me from "../assets/me.jpg"
import p902 from "../assets/p902.png"
import p29 from "../assets/p29.jpg"
function Eye (){
    return(
        <div className="flex border flex-col bg-gradient-to-tr from-blue-600 via-white  ">
           <div className="flex border   ">
              
              
            <div className="flex-1  flex border flex-col "><img src={p29} alt="p29" className="absolute inset-0 object-cover w-full 
        h-90 -z-10 group-hover:opacity-50"/></div>

              </div>
              <div className="flex border   ">
              <div className="flex-1 "> <p><b className="flex justify-center">Your Vision Our Passion</b></p>
              <b className="flex justify-center">Caring for your vision enhancing your life</b>
              <div className=" flex-1 p-4 text-lg m-2"><p className="flex text-balance text-lg">Professional and Expertise-Focused  </p> Our team of experienced eye care professionals personalised services to meet your unique needs. From routine exams to complex surgeries, we got you covered </div>
              <div className=" flex-1 p-4 text-lg m-2"><p className="flex text-balance text-lg">See the world with clarity and confidence </p> Your eyes are precious. Schedule regular check-ups to protect them 
             </div>
             <div className=" flex-1  p-4 text-lg m-2"><p className="flex text-balance text-lg">Seeing is believing</p> Protect your eyes from harm. Wear sunglasses with UV protection and safety googles when necessary 
             priortize eye care for a better future</div></div>
              
            <div className="flex-1 h-90 flex border flex-col "><img src={p902} alt="p902" /></div>

              </div>
           
               <div className="flex   ">
            <div className="flex-1  flex justify-center bg-gradient-to mt-8 pt-4 ">
                 <div className="flex justify-end flex-1 "><img src={p9} alt="p9" className="flex justify-center rounded-full mt-8 pt-4" /></div>
                 <div className="flex-1 flex  justify-self-end"> <img src={me} alt="me" className="flex  rounded-full mb-20 mr-6 pt-4" /></div>
                 </div>
            
        </div>

        <div className="flex   ">
            <div className="flex-1"><b className="flex justify-center">20% Discount for first collaboration</b>
            <div className=" flex-1 p-2 text-lg m-2"><p>Personalised treatment</p>Specialized  testing
            
            </div>
            <div className=" flex-1  p-4 text-lg m-2"><p className="flex text-balance text-lg">Board Certified Opthamolgist </p>Do you know that 80% of what we learn is through the eye.
             priortize eye care for a better future</div>
            </div>
            <div className="flex-1 h-90 flex  flex-col justify-center ">
                <b className="flex justify-center"><ol>our expert care services</ol></b> 
                <li className="ml-10 p-2" >cataract sugery</li>
                <li className="ml-10 p-2" >eye examinations</li>
                <li className="ml-10 p-2" >Pedatric eye care</li>
                <li className="ml-10 p-2" >Vision theory</li></div>
        </div>
        <div className="flex justify-center"><b>Discover your perfect lens</b></div>

        <div className="flex  ">
          <div className="flex-1 flex flex-col  ">
            <div className="flex-1  justify-center items-center flex  m-2"><button>Learn more</button></div>
            <div className="flex-1 flex justify-center items-center m-2"><button>Shop now</button></div>
          </div>
          <div className="flex-1 flex justify-center items-center"><button>Schedule now</button></div>
        </div>
        
        
        </div>
        

    )
}
export default Eye

