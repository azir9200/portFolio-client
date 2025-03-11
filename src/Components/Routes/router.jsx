import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Pages/Home/Home";
import Myself from "../Pages/About/Myself";
import ContactPage from "../Pages/Contacts/ContactPage";
import Skills from "../Pages/MySkills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Myself />,
      },
      {
        path: "/mySkills",
        element: <Skills />,
      },
      {
        path: "/contacts",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
