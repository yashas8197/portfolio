import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowIThink from "@/components/HowIThink";
import BlogPosts from "@/components/BlogPosts";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <HowIThink />
        <Products />
        <BlogPosts />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
