// 루트 레이아웃. Sora(display)+Noto Sans KR(body) 폰트, 메타데이터, html/body 구조
import type { Metadata } from "next";
import { Noto_Sans_KR, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "댕개팅 — 우리 동네에서, 믿고 만나는 반려견 보호자",
  description:
    "동네 기반 인증으로 신뢰할 수 있는 보호자를 연결·매칭합니다. 친구 · 돌봄 · 가족 모드로 관계를 확장하세요.",
  keywords: ["반려견", "보호자 매칭", "강아지 친구", "돌봄 교환", "댕개팅"],
  openGraph: {
    title: "댕개팅 — 우리 동네에서, 믿고 만나는 반려견 보호자",
    description:
      "동네 기반 인증으로 신뢰할 수 있는 보호자를 연결·매칭합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${sora.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
