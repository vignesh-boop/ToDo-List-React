// import React from 'react'
// import Home from './Components/Home'
// import About from './Components/About'
// import Contact from './Components/Contact'
// import { Route ,Routes,BrowserRouter} from 'react-router-dom'
// import NavBar from './Components/NavBar'
// import PageNotFound from './Components/PageNotFound'
import Calculator from './Components/Calculator';


export default function App() {
  return (
    <>
    {/* <BrowserRouter> */}
    {/* <Routes>
      <Route path="/" element={<NavBar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes> */}
    {/* </BrowserRouter> */}

    <Calculator/>
    </>
  )
}
