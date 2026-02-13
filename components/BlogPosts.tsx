import Link from "next/link";

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
    <section id="blog" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        {/* CHANGE: mb-16 added for consistency, text-slate-500 → text-slate-600 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 border-b border-slate-100 pb-8 gap-4">
          <div>
            {/* CHANGE: font-extrabold → font-bold */}
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Recent Writing
            </h2>
            {/* CHANGE: mt-2 removed (already has mb-4 above), text-slate-500 → text-slate-600 */}
            <p className="text-slate-600">
              Engineering logs and product thinking.
            </p>
          </div>
          <a
            href="https://hashnode.com/@Yashas8197"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            View all articles <span>→</span>
          </a>
        </div>

        {/* List Layout */}
        <div className="flex flex-col">
          {posts.map((post, index) => (
            <Link
              href={post.link}
              key={index}
              /* CHANGE: py-10 → py-8 for consistency */
              className="group relative py-8 border-b border-slate-100 last:border-0 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-all"
            >
              {/* Date/Category Column */}
              <div className="w-32 shrink-0 pt-1">
                {/* CHANGE: mb-1 → mb-2 for better spacing */}
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  {post.date}
                </span>
                {/* CHANGE: text-[10px] font-bold → text-xs font-semibold */}
                <span className="text-xs font-semibold uppercase px-2 py-1 bg-slate-100 text-slate-500 rounded">
                  {post.category}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                  {post.title}
                </h3>
                {/* CHANGE: max-w-2xl added for consistency */}
                <p className="text-slate-600 leading-relaxed max-w-2xl group-hover:text-slate-900 transition-colors">
                  {post.description}
                </p>
              </div>

              {/* Arrow Decoration (Visible on hover) */}
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-2xl text-blue-600">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* REMOVED: Bottom accent box - not needed for consistency */}
      </div>
    </section>
  );
};

export default BlogPosts;
