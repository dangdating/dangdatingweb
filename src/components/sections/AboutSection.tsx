"use client";
// About 섹션 — 소개 텍스트 + 이미지 플레이스홀더 + 마키 띠

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AboutSection() {
  return (
    <>
      <SectionWrapper id={SECTION_IDS.ABOUT}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground ko-heading ko-tight max-w-[16ch] md:max-w-[20ch]">
              {COPY.about.title}
            </h2>
            <p className="mt-5 text-foreground-muted ko-body ko-relaxed whitespace-pre-line max-w-full">
              {COPY.about.description}
            </p>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal delay={0.15} direction="right">
            <ImagePlaceholder
              aspectRatio="3/2"
              icon="camera"
              label="보호자와 강아지"
              className="shadow-lg"
            />
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Marquee */}
      <Marquee items={COPY.about.marquee} />
    </>
  );
}
