import NavBar from "./components/NavBar"; // Ensure the file exists and matches the case
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main style={{ marginTop: "5rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;