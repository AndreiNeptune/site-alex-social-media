import { Hero } from "@/components/sections/Hero";
import { CategorySplit } from "@/components/sections/CategorySplit";
import { ReelsArchive } from "@/components/sections/ReelsArchive";
import { CreativeProcess } from "@/components/sections/CreativeProcess";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <CategorySplit />
      <ReelsArchive />
      <CreativeProcess />
      <Footer />
    </main>
  );
}
