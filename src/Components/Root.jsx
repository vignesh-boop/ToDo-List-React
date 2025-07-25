import React from 'react'
import {Routes,  Route } from 'react-router-dom'
import { routes } from '../router/RoutesPaths'



export default function Root() {
  return (
    <>
    <Routes>
        {routes.map(({path,element},index)=>(
            <Route key={path+index} path={path} element={element}/>
        ))}
    </Routes>

    
    </>
  )
}
