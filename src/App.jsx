
import { useState } from "react";
import Items from "./Components/Items";
import LoginPage from "./Components/LoginPage";
import ProductPage from "./Components/ProductPage";
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import ProtectedRouting from "./Components/ProtectedRouting";
import CartItems from "./Components/CartItems";
import Billing from "./Components/Billing";




export default function App() {

  const [isAuthenticated , setIsAuthenticated] = useState(false);
    
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouting isAuthenticated={isAuthenticated}/>}>
          <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/dashboard" element={<ProductPage/>}>
          <Route path="items" element={<Items/>}/>
          <Route path="cart" element={<CartItems/>}/>
          <Route path="cart/billing" element={<Billing/>}/>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}
