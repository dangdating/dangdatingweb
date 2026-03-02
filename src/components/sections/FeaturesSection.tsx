"use client";
// Features 섹션 — 4탭 UI (인증/매칭/댕로그/후기), AnimatePresence 전환

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = COPY.features.tabs[activeTab];

  return (
    <SectionWrapper id={SECTION_IDS.FEATURES}>
      <ScrollReveal>
        <div className="text-center mx-auto md:max-w-4xl px-4">
          {COPY.features.subtitle && (
            <p className="mb-4 text-base font-semibold text-primary whitespace-nowrap">
              {COPY.features.subtitle}
            </p>
          )}
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground ko-heading ko-tight">
            {COPY.features.title}
          </h2>
        </div>
      </ScrollReveal>

      {/* Tab buttons */}
      <ScrollReveal delay={0.1}>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {COPY.features.tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                activeTab === i
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card border border-border text-foreground-muted hover:border-primary-light"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Tab content */}
      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left: Description */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-display text-2xl font-bold text-foreground ko-heading ko-tight max-w-[20ch] mx-auto">
                {tab.title}
              </h3>
              <p className="mt-3 text-foreground-muted ko-body ko-relaxed max-w-[36ch] md:max-w-[46ch] mx-auto whitespace-pre-line">
                {tab.description}
              </p>
              <ul className="mt-6 space-y-3 flex flex-col items-center">
                {tab.points.map((point, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-foreground ko-body">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center w-full">
              <div className="relative p-1 bg-card rounded-[2rem] border border-border shadow-2xl w-full max-w-xl overflow-hidden">
                <ImagePlaceholder
                  src={tab.image}
                  aspectRatio="16/10"
                  objectFit="contain"
                  icon="phone"
                  label={`${tab.label} 화면`}
                  className="w-full border-0 rounded-[1.8rem]"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
