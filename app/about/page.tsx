import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const experiences = [
    {
      role: "Open Source Contributor",
      company: "Team Shiksha",
      link: "https://team.shiksha/",
      period: "Nov 2025 – Present",
      description:
        "Contributing to a production-grade event management platform used for creating, managing, and selling tickets.",
      highlights: [
        "Fixed session expiry issues by improving refresh token handling",
        "Implemented centralized 401 error handling for smoother user experience",
        "Added 25+ unit tests to improve auth and session reliability",
        "Worked on real production code with multiple auth providers",
      ],
    },
    {
      role: "Software Engineer",
      company: "Teson",
      link: "https://teson.in/",
      period: "Dec 2024 – Nov 2025",
      description:
        "Worked on a full-stack real estate platform used to manage and scale thousands of property listings. Focused on performance, reliability, and shipping production features end-to-end.",
      highlights: [
        "Shipped 10+ production features using React and Django REST Framework",
        "Improved API performance by 95% by optimizing queries and introducing caching",
        "Scaled platform to support 10k+ listings with stable response times",
        "Resolved 120+ critical bugs pre-launch, reducing customer issues by 70%",
        "Integrated analytics tools to enable data-driven marketing decisions",
      ],
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
          </div>

          {/* About Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Image */}
              {/* Image */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-200 border-4 border-light-gray overflow-hidden relative">
                  <img
                    src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1769259329/profile_image_uvoruy.png"
                    alt="Yashas Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">
                    About
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-dark mt-2">
                    Yashas
                  </h1>
                  <p className="text-xl text-gray-500 font-medium mt-2">
                    Full Stack-First Product Engineer
                  </p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Specialized in building scalable web platforms, analytics
                  systems, and secure infrastructure. I enjoy solving real-world
                  problems by designing efficient APIs and data-driven
                  architectures that turn business requirements into reliable,
                  high-performance software.
                </p>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://drive.google.com/file/d/1PFv4ee2H3e1cTHqSOkOHR1vU4yx0LUTG/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    Download Resume
                  </a>
                  {/* <a
                    href="#"
                    className="px-6 py-2 bg-white text-dark border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    Book a Call
                  </a> */}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-2">Experience</h2>
              <p className="text-gray-600">My professional journey</p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-light-gray p-8 rounded-lg border-l-4 border-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="mr-2 text-primary">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
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
