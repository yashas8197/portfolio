const Connect = () => {
  return (
    <section
      id="connect"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* CHANGE: text-4xl md:text-5xl font-extrabold → text-4xl font-bold */}
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Product First Engineer
        </h2>

        {/* CHANGE: text-gray-600 → text-slate-600 */}
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          If you&apos;re hiring, curious about my work, or building something
          that needs to move fast and make money, I&apos;d love to talk.
        </p>

        {/* CHANGE: bg-primary → bg-blue-600, hover:bg-blue-700, text-primary → text-blue-600, border-primary → border-blue-600, rounded-md → rounded-lg, font-medium → font-semibold */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* <a
            href="#"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Book a Call
          </a> */}
          <a
            href="https://drive.google.com/file/d/1PFv4ee2H3e1cTHqSOkOHR1vU4yx0LUTG/view"
            target="_blank"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
