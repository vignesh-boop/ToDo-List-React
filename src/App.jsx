import DisplayPage from "./Components/DisplayPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<DisplayPage/>}/>
        <Route path="/home/:displ" element={<DisplayPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
