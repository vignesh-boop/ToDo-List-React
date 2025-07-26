import React from 'react'
import { MainContainer } from '../styles/common'
import { NavBar } from './pages/NavBar'
import { ToDo } from './pages/ToDo'
import { Footer } from './pages/Footer'
import { useSelector } from 'react-redux'
import SnackBar from './shared/SnackBar'




export default function Root() {

  const snackBar = useSelector((state)=>state?.todo?.snackBar);
  return (
    <>
    <MainContainer>
   <NavBar/>
   <ToDo/>
   <Footer/>
   {snackBar && <SnackBar/>}
    </MainContainer>
    </>
  )
}
