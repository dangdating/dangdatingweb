"use client";
// 사전등록 폼 — RHF+Zod 검증, hasDog 분기, Hero 이메일 prefill 수신

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { leadSchema, type LeadFormData } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function LeadForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [showExit, setShowExit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      hasDog: true,
      preRegisterIntent: "yes",
      consentPrivacy: false as unknown as true,
    },
  });

  const hasDog = watch("hasDog");

  // Listen for prefill-email from Hero
  useEffect(() => {
    const handler = (e: Event) => {
      const email = (e as CustomEvent).detail;
      if (email) setValue("email", email);
    };
    window.addEventListener("prefill-email", handler);
    return () => window.removeEventListener("prefill-email", handler);
  }, [setValue]);

  const onSubmit = async (data: LeadFormData) => {
    if (!data.hasDog) {
      setShowExit(true);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        router.push("/thank-you");
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  if (showExit) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center"
      >
        <p className="text-xl font-display font-bold text-white">
          관심 가져주셔서 감사합니다!
        </p>
        <p className="mt-3 text-white/60 text-sm ko-body ko-relaxed max-w-[34ch] mx-auto">
          현재 댕개팅은 반려견 보호자를 위한 서비스이며, 추후 더 넓은 서비스로
          찾아뵙겠습니다.
        </p>
      </motion.div>
    );
  }

  const inputCn =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all text-sm";
  const labelCn = "block text-sm font-medium text-white/80 mb-1.5";
  const errorCn = "mt-1 text-xs text-red-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-5"
    >
      {/* Email */}
      <div>
        <label className={labelCn}>이메일 *</label>
        <input
          type="email"
          placeholder="email@example.com"
          {...register("email")}
          className={inputCn}
        />
        {errors.email && <p className={errorCn}>{errors.email.message}</p>}
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCn}>이름 (선택)</label>
          <input
            type="text"
            placeholder="홍길동"
            {...register("name")}
            className={inputCn}
          />
        </div>
        <div>
          <label className={labelCn}>전화번호 (선택)</label>
          <input
            type="tel"
            placeholder="010-1234-5678"
            {...register("phone")}
            className={inputCn}
          />
          {errors.phone && <p className={errorCn}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* hasDog */}
      <div>
        <label className={labelCn}>현재 반려견을 키우고 계신가요? *</label>
        <div className="flex gap-3">
          {[
            { value: true, label: "네" },
            { value: false, label: "아니요" },
          ].map((opt) => (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => {
                setValue("hasDog", opt.value);
                if (!opt.value) setShowExit(true);
              }}
              className={cn(
                "flex-1 py-2.5 rounded-xl text-sm font-medium transition-all border",
                hasDog === opt.value
                  ? "bg-primary text-white border-primary"
                  : "bg-white/5 text-white/60 border-white/10 hover:border-white/20"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pre-register intent */}
      <div>
        <label className={labelCn}>참여 의향</label>
        <select
          {...register("preRegisterIntent")}
          className={cn(inputCn, "appearance-none")}
        >
          <option value="yes" className="text-gray-900 bg-white">네, 참여할래요</option>
          <option value="thinking" className="text-gray-900 bg-white">조금 더 고민해볼게요</option>
        </select>
      </div>

      {/* Comment */}
      <div>
        <label className={labelCn}>하고 싶은 말 (선택)</label>
        <textarea
          placeholder="궁금한 점이나 기대하는 기능을 알려주세요"
          rows={3}
          {...register("comment")}
          className={cn(inputCn, "resize-none")}
        />
      </div>

      {/* Consents */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register("consentPrivacy")}
            className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/30"
          />
          <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors ko-body">
            개인정보 수집 및 이용에 동의합니다 (필수) *
          </span>
        </label>
        {errors.consentPrivacy && (
          <p className={errorCn}>{errors.consentPrivacy.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={submitting}
      >
        {submitting ? "제출 중..." : "사전 등록 신청하기"}
      </Button>
    </form>
  );
}
