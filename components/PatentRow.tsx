"use client";

import type { Project } from "@/lib/portfolio-data";
import type { WorksWheelItem } from "@/components/ui/works-wheel";

export default function PatentRow({
  items,
  projects,
  onSelect,
}: {
  items: WorksWheelItem[];
  projects: Project[];
  onSelect: (project: Project) => void;
}) {
  const open = (title: string) => {
    const match = projects.find(
      (p) => p.title.toLowerCase() === title.toLowerCase(),
    );
    if (match) onSelect(match);
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {items.map((item, i) => (
        <div
          key={item.title}
          role="button"
          tabIndex={0}
          onClick={() => open(item.title)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              open(item.title);
            }
          }}
          className="group border-border flex min-w-0 flex-1 cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
        >
          <div className="h-56 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-6">
            <div className="text-muted-foreground flex items-center justify-between text-[11px] tracking-widest uppercase">
              <span>{item.tag}</span>
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <span className="block text-2xl tracking-tight">{item.title}</span>
            <span className="text-muted-foreground block flex-1 text-sm leading-relaxed">
              {item.description}
            </span>
            <span className="pt-2 text-xs tracking-widest uppercase">
              View details ↗
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
