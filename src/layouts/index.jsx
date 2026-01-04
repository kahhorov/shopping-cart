import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="grow container mt-40">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
