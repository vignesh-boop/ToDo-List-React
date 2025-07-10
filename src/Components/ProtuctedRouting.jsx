import React from 'react'
import {Navigate, Outlet, useNavigate} from 'react-router-dom' 

export default function ProtuctedRouting({isAuthenticated}) {
     

return isAuthenticated?<Outlet/>:<Navigate to={'/'}/>;
  
}
 