import { FallingPattern } from '@/components/ui/falling-pattern';
import { GlassCursor } from '@/components/GlassCursor';
import { HeroTitle } from '@/components/HeroTitle';
import { StampLogo } from '@/components/StampLogo';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Hero() {
  return (
    <section className="hero">
      <GlassCursor />
      <FallingPattern />

      <nav className="nav">
        <StampLogo />
        <ThemeToggle />
      </nav>

      <div className="intro">
        <HeroTitle />
        <p>
          I build products, ventures, and systems across AI, design, health,
          accessibility, and emerging technology.
        </p>
      </div>
    </section>
  );
}
