import React, { useState } from "react";
import bg from "../assets/Img.png";

const FORM_ENDPOINT = "https://formspree.io/f/mqadzoqn";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setDone(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check (bots will fill hidden field)
    if (data.get("_gotcha")) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data, // FormData so Formspree parses fields
      });

      if (res.ok) {
        setDone(true);
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        const msg =
          j?.errors?.map((e) => e.message).join(", ") ||
          "Something went wrong. Please try again.";
        setErr(msg);
      }
    } catch {
      setErr("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full min-h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 text-white z-10">
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold">Reach Us</h2>
          <p className="text-lg opacity-90">Contact</p>
          <div className="space-y-2 text-sm opacity-90">
            <p>Axenora Technology (Pvt) Ltd</p>
            <p>Email: <a href="mailto:info@axenoratechnology.com" className="underline">info@axenoratechnology.com</a></p>
            <p>Address: xxxxxxxxxxxxxxxxxxxx</p>
            <p>Phone: xxxxxxxxxxx</p>
          </div>
        </div>

        {/* Right (Form) */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 border border-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="New message from website contact form" />
          <input type="hidden" name="_origin" value={typeof window !== "undefined" ? window.location.href : ""} />
          {/* Honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="space-y-1">
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 p-2"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 p-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={3}
              name="message"
              required
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 p-2"
              placeholder="Write your message"
            />
          </div>

          {err && <p className="text-red-300 text-sm">{err}</p>}
          {done && (
            <p className="text-emerald-300 text-sm">
              Thanks! Your message has been sent. We’ll get back to you soon.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition text-white py-3 rounded-lg shadow-md"
          >
            {loading ? "Sending..." : "Send your message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
