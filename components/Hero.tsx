"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Static top text */}
        <div className="text-xs md:text-sm font-semibold tracking-widest uppercase h-5 md:h-6 flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          This portfolio is built for fast skimming. Click what interests you.
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Building Systems That Drive Products Forward
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          I build complete product experiences from the interfaces customers
          interact with to the systems that power them behind the scenes, that
          drive user engagement and business growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/about"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            About Me
          </Link>
          <Link
            href="/#blog"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
