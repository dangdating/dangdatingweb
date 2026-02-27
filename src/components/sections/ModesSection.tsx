"use client";
// Modes 섹션 — 친구/돌봄/가족 3카드 (돌봄 강조 다크 카드)

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";

export function ModesSection() {
  return (
    <SectionWrapper id={SECTION_IDS.MODES} className="bg-card">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center ko-heading ko-tight max-w-[14ch] md:max-w-[18ch] mx-auto">
          {COPY.modes.title}
        </h2>
      </ScrollReveal>

      <StaggerChildren className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {COPY.modes.items.map((mode) => (
          <StaggerItem key={mode.name}>
            <div className="relative rounded-3xl p-6 border transition-all text-center bg-card border-border hover:border-primary-light hover:shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground">
                {mode.name}
              </h3>
              <p className="mt-2 text-base font-medium ko-body text-primary">
                {mode.tagline}
              </p>

              <div className="mt-5 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm font-bold text-primary text-center ko-body">
                  &quot;{mode.features[0]}&quot;
                </p>
              </div>

              <p className="mt-6 text-sm ko-body text-foreground-muted text-left whitespace-pre-line leading-[1.8]">
                {mode.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
