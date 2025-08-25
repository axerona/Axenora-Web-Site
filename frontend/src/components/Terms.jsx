import React from "react";
import bg from "../assets/img.png"; // background image for hero

const Terms = () => {
  return (
    <section className="w-full min-h-screen bg-[#0a0f2c]">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-80 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={bg}
            alt="Terms Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Please read our terms carefully before using Axenora Technology’s
            services.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-200 leading-relaxed">
        <p className="mb-6">
          Welcome to <span className="font-semibold">Axenora Technology</span>.
          By accessing or using our website, products, or services, you agree to
          the following terms and conditions:
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By using our services, you agree to comply with these Terms. If
              you do not agree, please discontinue use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">2. Use of Services</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must be at least 13 years old to use our services.</li>
              <li>You agree not to misuse, hack, or exploit our services.</li>
              <li>Our products are provided for lawful purposes only.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">3. Intellectual Property</h2>
            <p>
              All content, trademarks, and technology belong to Axenora
              Technology unless otherwise stated. You may not copy, resell, or
              redistribute our products without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                You are responsible for maintaining the confidentiality of your
                account.
              </li>
              <li>
                You must provide accurate and up-to-date information when
                registering.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">5. Limitation of Liability</h2>
            <p>
              We strive for accuracy but do not guarantee error-free or
              uninterrupted service. Axenora Technology is not liable for
              damages resulting from the use or inability to use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">7. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use constitutes
              acceptance of the new Terms.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Axenora Technology. All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Terms;
