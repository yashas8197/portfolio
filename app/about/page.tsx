import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          {/* Back */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>

          {/* About Section */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-200 border-4 border-light-gray overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1769259329/profile_image_uvoruy.png"
                    alt="Yashas Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    About
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-dark mt-2">
                    Yashas
                  </h1>
                  <p className="text-lg text-gray-500 font-medium mt-1">
                    Full Stack-First Product Engineer
                  </p>
                </div>

                <p className="text-base text-gray-600 leading-relaxed max-w-prose">
                  I build products from start to finish from understanding the
                  problem and shaping the solution. I'm most effective when I'm
                  close to the product, not just the code.
                </p>

                <a
                  href="https://drive.google.com/file/d/1PFv4ee2H3e1cTHqSOkOHR1vU4yx0LUTG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-1">Experience</h2>
            <p className="text-sm text-gray-400 mb-10">
              Where I've worked and what I've shipped
            </p>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {exp.tag}
                        </span>
                      </div>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
