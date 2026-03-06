import Link from "next/link";
import ProductContentCard from "./ProductContentCard";
import ProductCardSimple from "./ProductCardSimple";
import AnimateOnScroll from "./AnimateOnScroll";
import image from "@/public/images/image.png";
import ecommerce from "@/public/images/ecommerce.png";
import socialmedia from "@/public/images/socialmedia.png";
import insight from "@/public/images/insight.png";

const Products = ({
  variant = "simple",
}: {
  variant?: "simple" | "detailed";
}) => {
  const products = [
    {
      name: "AI Code Generation Platform",
      description:
        "Bolt-style AI application that generates full-stack projects from natural language descriptions with live in-browser preview",
      image: image,
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
    {
      name: "InsightScope — Analytics Dashboard",
      description:
        "Visualize user engagement data with filterable, shareable charts — no BI tool needed",
      image: insight,
      approach: [
        "Chart.js over D3 — built interactive bar/line charts with pan/zoom in a fraction of the time",
        "Google Sheets as data source — non-technical users update data without touching code",
        "URL-encoded filters — shareable dashboard views with no login or backend session required",
      ],
      tech: [
        "React.js",
        "Chart.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt",
        "Google Sheets API",
      ],
      outcomes: [
        "Shareable filter presets via URL — works across browsers with no session",
        "First hands-on exposure to Google Cloud OAuth and service accounts",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/yashas8197/InsightScope",
      liveUrl: "https://insight-scope.vercel.app/",
    },
    {
      name: "GeekyGlam — E-Commerce Platform",
      description:
        "Shop, filter, and buy products with real-time cart, wishlist, and multilingual support",
      image: ecommerce,
      approach: [
        "React + Redux Toolkit — component model fits e-commerce UI, RTK tamed complex cart/wishlist state",
        "Tailwind + ShadCn — faster responsive iteration than Bootstrap, accessible components out of the box",
        "MongoDB — flexible document schema handled varied product categories without joins",
      ],
      tech: [
        "React.js",
        "Redux Toolkit",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "ShadCn",
        "Razorpay",
        "i18Next",
      ],
      outcomes: [
        "Multilingual checkout in Kannada & Spanish",
        "End-to-end Razorpay test payments with zero failures",
      ],
      demoUrl: "",
      githubFrontendUrl: "https://github.com/yashas8197/GeekyGlam",
      githubBackendUrl: "https://github.com/yashas8197/GeekyGlam-Backend",
      liveUrl: "https://geeky-glam.vercel.app/",
    },
    {
      name: "GeekyGram — Social Media App",
      description:
        "Instagram-like app with feeds, explore, post uploads, and user interactions",
      image: socialmedia,
      approach: [
        "Cloudinary for media — keeps MongoDB lean, free CDN transformations included",
        "Redux Toolkit for feed/bookmark/follow state — shared across unrelated components",
        "Optimistic UI on likes/follows — updates instantly before API responds",
      ],
      tech: [
        "React.js",
        "Redux Toolkit",
        "Express.js",
        "MongoDB",
        "Multer",
        "Cloudinary",
        "Tailwind CSS",
        "ShadCn",
      ],
      outcomes: [
        "Full CRUD for posts, comments, bookmarks, and follow/unfollow in one app",
        "Optimistic UI pattern first used here — reused in every project after",
      ],
      demoUrl: "",
      githubFrontendUrl: "https://github.com/yashas8197/GeekyGram",
      githubBackendUrl: "https://github.com/yashas8197/quackBE",
      liveUrl: "https://geeky-gram.vercel.app/",
    },
  ];

  return (
    <section id="products" className="py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                  Products
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
                  Building solutions that create tangible business value.
                </p>
              </div>

              {variant === "simple" && (
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
                >
                  View all products
                  <span className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              )}
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-700" />
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          {(variant === "simple" ? products.slice(0, 2) : products).map(
            (project, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                {variant === "simple" ? (
                  <ProductCardSimple product={project} />
                ) : (
                  <ProductContentCard product={project} />
                )}
              </AnimateOnScroll>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
