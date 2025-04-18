import { Outlet,Link } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
    return (
        <div className="container mx-auto p-4">
            <NavBar />
            <Outlet />
            <footer className="text-center bg-gray-800 text-white py-4 mt-4" >
                <p>&copy; 2025 My E-commerce Store</p>
                <p>Contact us:</p>
                <p>Email: support@myecommerce.com</p>
                <p>Follow us on social media!</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </footer>
        </div>
    );}

    export default Layout;