const Products = () => {
  const products = [
    {
      name: "AI Code Generation Platform",
      date: "Coming Soon",
      description:
        "Bolt-style AI application that generates full-stack projects from natural language descriptions with live in-browser preview",

      approach: [
        "Built two-stage AI pipeline using Claude Haiku for project classification and Sonnet for code generation",
        "Integrated WebContainer API for in-browser Node.js runtime to preview generated apps live",
        "Designed XML-based artifact format with custom parser to structure AI output into file trees and shell commands",
      ],

      tech: [
        "React 19",
        "TypeScript",
        "Redux Toolkit",
        "Express",
        "Claude API",
        "WebContainer",
        "Monaco Editor",
        "Vite",
      ],

      outcomes: [
        "Generates complete project scaffolds with build configs, routing, and styling from a single prompt",
        "Live preview runs entirely in-browser with no external deployment needed",
        "Supports intelligent React vs Node.js project type detection",
      ],
    },
  ];

  return (
    <section id="products" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* CHANGE: text-slate-500 → text-slate-600, max-w-md → max-w-2xl */}
        <div className="mb-16 border-b border-slate-100 pb-8">
          {/* CHANGE: font-extrabold → font-bold */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Building solutions that create tangible business value.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((project, index) => (
            /* CHANGE: rounded-3xl → rounded-2xl */
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* CHANGE: mb-4 → mb-6, text-dark → text-slate-900, text-gray-500 → text-slate-400 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.name}
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mt-2 md:mt-0">
                  {project.date}
                </span>
              </div>

              {/* CHANGE: text-base text-gray-700 → text-base text-slate-600, mb-6 → mb-8 */}
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* CHANGE: text-primary → text-blue-600, mb-3 → mb-4 */}
                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                    The Approach
                  </h4>
                  {/* CHANGE: space-y-2 → space-y-3 */}
                  <ul className="space-y-3">
                    {project.approach.map((item, i) => (
                      /* CHANGE: text-gray-600 → text-slate-600 */
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-600 leading-relaxed"
                      >
                        {/* CHANGE: text-primary → text-blue-600 */}
                        <span className="mr-2 text-blue-600">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* CHANGE: text-dark → text-slate-900, font-bold → font-semibold, mb-3 → mb-4 */}
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                    Outcome
                  </h4>
                  {/* CHANGE: space-y-2 → space-y-3, add mb-6 */}
                  <ul className="space-y-3 mb-6">
                    {project.outcomes.map((item, i) => (
                      /* CHANGE: text-[15px] → text-sm, text-gray-700 → text-slate-700 */
                      <li
                        key={i}
                        className="flex items-start text-sm font-semibold text-slate-700 leading-relaxed"
                      >
                        {/* CHANGE: text-primary → text-blue-600 */}
                        <span className="mr-2 text-blue-600">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CHANGE: mt-6 removed (already has mb-6 above) */}
                  <div>
                    {/* CHANGE: text-gray-500 → text-slate-400, font-bold → font-semibold */}
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        /* CHANGE: font-medium → font-semibold */
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
