import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const BlogPosts = () => {
  const posts = [
    {
      title: "How AWS EC2 Works: Provisioning Compute at Scale",
      description:
        "Breaks down how EC2 instances are created and managed in AWS, from API validation and permissions to automation using CLI, SDKs, and infrastructure-as-code tools.",
      date: "May 27",
      category: "Cloud",
      link: "https://codefor.hashnode.dev/getting-started-with-aws-ec2-a-simple-guide",
    },
    {
      title:
        "Understanding Docker by First Understanding the Problems It Fixed",
      description:
        "A breakdown of the infrastructure problems before Docker and how containerization changed application deployment.",
      date: "May 24",
      category: "DevOps",
      link: "https://codefor.hashnode.dev/things-you-need-to-know-before-learning-docker",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Recent Writing
              </h2>
              <p className="text-lg text-slate-500">
                Engineering logs and product thinking.
              </p>
            </div>
            <a
              href="https://hashnode.com/@Yashas8197"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors shrink-0"
            >
              View all articles
              <span className="transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </div>
        </AnimateOnScroll>

        <div className="h-px bg-slate-200 mb-2" />

        <div className="flex flex-col">
          {posts.map((post, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <Link
                href={post.link}
                className="group relative py-8 border-b border-slate-100 last:border-0 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-all"
              >
                {/* Date/Category Column */}
                <div className="w-32 shrink-0 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    {post.date}
                  </span>
                  <span className="text-xs font-semibold uppercase px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md">
                    {post.category}
                  </span>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-2xl group-hover:text-slate-600 transition-colors">
                    {post.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-[-8px] group-hover:translate-x-0">
                  <span className="text-2xl text-blue-600">&rarr;</span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
