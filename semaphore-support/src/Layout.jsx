import { Outlet } from "react-router-dom";


import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop/>
     
      <Outlet />
     

    </>
  );
}

export default Layout;