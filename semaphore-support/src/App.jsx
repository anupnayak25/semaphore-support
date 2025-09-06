
import Faq from "./pages/Faqs";
import Rules from "./pages/Events";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import ComingSoon from "./pages/ComingSoon";
import { RouterProvider } from "react-router-dom";
const App = () => {
 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>} />
        <Route path="FAQ" element={<Faq />} />
        <Route path="Events" element={<Rules />} />
        <Route path="Timings" element={<ComingSoon />} />
        <Route path="HeadsAndCoordinators" element={<ComingSoon />} />
      </Route>
    )
  );



  return ( 
    <RouterProvider router={router} />
  );
}

export default App;