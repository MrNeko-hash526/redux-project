import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;