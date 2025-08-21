import React from 'react';
import bg from "../assets/bga.png";

const Pricing = () => {
  const lmsPackages = [
    {
      name: "Simple LMS",
      price: "LKR 150,000 – 250,000",
      partnerPrice: "LKR 120,000 – 200,000",
      features: [
        "User registration & login",
        "Class schedules & calendar",
        "Upload lessons/materials",
        "Attendance tracking",
        "Simple quizzes",
        "Responsive UI"
      ],
      delivery: "2 – 3 weeks"
    },
    {
      name: "Starter LMS",
      price: "LKR 300,000 – 450,000",
      partnerPrice: "LKR 250,000 – 375,000",
      features: [
        "All in Simple LMS",
        "Announcements",
        "Notifications",
        "Assignment submission & management",
        "Auto quiz scoring & feedback"
      ],
      delivery: "3 – 4 weeks"
    },
    {
      name: "Standard LMS",
      price: "LKR 500,000 – 750,000",
      partnerPrice: "LKR 400,000 – 600,000",
      features: [
        "All in Starter LMS",
        "Multi-teacher accounts",
        "Progress reports",
        "WhatsApp/SMS notifications"
      ],
      delivery: "5 – 7 weeks"
    },
    {
      name: "Premium LMS",
      price: "LKR 900,000 – 1,500,000",
      partnerPrice: "LKR 800,000 – 1,200,000",
      features: [
        "All in Standard LMS",
        "Live classes & webinars",
        "Payment gateway",
        "Forums & gamification",
        "Multi-branch support"
      ],
      delivery: "8 – 12 weeks"
    }
  ];

  const designServices = [
    { name: "Facebook Post (single)", price: "LKR 500", partnerPrice: "400" },
    { name: "Facebook Post Package (10)", price: "LKR 7,000", partnerPrice: "6,000" },
    { name: "Logo Design – Simple", price: "LKR 2,500", partnerPrice: "2,000" },
    { name: "Logo Design – Basic", price: "LKR 4,000", partnerPrice: "3,000" },
    { name: "Logo Design – Premium", price: "LKR 8,000", partnerPrice: "6,500" },
    { name: "Poster Design – Simple", price: "LKR 1,000 – 1,500", partnerPrice: "800 – 1,200" },
    { name: "Business Card Design", price: "LKR 1,000", partnerPrice: "800" },
    { name: "Letterhead Design", price: "LKR 1,000", partnerPrice: "800" },
    { name: "Social Media Banner", price: "LKR 1,000", partnerPrice: "800" },
    { name: "Flyer/Brochure", price: "LKR 2,000 – 3,500", partnerPrice: "1,500 – 2,500" }
  ];

  const websitePackages = [
    {
      name: "Simple Static Website",
      price: "LKR 20,000 – 30,000",
      partnerPrice: "LKR 15,000 – 25,000",
      features: [
        "3 pages",
        "Mobile-responsive",
        "SEO basics",
        "Contact form",
        "Social media links"
      ],
      delivery: "1 – 2 weeks"
    },
    {
      name: "Basic Website",
      price: "LKR 30,000 – 40,000",
      partnerPrice: "LKR 25,000 – 35,000",
      features: [
        "5 pages",
        "Mobile responsive",
        "Gallery",
        "Contact + Google Maps"
      ],
      delivery: "2 – 3 weeks"
    },
    {
      name: "Standard CMS Website",
      price: "LKR 50,000 – 90,000",
      partnerPrice: "LKR 40,000 – 75,000",
      features: [
        "CMS setup (WordPress/Joomla)",
        "10 pages",
        "Blog",
        "SEO-friendly",
        "Subscription forms",
        "Security setup"
      ],
      delivery: "3 – 5 weeks"
    },
    {
      name: "E-Commerce Website",
      price: "LKR 120,000 – 200,000",
      partnerPrice: "LKR 100,000 – 170,000",
      features: [
        "Product catalog",
        "Cart & checkout",
        "Payment gateway",
        "Customer accounts",
        "Order management",
        "SEO friendly"
      ],
      delivery: "6 – 10 weeks"
    },
    {
      name: "Custom Web Application",
      price: "Starting LKR 180,000",
      partnerPrice: "Starting LKR 150,000",
      features: [
        "Custom backend/frontend",
        "Roles & permissions",
        "API integrations",
        "Reports",
        "Real-time features",
        "Scalable"
      ],
      delivery: "8+ weeks"
    }
  ];

  const mobileAppPackages = [
    { name: "Extra-Small App (≤5 screens, Android only)", price: "LKR 50,000 – 80,000", partnerPrice: "40,000 – 70,000" },
    { name: "Small App (Android ≤10 screens)", price: "LKR 100,000 – 130,000", partnerPrice: "85,000 – 110,000" },
    { name: "Small App (Cross-platform)", price: "LKR 130,000 – 180,000", partnerPrice: "110,000 – 150,000" },
    { name: "Medium App (≤15 screens)", price: "LKR 150,000 – 225,000", partnerPrice: "130,000 – 190,000" },
    { name: "Large App (≤20 screens)", price: "LKR 200,000 – 300,000", partnerPrice: "170,000 – 250,000" },
    { name: "Complex App (Unlimited features, AI, Payments, Sync)", price: "LKR 500,000 – 1,000,000", partnerPrice: "450,000 – 900,000" }
  ];

  const addOns = [
    { name: "Domain", price: "LKR 3,000 – 7,000" },
    { name: "Web Hosting", price: "LKR 5,000 – 15,000" },
    { name: "Maintenance", price: "LKR 10,000 – 25,000/month" },
    { name: "Advanced SEO/Marketing", price: "From LKR 20,000" }
  ];

  const renderPriceCard = (pkg, index) => (
    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-500 transition-all duration-300 text-white">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">{pkg.name}</h3>
      <div className="mb-4">
        <p className="text-lg text-white"><span className="font-semibold">Service Price:</span> {pkg.price}</p>
        <p className="text-blue-300"><span className="font-semibold">Partner Price:</span> {pkg.partnerPrice}</p>
      </div>
      {pkg.features && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-white">Features:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {pkg.features.map((feature, i) => (
              <li key={i} className="text-sm text-white">{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {pkg.delivery && (
        <p className="text-sm text-white"><span className="font-semibold">Delivery Time:</span> {pkg.delivery}</p>
      )}
    </div>
  );

  const renderSimplePriceItem = (item, index) => (
    <div key={index} className="flex justify-between py-2 border-b border-white/10 text-white">
      <span>{item.name}</span>
      <div className="text-right">
        <p className="text-white">{item.price}</p>
        <p className="text-blue-300 text-sm">Partner: {item.partnerPrice}</p>
      </div>
    </div>
  );

  return (
    <section
      className="w-full min-h-screen py-16 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-white">Our Pricing</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Competitive pricing for all your digital needs. Partner prices available for resellers and agencies.
          </p>
        </div>

        {/* LMS Development Packages */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">LMS Development Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lmsPackages.map((pkg, index) => renderPriceCard(pkg, index))}
          </div>
        </section>

        {/* Website Development Packages */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Website Development Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websitePackages.map((pkg, index) => renderPriceCard(pkg, index))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Creative Design Services */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-white border-b pb-2 border-blue-600">Creative Design Services</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              {designServices.map((item, index) => renderSimplePriceItem(item, index))}
            </div>
          </section>

          {/* Mobile App Development */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-white border-b pb-2 border-blue-600">Mobile App Development</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              {mobileAppPackages.map((item, index) => renderSimplePriceItem(item, index))}
            </div>
          </section>
        </div>

        {/* Add-ons */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Add-Ons</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((item, index) => (
              <div key={index} className="bg-white backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                <h4 className="font-semibold text-blue-400">{item.name}</h4>
                <p className="text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mt-16 pt-8 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
          <div className="space-y-2 text-gray-300">
            <p>Chamara Ruwan</p>
            <p>📧 Email: <a href="mailto:contact@axenora.lk" className="text-blue-400 hover:underline">contact@axenora.lk</a></p>
            <p>📱 Phone: <a href="tel:+94705768036" className="text-blue-400 hover:underline">+94 70 576 8036</a></p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Pricing;
