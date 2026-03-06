import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
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
        </div>
        <Products variant="detailed" />
      </main>
      <Footer />
    </>
  );
}
