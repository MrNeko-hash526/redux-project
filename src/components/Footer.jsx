import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold text-gray-200">&copy; 2025 My E-commerce Store</p>
        <p className="mt-2">Contact us:</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@myecommerce.com"
            className="text-indigo-400 hover:underline"
          >
            support@myecommerce.com
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-500"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-500"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-500"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
        <div className="mt-4">
          <Link
            to="/terms"
            className="text-gray-400 hover:text-gray-200 mx-2"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-gray-200 mx-2"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;