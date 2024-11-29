function LoginForm(){
    return(
        <div className="flex-1 w-full flex flex-col justify-center items-center  gap-3">
        <div className="text-black text-lg">welcome you have made a right choice</div>
        <div><input type="text" placeholder="username" className="border bg-teal-300 hover:bg-white rounded-md " 
         /></div>
        <div><input type="password" placeholder="password" className="border bg-teal-300 hover:bg-white rounded-md" /></div>
         <div><input type="sex" placeholder="sex" className="border bg-teal-300 hover:bg-white rounded-md" /></div>
        <div><input type="email" placeholder="email" className="border bg-teal-300 hover:bg-white rounded-md" /></div>
        <div className="text-black text-lg">Dont have a file?</div>
        <div className="justify-end items-end flex-1 flex" ><button className="w-10 bg-green-200 rounded-lg">register</button></div>
    </div>


    )
}
export default LoginForm