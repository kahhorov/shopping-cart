import { Outlet } from "react-router-dom";
import { Error, Footer, Navbar } from "../components";
import UseGetApi from "../hooks/UseGet";

function MainLayout() {
  const { error } = UseGetApi();
  console.log(error);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Navbar />
      <main className="grow mt-30 container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
