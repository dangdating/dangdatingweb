// 이미지 플레이스홀더 — src prop 추가 시 실제 이미지로 자동 교체
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
  icon?: "camera" | "phone" | "image";
  objectFit?: "cover" | "contain";
}

export function ImagePlaceholder({
  src,
  alt = "",
  aspectRatio = "3/2",
  className,
  label,
  icon = "image",
  objectFit = "cover",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-auto rounded-2xl",
          objectFit === "cover" ? "object-cover" : "object-contain bg-card/50",
          className
        )}
        style={{ aspectRatio }}
      />
    );
  }

  const icons = {
    camera: (
      <svg
        className="w-10 h-10 text-primary-light/60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        />
      </svg>
    ),
    phone: (
      <svg
        className="w-10 h-10 text-primary-light/60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    image: (
      <svg
        className="w-10 h-10 text-primary-light/60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zM8.25 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        />
      </svg>
    ),
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light/10 to-primary/5 border border-border/50",
        className
      )}
      style={{ aspectRatio }}
    >
      {icons[icon]}
      {label && (
        <span className="mt-2 text-xs text-foreground-muted/50">{label}</span>
      )}
    </div>
  );
}
