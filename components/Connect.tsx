import AnimateOnScroll from "./AnimateOnScroll";

const Connect = () => {
  return (
    <section
      id="connect"
      className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
            Let&apos;s build together
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Product First Engineer
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            If you&apos;re hiring, curious about my work, or building something
            that needs to move fast and make money — I&apos;d love to talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:yashasv.mail@gmail.com"
              className="group px-8 py-3.5 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Get in Touch
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1i39CCx5NYGoR-Uj560NF__2Xovk3wq-z/view?usp=sharing"
              target="_blank"
              className="px-8 py-3.5 bg-transparent text-white border border-slate-600 rounded-xl font-semibold hover:border-slate-400 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto"
            >
              Download Resume
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Connect;
