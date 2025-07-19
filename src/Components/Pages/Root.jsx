import React, { createContext, useState } from 'react'
import NavBar from './NavBar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import { routes } from '../../routes/routes'


export const AppContext = createContext();

export default function Root() {

    const[userDetails,setUserDetails]=useState();
    const[selectedResult,setSelectedResult]=useState();

  return (
    <>
    <BrowserRouter>
    <AppContext.Provider value={{userDetails,setUserDetails,selectedResult,setSelectedResult}}>
    <NavBar/>
    <Routes>
            {routes?.map(({path,Component},index)=>(
                    <Route path={path} element={<Component/>} key={index}/>
            ))}
    </Routes>
    </AppContext.Provider>
    </BrowserRouter>
    </>
  )
}
