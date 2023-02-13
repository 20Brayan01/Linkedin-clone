import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // ⚠️ verify it's the correct path
import Home from "./components/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
    </>
  );
};

export default Layout;