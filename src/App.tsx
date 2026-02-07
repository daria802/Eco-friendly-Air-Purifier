import { Header } from '@/components/features/Header';
import { Hero } from '@/components/features/Hero';
import { NewArrivals } from '@/components/features/NewArrivals';
import { EcoBundle } from '@/components/features/EcoBundle';
import { Editorial } from '@/components/features/Editorial';
import { BlogGrid } from '@/components/features/BlogGrid';
import { Footer } from '@/components/features/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NewArrivals />
        <EcoBundle />
        <Editorial />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
