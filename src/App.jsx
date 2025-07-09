import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";
import Setting from "./Components/Setting";
import Profile from "./Components/Profile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="settings" element={<Setting />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
