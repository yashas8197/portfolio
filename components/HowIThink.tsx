import React from "react";

const HowIThink = () => {
  const values = [
    {
      title: "What I Care About",
      icon: "🎯",
      items: [
        "Business problems over code problems",
        "Systems that scale with human operations",
        "Reliability as a core feature",
        "Architectural clarity for team velocity",
      ],
    },
    {
      title: "What I Value",
      icon: "⭐",
      items: [
        "Predictable behavior over 'clever' code",
        "Operational stability",
        "Iterative shipping & feedback loops",
        "Documentation as a force multiplier",
      ],
    },
  ];

  return (
    /* CHANGE: bg-white text-slate-900 → bg-white (text color inherited), add border-t border-slate-100 */
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        {/* CHANGE: mb-12 → mb-16 for consistency, text-slate-500 → text-slate-600 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-100 pb-8">
          <div>
            {/* CHANGE: font-extrabold → font-bold */}
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              How I Think
            </h2>
            {/* CHANGE: text-slate-500 → text-slate-600, max-w-md → max-w-2xl */}
            <p className="text-lg text-slate-600 max-w-2xl">
              My philosophy on building resilient products and scalable
              engineering cultures.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Philosophy // 01
            </span>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Stack Card - Spans 7 columns */}
          {/* CHANGE: rounded-3xl → rounded-2xl */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between">
            <div>
              {/* CHANGE: rounded-2xl → rounded-xl for consistency */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6">
                🛠️
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Go-To Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["TypeScript", "Node.js", "PostgreSQL", "Redis", "Next.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
  I start by understanding{" "}
  <span className="text-slate-900 font-semibold">
    the actual business problem
  </span>
  , not just what needs to be built.
  <br />
  <br />
  Most of my work is done with{" "}
  <span className="text-slate-900 font-semibold">
    React, Node.js, and PostgreSQL
  </span>
  , because they let me move fast without losing control over data or system
  performance.
  <br />
  <br />
  I try to keep things{" "}
  <span className="text-slate-900 font-semibold">
    simple and predictable
  </span>
  . I avoid clever abstractions early and focus on code that’s easy to read,
  debug, and extend when requirements change.
  <br />
  <br />
  When making trade-offs, I lean toward{" "}
  <span className="text-slate-900 font-semibold">
    scalability and user experience
  </span>{" "}solid performance, clean UI, and systems that don’t slow teams down over
  time.
</p>



            </div>

            {/* CHANGE: rounded-2xl → rounded-xl */}
            <div className="bg-slate-900 rounded-xl p-5 text-slate-300 text-sm italic border-l-4 border-blue-500">
  "Business-first thinking, simple systems, and code that scales with the team."
</div>


          </div>

          {/* Values & Care Cards - Spans 5 columns */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {values.map((group, idx) => (
              /* CHANGE: rounded-3xl → rounded-2xl */
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 text-sm"
                    >
                      <span className="text-blue-500 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
