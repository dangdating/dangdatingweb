// 푸터 — 문의 이메일(대표 김윤아), 네비게이션 링크
import { COPY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/Gemini_Generated_Image_3sw5rv3sw5rv3sw5.png"
                alt="댕개팅"
                className="h-7 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display font-bold text-xl tracking-tighter text-white">
                댕개팅
              </span>
            </div>
            <p className="text-sm">
              우리 동네에서, 믿고 만나는 반려견 보호자
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-1 text-sm">
            <a
              href={`mailto:${COPY.footer.email}`}
              className="hover:text-white transition-colors"
            >
              {COPY.footer.email}
            </a>
            <p>{COPY.footer.representative}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40">
            &copy; 2026 댕개팅. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
