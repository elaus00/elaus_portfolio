import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/chatbot/Chatbot";
import "./globals.css";

// 본문 폰트
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 모노스페이스 폰트
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 세리프 폰트 (헤드라인용)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// 메타데이터 설정
export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Creator",
  description: "기획과 개발을 모두 할 수 있는 풀스택 크리에이터의 포트폴리오",
  keywords: ["포트폴리오", "개발자", "기획자", "풀스택", "React", "Next.js"],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    title: "Portfolio | Full-Stack Creator",
    description: "기획과 개발을 모두 할 수 있는 풀스택 크리에이터의 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {/* 헤더 */}
        <Header />

        {/* 메인 콘텐츠 */}
        <main className="min-h-screen pt-16">
          {children}
        </main>

        {/* 푸터 */}
        <Footer />

        {/* RAG 챗봇 */}
        <Chatbot />
      </body>
    </html>
  );
}
