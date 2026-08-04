import { Hero } from '@/components/Hero';
import { PortfolioTabs } from '@/components/PortfolioTabs';
import PortfolioLoader from '@/components/PortfolioLoader';

export default function Home() {
  return (
    <>
      <PortfolioLoader />
      <main className="page">
        <Hero />
        <PortfolioTabs />
      </main>
    </>
  );
}
