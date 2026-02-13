import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-primary font-medium hover:underline mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Learning Log
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A living document of what I&apos;m learning, why it matters, and
              how I&apos;m applying it.
            </p>
            <div className="h-px bg-gray-200 mt-12"></div>
          </div>

          {/* Entries */}
          <div className="space-y-8">
            {entries.map((entry, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-100 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                    Now →
                  </span>
                  <h2 className="text-2xl font-bold text-dark">{entry.now}</h2>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                    Why →
                  </span>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {entry.why}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-6">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                      Building →
                    </span>
                    <p className="text-base text-gray-700 font-medium">
                      {entry.building}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {entry.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
