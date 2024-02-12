import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import MySkills from "../Pages/MySkills/MySkills";
import Contacts from "../Pages/Contacts/Contacts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home> 
      },
      {
        path: '/about',
        element: <About></About> 
      
      },
      {
        path: '/mySkills',
        element: <MySkills></MySkills>
      
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>
      }
    ]
  },
]);

export default router;