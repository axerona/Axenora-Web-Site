import React from "react";
import bg from "../assets/img.png"; // <-- make sure this path matches your bg image

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy" className="w-full min-h-screen bg-[#0a0f2c]">
      {/* Hero Section */}
      <div className="relative w-full h-80 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bg}
            alt="Privacy Policy Background"
            className="w-full h-full object-cover"
          />
          {/* Blur & Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At Axenora Technology, we value your privacy and are committed to
            protecting it.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-300">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Do Not Collect
            </h2>
            <p>
              We do not require users to create an account, log in, or register
              to access our website. We do not collect personal details unless
              you voluntarily provide them (e.g., contact form).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Information We May Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies & Analytics:</strong> Used to understand how
                visitors use our website and improve our services.
              </li>
              <li>
                <strong>Device & Usage Data:</strong> Basic info like IP,
                browser type, and OS may be collected for performance and
                security.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. How We Use the Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To improve website performance and user experience.</li>
              <li>To ensure the website remains secure and accessible.</li>
              <li>To analyze traffic and enhance services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Data Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your information. Limited,
              non-personal data may be shared with trusted providers for
              performance improvements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Security</h2>
            <p>
              We apply reasonable security measures, but no method of internet
              transmission is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Third-Party Links
            </h2>
            <p>
              Our site may link to external websites. We are not responsible for
              their practices, so review their policies separately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy. Any changes will be posted here
              with an updated <em>“Effective Date.”</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
