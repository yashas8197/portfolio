import AnimateOnScroll from "./AnimateOnScroll";

const HowIThink = () => {
  const points = [
    {
      num: "01",
      title: "Business First",
      desc: "I focus on real problems before writing code. Every technical decision maps to a business outcome.",
    },
    {
      num: "02",
      title: "Performance is a Feature",
      desc: "I optimize queries, reduce waste, and measure impact. Speed isn't a nice-to-have — it's the product.",
    },
    {
      num: "03",
      title: "Simple Systems Scale",
      desc: "I prefer predictable code over clever abstractions. The best architecture is the one you can reason about.",
    },
  ];

  const stack = ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="mb-14">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              How I Think
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              My approach to building scalable and reliable products.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {points.map((point, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="group bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 h-full">
                <span className="text-xs font-bold text-blue-600 tracking-wider mb-4 block">
                  {point.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Go-to stack */}
        <AnimateOnScroll delay={0.2}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm font-semibold text-slate-900 uppercase tracking-wide shrink-0">
              Go-To Stack
            </span>
            <div className="h-px bg-slate-200 hidden sm:block w-12" />
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm bg-white border border-slate-200 rounded-full text-slate-600 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowIThink;
