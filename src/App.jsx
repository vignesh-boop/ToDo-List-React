import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import DashBoard from "./Components/DashBoard";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ProtuctedRouting from "./Components/ProtuctedRouting";

export default function App() {


  
  const [isAuthenticated,setIsAuthenticated] = useState();

 function login(){
    setIsAuthenticated(true); 
  
}  
 function logout(){
    setIsAuthenticated(false);   
}  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage login={login}/>}/>
          <Route element={<ProtuctedRouting isAuthenticated={isAuthenticated}/>}>
                <Route path="/dashboard" element={<DashBoard logout={logout}/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}
