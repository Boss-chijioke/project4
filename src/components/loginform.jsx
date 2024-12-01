function LoginForm(){
    return(
        <div className="flex-1 w-full flex flex-col justify-center items-center  gap-3 ">
        <div className="text-black text-lg">welcome you have made a right choice</div>
        <div><input type="text" placeholder="username" className="border  hover:bg-white rounded-md " 
         /></div>
        <div><input type="file number" placeholder="file number" className=" border  hover:bg-white rounded-md focus:ring-0 focus:ring-offset-0" /></div>
         <div><input type="sex" placeholder="sex" className="border  hover:bg-white rounded-md" /></div>
        <div><input type="email" placeholder="email" className="border   hover:bg-white rounded-md" /></div>
        <div className="text-black text-lg">Dont have a file?</div>
        <div className="justify-end items-end flex-1 flex" ><button className="w-10 rounded-lg">register</button></div>
        <div className="shadow flex">
        <input className="w-full rounded p-2" type="text" placeholder="Search..." />
        <button className="w-auto flex julightstify-end items-center text-blue p-2 hover:text-blue-">
            
        </button>
   </div>
    </div>


    )
}
export default LoginForm