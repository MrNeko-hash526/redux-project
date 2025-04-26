import React from "react";

function TermsOfService() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
        <p className="text-gray-400 mb-4">
          Welcome to our e-commerce store. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-400 mb-4">
          By using our website, you agree to these Terms of Service. If you do not agree, please do not use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Use of the Website</h2>
        <p className="text-gray-400 mb-4">
          You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="text-gray-400 mb-4">
          All content on this website, including text, graphics, logos, and images, is the property of our e-commerce store and is protected by copyright laws.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-400 mb-4">
          We are not responsible for any damages or losses resulting from your use of our website or the products purchased from it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
        <p className="text-gray-400 mb-4">
          We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website constitutes your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="text-gray-400 mb-4">
          If you have any questions about these Terms of Service, please contact us at{" "}
          <a
            href="mailto:support@myecommerce.com"
            className="text-indigo-400 hover:underline"
          >
            support@myecommerce.com
          </a>.
        </p>

        <p className="text-gray-400 mt-8 text-center">
          &copy; 2025 My E-commerce Store. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;