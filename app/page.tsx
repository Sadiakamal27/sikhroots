import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import PackagesSection from "@/components/PackagesSection";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Section1 />
      <Section3 />
      <PackagesSection />
      <Section4 />
      <Section5 />
      <Section6 />
      <BlogSection limit={4} />
    </div>
  );
}
