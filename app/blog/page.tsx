import BlogSection from "@/components/BlogSection";

export const metadata = {
  title: "Blog | SikhRoots",
  description:
    "Read our latest articles and updates about Sikh pilgrimage in Pakistan.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <BlogSection />
    </div>
  );
}
