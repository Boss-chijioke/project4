import {Routes, Route} from "react-router-dom"

import Menu from "./components/menu"

import Services from "./components/services"
import Products from "./components/products"
import Home from "./components/home"
import Footer from "./components/footer" 
import RegisterForm from "./components/registerform"
import LoginForm from "./components/loginform"
import SpecialAppointment from "./components/specialappointment"
import Pediatrics from "./components/pediatrics"
import Eye from "./components/eye"
import Diagnostic from "./components/diagnostic"
import Gynacology from "./components/gynacology"
import Footeer2 from "./components/footeer2"
import News from "./components/news"

export default function App() {
  return (
    <div>
   <Menu/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/specialappointment" element={<SpecialAppointment/>}/>
      <Route path="/pediatrics" element={<Pediatrics/>}/>
      <Route path="/eye" element={<Eye/>}/>
      <Route path="/diagnostic" element={<Diagnostic/>}/>
      <Route path="/gynacology"element={<Gynacology/>}/>
      <Route path="/news"element={<News/>}/>
    </Routes>
    <Footeer2/>
    <Footer/>
  </div>
  )
}