'use client';

import { useState } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { DesignSection } from '@/components/DesignSection';
import { ProjectsSection } from '@/components/ProjectsSection';

const tabs = ['Projects', 'Design', 'About'] as const;

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Projects');

  return (
    <>
      <section className="tab-wrap" aria-label="Portfolio sections">
        <div className="tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <div className="rule" aria-hidden="true" />

      {activeTab === 'Projects' && <ProjectsSection />}
      {activeTab === 'Design' && <DesignSection />}
      {activeTab === 'About' && <AboutSection />}
    </>
  );
}
