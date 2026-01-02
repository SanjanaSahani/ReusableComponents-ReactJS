import React from "react";

function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #111827, #1e3a8a)",
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          This is a hero section. The transparent navbar sits on top of this,
          just like real landing pages.
        </p>
      </div>
    </section>
  );
}

export default Hero;

