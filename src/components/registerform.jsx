function RegisterForm({isLogin, setisLogin}){
    return(
        <div className="flex-1 w-full flex flex-col justify-center items-center  gap-3">
        <div className="text-blue-300 text-lg">welcome back login </div>
        <div><input type="text" placeholder="username" className="border bg-teal-300 hover:bg-white rounded-md " 
         /></div>
        <div><input type="password" placeholder="password" className="border bg-teal-300 hover:bg-white rounded-md" /></div>
        <div><input type="email" placeholder="email" className="border bg-teal-300 hover:bg-white rounded-md" /></div>
        <div className="text-blue-300 text-lg">Already have an account </div>
        <div className="justify-end items-end flex-1 flex "><button className="w-10 bg-green-200 rounded-lg" onClick={()=>setisLogin(!isLogin)}>login</button></div>
    </div>


    )
}
export default RegisterForm