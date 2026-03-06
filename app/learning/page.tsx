import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function LearningLogPage() {
  const entries = [
    {
      now: "System Design",
      why: "Want to understand real-world architecture and scalability challenges for backend systems.",
      building:
        "Applying concepts by building a URL shortener app to practice backend design, database modeling, and service flows.",
      date: "December 2025",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          {/* Header */}
          <AnimateOnScroll>
            <div className="mb-12">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-8"
              >
                <span className="transition-transform group-hover:-translate-x-0.5">
                  &larr;
                </span>
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Learning Log
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                A living document of what I&apos;m learning, why it matters, and
                how I&apos;m applying it.
              </p>
              <div className="h-px bg-slate-200 mt-10" />
            </div>
          </AnimateOnScroll>

          {/* Entries */}
          <div className="space-y-8">
            {entries.map((entry, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <div className="mb-5">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                      Now &rarr;
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {entry.now}
                    </h2>
                  </div>

                  <div className="mb-5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Why &rarr;
                    </span>
                    <p className="text-base text-slate-500 leading-relaxed">
                      {entry.why}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-6 pt-6 border-t border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Building &rarr;
                      </span>
                      <p className="text-base text-slate-700 font-medium">
                        {entry.building}
                      </p>
                    </div>
                    <span className="text-sm text-slate-400 font-medium whitespace-nowrap">
                      {entry.date}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
