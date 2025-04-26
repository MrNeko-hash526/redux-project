import React from "react";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-400 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-gray-400 mb-4">
          We may collect personal information such as your name, email address, shipping address, and payment details when you make a purchase or register on our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-400 mb-4">
          We use your information to process orders, provide customer support, and improve your shopping experience. We may also send you promotional emails if you opt in.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
        <p className="text-gray-400 mb-4">
          We do not sell or share your personal information with third parties, except as necessary to process your orders (e.g., payment processors and shipping companies).
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
        <p className="text-gray-400 mb-4">
          Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, but some features of the website may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-gray-400 mb-4">
          We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
        <p className="text-gray-400 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="text-gray-400 mb-4">
          If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;