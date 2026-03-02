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
          <ScrollReveal className="flex flex-col items-center text-center md:items-center md:text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground ko-heading ko-tight max-w-[16ch] md:max-w-[20ch] mx-auto">
              {COPY.about.title}
            </h2>
            <div className="mt-10 text-foreground-muted ko-body ko-relaxed max-w-full mx-auto">
              {COPY.about.description.split("\n\n").map((paragraph, i) => {
                const isHeadingQuestion = i === 0;
                return (
                  <p
                    key={i}
                    className={`mb-4 whitespace-pre-line ${isHeadingQuestion ? "text-xl md:text-2xl font-bold text-foreground mb-12" : ""
                      }`}
                  >
                    {paragraph.split(/(\*\*.*?\*\*)/).map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        const content = part.slice(2, -2);
                        const isFirstLine = content.includes("댕개팅은");
                        const isSecondLine = content.includes("시작했습니다");
                        const isEmphasis = isFirstLine || isSecondLine;

                        return (
                          <strong
                            key={j}
                            className={`font-bold text-foreground ${isEmphasis ? "block text-lg md:text-xl" : ""} ${isFirstLine ? "mt-20 mb-0" : ""} ${isSecondLine ? "mt-0 mb-20" : ""}`}
                          >
                            {content}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal delay={0.15} direction="right">
            <ImagePlaceholder
              src="/3.jpg"
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
