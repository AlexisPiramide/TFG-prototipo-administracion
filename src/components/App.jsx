import { Outlet } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Embellezedores from "./Embellezedores";

export default function App() {



  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
      <Embellezedores />
    </>
  );
}
