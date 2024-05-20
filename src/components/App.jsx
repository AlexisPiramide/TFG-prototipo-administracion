import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <Nav />
      <Menu />
      <Outlet />
    </>
  );
}
