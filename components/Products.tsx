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

      githubUrl: "https://github.com/yashas8197/thunder",
      liveUrl: "https://thunderboltnew.vercel.app/",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 border-b border-slate-100 pb-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Building solutions that create tangible business value.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.name}
                </h3>
              </div>

              {/* Links */}
              <div className="flex gap-4 mb-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                    The Approach
                  </h4>
                  <ul className="space-y-3">
                    {project.approach.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-600 leading-relaxed"
                      >
                        <span className="mr-2 text-blue-600">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                    Outcome
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {project.outcomes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm font-semibold text-slate-700 leading-relaxed"
                      >
                        <span className="mr-2 text-blue-600">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
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
