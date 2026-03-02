"use client";
// Hero 섹션 — staggered reveal 애니메이션, 이메일 CTA, 폰 목업

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { COPY, SECTION_IDS } from "@/lib/constants";
import { emailSchema, type EmailFormData } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const trustIcons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  "map-pin": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
};

export function HeroSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: EmailFormData) => {
    const el = document.getElementById(SECTION_IDS.JOIN);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Pre-fill email in LeadForm via custom event
      window.dispatchEvent(
        new CustomEvent("prefill-email", { detail: data.email })
      );
    }
  };

  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grain-overlay"
    >
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                사전 등록 진행 중
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground whitespace-pre-line ko-heading ko-tight max-w-[14ch] md:max-w-[16ch] lg:max-w-[18ch] mx-auto lg:mx-0"
            >
              {COPY.hero.title}
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-foreground-muted ko-body ko-relaxed max-w-[34ch] md:max-w-[40ch] mx-auto lg:mx-0"
            >
              {COPY.hero.sub}
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base font-medium text-primary ko-body"
            >
              {COPY.hero.summary}
            </motion.p>

            {/* Email CTA */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  {...register("email")}
                  className="w-full px-5 py-3.5 rounded-full border border-border bg-card text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                {errors.email && (
                  <p className="mt-1 ml-4 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button type="submit" size="lg" className="whitespace-nowrap">
                {COPY.hero.cta}
              </Button>
            </motion.form>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2"
            >
              {COPY.hero.trusts.map((trust) => (
                <span
                  key={trust.text}
                  className="flex items-center gap-2 text-sm text-foreground-muted"
                >
                  <span className="text-primary">{trustIcons[trust.icon]}</span>
                  {trust.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative mx-auto w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px]">
              <img
                src="/main.png"
                alt="앱 메인 화면"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
