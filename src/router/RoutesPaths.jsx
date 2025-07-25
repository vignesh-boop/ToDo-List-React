import Courses from "../Components/pages/Courses";
import Home from "../Components/pages/Home";
import Profile from "../Components/pages/Profile";
import SigIn from "../Components/pages/SigIn";
import ROUTE_PATH from "./routePath";


export const routes =[
    {
        path : ROUTE_PATH.home,
        element : <Home/>
    },
    {
        path : ROUTE_PATH.profile,
        element : <Profile/>
    },
    {
        path : ROUTE_PATH.courses,
        element : <Courses/>
    },
    {
        path : ROUTE_PATH.sigIn,
        element : <SigIn/>
    },

]
