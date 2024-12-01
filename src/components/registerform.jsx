function RegisterForm(){
    return(
        <div className="flex-1 w-full flex flex-col justify-center items-center  gap-3">
        <div className="text-blue-300 text-lg"><marquee>welcome to boss chijioke Internationals</marquee> </div>
        <div><input type="text" placeholder="Name" className="border  hover:bg-white rounded-md " 
         /></div>
        <div><input type="Blood group" placeholder="Blood group" className="border  hover:bg-white rounded-md" /></div>
        <div><input type="email" placeholder="email" className="border  hover:bg-white rounded-md" /></div>
        <div><input type="D.O.B" placeholder="D.O.B" className="border  hover:bg-white rounded-md" /></div>
        <div><input type="Age" placeholder="Age" className="border  hover:bg-white rounded-md" /></div>
        <div><input type="Phone" placeholder="Phone" className="border  hover:bg-white rounded-md" /></div>
        <div className="text-blue-300 text-lg">Already have an account </div>
        <div className="justify-end items-end flex-1 flex "><button className="w-10  rounded-lg">login</button></div>
    </div>


    )
}
export default RegisterForm