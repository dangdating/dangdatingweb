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
  const [direction, setDirection] = useState(0); // 1 for right (next), -1 for left (prev)
  const tab = COPY.features.tabs[activeTab];

  const handleTabChange = (newIndex: number) => {
    setDirection(newIndex > activeTab ? 1 : -1);
    setActiveTab(newIndex);
  };

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swiped left -> move to next tab
      if (activeTab < COPY.features.tabs.length - 1) {
        handleTabChange(activeTab + 1);
      }
    } else if (info.offset.x > swipeThreshold) {
      // Swiped right -> move to previous tab
      if (activeTab > 0) {
        handleTabChange(activeTab - 1);
      }
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <SectionWrapper id={SECTION_IDS.FEATURES} className="overflow-hidden">
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
              onClick={() => handleTabChange(i)}
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
      <div className="mt-12 relative touch-pan-y">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={tab.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center cursor-grab active:cursor-grabbing"
          >
            {/* Left: Description */}
            <div className="flex flex-col items-center text-center select-none">
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

            <div className="flex justify-center w-full select-none pointer-events-none">
              <div className="relative p-1 bg-card rounded-[2.5rem] border border-border shadow-2xl w-full max-w-[280px] md:max-w-[280px] overflow-hidden">
                <ImagePlaceholder
                  src={tab.image}
                  aspectRatio="9/16"
                  objectFit="contain"
                  icon="phone"
                  label={`${tab.label} 화면`}
                  className="w-full border-0 rounded-[2.5rem]"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe Hint (Mobile only) */}
        <div className="mt-8 flex justify-center gap-1.5 lg:hidden">
          {COPY.features.tabs.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                activeTab === i ? "bg-primary w-4" : "bg-border"
              )}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
