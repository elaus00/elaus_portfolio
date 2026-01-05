'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />

      {/* 미묘한 그리드 패턴 */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* 인사말 뱃지 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">기획과 개발, 그 사이 어딘가</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 animate-fade-in-up">
          Full-Stack
          <br />
          <span className="text-muted-foreground">Creator</span>
        </h1>

        {/* 서브 타이틀 */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-100">
          비즈니스를 이해하는 개발자,
          <br className="hidden md:block" />
          코드로 구현하는 기획자.
        </p>

        {/* CTA 버튼 */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
          <Button asChild size="lg" className="group">
            <Link href="/about">
              About Me
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#posts">
              Posts
            </Link>
          </Button>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
