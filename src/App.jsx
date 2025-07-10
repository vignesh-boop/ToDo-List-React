import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import DashBoardPage from "./Components/DashBoardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {

const [isAuthenticated ,setIsAuthenticated] = useState();
const login =()=>{
  setIsAuthenticated(true);
};

const logout =()=>{
  setIsAuthenticated(false);
};
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
      <Route path="/dashboard" element={<DashBoardPage logout={logout}/>}/>
      </Route>
      <Route path="/" element={<LoginPage login ={login}/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}
