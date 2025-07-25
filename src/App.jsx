
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/shared/NavBar";
import { Box } from "@mui/material";
import Root from "./Components/Root";

export default function App() {
  
  return (
    <>
   <BrowserRouter>
   <NavBar/>
   <Box sx={{marginTop:'80px'}}>
    <Root/>
   </Box>
   
   </BrowserRouter>
    </>
  );
}
