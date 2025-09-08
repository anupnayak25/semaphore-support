

import Faq from "./pages/Faqs";
import Rules from "./pages/Events";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import ComingSoon from "./pages/ComingSoon";
import { RouterProvider } from "react-router-dom";
import Schedules from "./pages/Schedules";
import HeadsAndCoordinators from "./pages/HeadsAndCoordinators";
import Location from "./pages/Location";
import { Toaster } from "react-hot-toast";
const App = () => {
 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>} />
        <Route path="FAQ" element={<Faq />} />
        <Route path="Events" element={<Rules />} />
        <Route path="Map" element={<Location />} />
        <Route path="Timings" element={<Schedules />} />
        <Route path="HeadsAndCoordinators" element={<HeadsAndCoordinators/>} />
      </Route>
    )
  );



  return (
    <>
    <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "h-20",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#DFD0B8",
            color: "#000000",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              secondary: "#DFD0B8",
              primary: "#000000",
            },
          },
        }}
      />
    <RouterProvider router={router} />
</>
 
  );

}

export default App;