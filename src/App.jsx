import Profile from "./Components/Profile";
import Settings from "./Components/settings";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<TemporaryDrawer/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="settings" element={<Settings/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}
