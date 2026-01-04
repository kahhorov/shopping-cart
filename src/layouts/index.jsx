import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="grow container mt-40">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default MainLayout;
