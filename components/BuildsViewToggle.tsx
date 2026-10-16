"use client";

import * as React from "react";

import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/portfolio-data";

const BUILDS: WorksWheelItem[] = [
  { title: "Echo", image: "/images/projects/echo.png", tag: "Accessibility AI", description: "Wearable EMG-based sign language recognition system translating muscle signals into real-time speech." },
  { title: "Aeris", image: "/images/projects/aeris.png", tag: "Health AI", description: "A low-cost e-nose for early Parkinson's screening that analyzes sebum-derived VOC patterns using ML." },
  { title: "Halo", image: "/images/projects/halo.png", tag: "Wearable Health", description: "AI-powered ear cuff that regulates cognitive function through haptics and adaptive audio." },
  { title: "Rewind", image: "/images/projects/rewind.png", tag: "Spatial Computing", description: "A community-driven film and TV discovery platform." },
  { title: "Drone Defense", image: "/images/projects/drone-defense.png", tag: "Security Tech", description: "Public safety system for real-time monitoring, threat detection, and rapid response." },
  { title: "Promptly", image: "/images/projects/promptly.png", tag: "AI Tooling", description: "A coding extension optimizing AI prompts for energy efficiency and token reduction." },
  { title: "Claude9", image: "/images/projects/claude9.png", tag: "AI Product", description: "Enterprise launch layer for moving AI prototypes into deployed, market-ready products." },
  { title: "XR Fitness Trainer", image: "/images/projects/xr-fitness-trainer.png", tag: "Spatial Computing", description: "AI-driven fitness coach for augmented reality training sessions and real-time feedback." },
];

type View = "grid" | "wheel";

export default function BuildsViewToggle({
  grid,
  projects,
  onSelect,
  items = BUILDS,
  label = "Builds",
  defaultView = "grid",
}: {
  grid: React.ReactNode;
  projects: Project[];
  onSelect: (project: Project) => void;
  items?: WorksWheelItem[];
  label?: string;
  defaultView?: View;
}) {
  const [view, setView] = React.useState<View>(defaultView);

  const btn = (active: boolean) =>
    cn(
      "flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors",
      active
        ? "bg-foreground text-background"
        : "text-muted-foreground hover:text-foreground",
    );

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <div
          role="group"
          aria-label="Change view"
          className="border-border inline-flex gap-1 rounded-full border p-1"
        >
          <button
            type="button"
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
            className={btn(view === "grid")}
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
              <rect x="2" y="2" width="5" height="5" rx="1" />
              <rect x="9" y="2" width="5" height="5" rx="1" />
              <rect x="2" y="9" width="5" height="5" rx="1" />
              <rect x="9" y="9" width="5" height="5" rx="1" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Wheel view"
            aria-pressed={view === "wheel"}
            onClick={() => setView("wheel")}
            className={btn(view === "wheel")}
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <circle cx="8" cy="8" r="6" />
              <circle cx="8" cy="8" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {view === "grid" ? (
        grid
      ) : (
        <div className="h-[80vh] w-full overflow-hidden">
          <WorksWheel
            items={items}
            label={label}
            onSelect={(item) => {
              const match = projects.find(
                (p) => p.title.toLowerCase() === item.title.toLowerCase(),
              );
              if (match) onSelect(match);
            }}
          />
        </div>
      )}
    </div>
  );
}
