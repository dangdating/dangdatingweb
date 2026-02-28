"use client";
// How It Works 섹션 — 7단계 세로 타임라인

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";

export function HowItWorksSection() {
  return (
    <SectionWrapper id={SECTION_IDS.HOW_IT_WORKS} className="bg-card">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center ko-heading ko-tight max-w-[14ch] md:max-w-[18ch] mx-auto">
          {COPY.howItWorks.title}
        </h2>
      </ScrollReveal>

      {/* Timeline */}
      <StaggerChildren className="mt-14 relative max-w-2xl mx-auto" staggerDelay={0.08}>
        {/* Vertical line */}
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-border" />

        {COPY.howItWorks.steps.map((step, idx) => (
          <StaggerItem
            key={step.number}
            className="relative flex items-start gap-5 md:gap-6 mb-8 last:mb-0"
          >
            {/* Circle */}
            <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center">
              <span className="text-sm md:text-base font-bold text-primary font-display">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div className="pt-1.5 md:pt-2.5">
              <h3 className="font-display font-semibold text-foreground ko-heading">
                {step.title}
              </h3>
              <p className="mt-1 text-base text-foreground-muted ko-body ko-relaxed max-w-[32ch] md:max-w-[42ch]">
                {step.description}
              </p>
            </div>

            {/* Arrow to next (except last) */}
            {idx < COPY.howItWorks.steps.length - 1 && (
              <div className="absolute left-5 md:left-6 top-10 md:top-12 -translate-x-[0.5px] w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
            )}
          </StaggerItem>
        ))}
      </StaggerChildren>

      <ScrollReveal delay={0.3}>
        <p className="mt-12 text-center text-primary font-semibold text-base md:text-lg font-display ko-heading whitespace-nowrap mx-auto">
          {COPY.howItWorks.summary}
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
