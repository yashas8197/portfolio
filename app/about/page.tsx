import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutPage() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Company: Teson",
      link: "https://teson.in/",
      period: "Dec 2024 – Nov 2025",
      tag: "Full-time",
      description:
        "Joined as one of 4 engineers on a platform that connects architects, builders, brands, and customers. I launched an admin dashboard that reduced manual Excel work by 80%. I also integrated analytics, which provided the marketing team with clear visibility into their campaigns. Additionally, I created an image processing background worker with srcset support, so browsers can display the correct size for each viewport and display density.",
    },
    {
      role: "Open Source Contributor",
      company: "Organization: Team Shiksha",
      link: "https://team.shiksha/",
      period: "Dec 2025 – Present",
      tag: "Open Source",
      description:
        "Contributed to a production event management platform. Worked with contributors globally through Git and pull requests. Learned best practices from code reviews along the way. Focused on improving existing features, fixing bugs, and updating documentation to keep the codebase healthy.",
    },
    {
      role: "Software Engineer Intern",
      company: "Company: Neog",
      link: "#",
      period: "Jan 2024 – Nov 2024",
      tag: "Internship",
      description:
        "Built more than 8 full-stack MERN apps from scratch. I supported over 50 developers by resolving more than 100 technical issues in React, MongoDB, and Node.js. This experience taught me to understand someone else's system before assuming what is broken.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          {/* Back */}
          <AnimateOnScroll>
            <div className="mb-12">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                <span className="transition-transform group-hover:-translate-x-0.5">
                  &larr;
                </span>
                Back to Home
              </Link>
            </div>
          </AnimateOnScroll>

          {/* About Section */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <AnimateOnScroll>
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg">
                    <img
                      src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1769259329/profile_image_uvoruy.png"
                      alt="Yashas Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div className="space-y-5">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                      About
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
                      Yashas
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mt-1">
                      Full Stack-First Product Engineer
                    </p>
                  </div>

                  <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-prose">
                    I build products from start to finish — from understanding
                    the problem and shaping the solution. I&apos;m most
                    effective when I&apos;m close to the product, not just the
                    code.
                  </p>

                  <a
                    href="https://drive.google.com/file/d/1tLJl48DZ0nYmy-Q6HNDs2O2X_nJ9zmmK/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm"
                  >
                    Download Resume
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <AnimateOnScroll>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Experience
              </h2>
              <p className="text-sm text-slate-400 mb-10">
                Where I&apos;ve worked and what I&apos;ve shipped
              </p>
            </AnimateOnScroll>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-7 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                            {exp.role}
                          </h3>
                          <span className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-semibold">
                            {exp.tag}
                          </span>
                        </div>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline font-medium"
                        >
                          {exp.company}
                        </a>
                      </div>
                      <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
