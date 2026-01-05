'use client';

import { Button } from '@/components/ui/button';
import { Mail, FileText, Github, Linkedin } from 'lucide-react';

export function ProfileSection() {
  return (
    <section className="py-20 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 프로필 이미지 영역 */}
          <div className="lg:col-span-4">
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0">
              {/* 프로필 플레이스홀더 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />

              {/* 장식 요소 */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-4 border-background bg-muted" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-4 border-background bg-foreground/5" />
            </div>
          </div>

          {/* 프로필 정보 */}
          <div className="lg:col-span-8 space-y-6">
            {/* 이름과 타이틀 */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Hello, I'm</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
                김개발
              </h1>
              <p className="text-xl text-muted-foreground">
                Full-Stack Developer & Product Planner
              </p>
            </div>

            {/* 소개 텍스트 */}
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                <span className="text-foreground font-medium">기획과 개발</span>을 모두 할 수 있는
                풀스택 크리에이터입니다. 비즈니스 문제를 이해하고, 사용자 경험을 설계하며,
                코드로 구현하는 전 과정을 담당합니다.
              </p>
              <p>
                스타트업에서 PM과 개발자를 동시에 경험하며 "왜 만드는가"와
                "어떻게 만드는가"를 함께 고민하는 습관을 길렀습니다.
                데이터 기반의 의사결정과 빠른 실험을 통해 제품을 성장시키는 것을 좋아합니다.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" className="group">
                <Mail className="w-4 h-4 mr-2" />
                연락하기
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="w-4 h-4 mr-2" />
                이력서 다운로드
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
