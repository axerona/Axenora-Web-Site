import React from 'react';
import bg from "../assets/bga.png";

const Pricing = () => {
  const lmsPackages = [
    {
      name: "Simple LMS",
      price: "USD 498 - 829",
      
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
      price: "USD 995 - 1492",
     
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
      price: "USD 1658 - 2487",
      
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
      price: "USD 2984 - 4973",
     
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
    { name: "Facebook Post (single)", price: "USD 2"},
    { name: "Facebook Post Package (10)", price: "USD 24"},
    { name: "Logo Design – Simple", price: "USD 9"},
    { name: "Logo Design – Basic", price: "USD 14"},
    { name: "Logo Design – Premium", price: "USD 27"},
    { name: "Poster Design – Simple", price: "USD 4 - 5"},
    { name: "Business Card Design", price: "USD 10"},
    { name: "Letterhead Design", price: "USD 4"},
    { name: "Social Media Banner", price: "USD 4"},
    { name: "Flyer/Brochure", price: "USD 7 - 12"}
  ];

  const websitePackages = [
    {
      name: "Simple Static Website",
      price: "USD 67 - 100",
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
      price: "USD 100 - 133",
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
      price: "USD 165 - 300",
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
      price: "USD 398 - 663",
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
      price: "Starting USD 597",
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
    { name: "Extra-Small App (≤5 screens, Android only)", price: "USD 166 - 266"},
    { name: "Small App (Android ≤10 screens)", price: "USD 332 - 431"},
    { name: "Small App (Cross-platform)", price: "USD 431 - 597"},
    { name: "Medium App (≤15 screens)", price: "USD 498 - 746"},
    { name: "Large App (≤20 screens)", price: "USD 663 - 995"},
    { name: "Complex App (Unlimited features, AI, Payments, Sync)", price: "USD 1658 - 3315"}
  ];

  const addOns = [
    { name: "Domain", price: "USD 10 - 24" },
    { name: "Web Hosting", price: "USD 17 - 50" },
    { name: "Maintenance", price: "USD 34 - 83/month" },
    { name: "Advanced SEO/Marketing", price: "From USD 67" }
  ];

  const renderPriceCard = (pkg, index) => (
    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-500 transition-all duration-300 text-white">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">{pkg.name}</h3>
      <div className="mb-4">
        <p className="text-lg text-white"><span className="font-semibold">Service Price:</span> {pkg.price}</p>
        
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
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            <span className="inline-block pb-1 leading-tight">Our Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Competitive pricing for all your digital needs. Partner prices available for resellers and agencies.
          </p>
        </div>

        
        <section className="mb-20">
          <h3 className="text-lg font-semibold mb-6 text-white text-center">LMS Development Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lmsPackages.map((pkg, index) => renderPriceCard(pkg, index))}
          </div>
        </section>

         
        <section className="mb-20">
          <h3 className="text-lg font-semibold mb-6 text-white text-center">Website Development Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websitePackages.map((pkg, index) => renderPriceCard(pkg, index))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
           
          <section>
            <h3 className="text-sm font-semibold mb-4 text-white border-b pb-2 border-blue-600">Creative Design Services</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              {designServices.map((item, index) => renderSimplePriceItem(item, index))}
            </div>
          </section>
 
          <section>
            <h3 className="text-sm font-semibold mb-4 text-white border-b pb-2 border-blue-600">Mobile App Development</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              {mobileAppPackages.map((item, index) => renderSimplePriceItem(item, index))}
            </div>
          </section>
        </div>
 
        <section className="mb-12">
          <h3 className="text-sm font-semibold mb-6 text-white text-center">Add-Ons</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((item, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                <h4 className="font-semibold text-blue-400">{item.name}</h4>
                <p className="text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Pricing;
