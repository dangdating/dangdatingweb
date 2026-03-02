// iPhone 스타일 폰 목업 프레임 (내부에 ImagePlaceholder 사용)
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface PhoneMockupProps {
  className?: string;
  label?: string;
  src?: string;
  cropTop?: boolean;
  priority?: boolean;
}

export function PhoneMockup({ className, label, src, cropTop = false, priority = false }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[260px] md:w-[280px] lg:w-[320px] xl:w-[340px]",
        className
      )}
    >
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground shadow-2xl shadow-foreground/20 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden pb-10">
          <ImagePlaceholder
            src={src}
            aspectRatio="9/19.5"
            icon="phone"
            label={label || "앱 메인 화면"}
            className={cn("rounded-none border-0", cropTop && "-mt-9 scale-[1.05] origin-top")}
            priority={priority}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
    </div>
  );
}
