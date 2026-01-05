import { careers } from '@/data/dummy';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

// 기간 포맷 함수
function formatPeriod(start: string, end?: string, isCurrent?: boolean): string {
  const startDate = new Date(start + '-01');
  const startStr = startDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
  });

  if (isCurrent) {
    return `${startStr} ~ 현재`;
  }

  if (end) {
    const endDate = new Date(end + '-01');
    const endStr = endDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
    });
    return `${startStr} ~ ${endStr}`;
  }

  return startStr;
}

export function CareerTimeline() {
  return (
    <section className="py-20 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-2">
            Career
          </h2>
          <p className="text-muted-foreground">
            기획자에서 개발자로, 성장의 여정
          </p>
        </div>

        {/* 타임라인 */}
        <div className="relative">
          {/* 세로 라인 */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* 경력 항목들 */}
          <div className="space-y-12">
            {careers.map((career, index) => (
              <div
                key={career.id}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:[direction:rtl]'
                }`}
              >
                {/* 타임라인 포인트 */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-foreground border-4 border-background -translate-x-1/2 mt-2">
                  {career.isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-50" />
                  )}
                </div>

                {/* 카드 */}
                <div
                  className={`ml-8 md:ml-0 p-6 rounded-xl border border-border/50 bg-card hover:border-foreground/20 transition-all ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12 md:[direction:ltr]'
                  }`}
                >
                  {/* 헤더 */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Building2 className="w-4 h-4" />
                        <span>{career.company}</span>
                        {career.isCurrent && (
                          <Badge variant="secondary" className="text-xs">
                            현재
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-medium">{career.position}</h3>
                      {career.department && (
                        <p className="text-sm text-muted-foreground">
                          {career.department}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {formatPeriod(career.startDate, career.endDate, career.isCurrent)}
                    </div>
                  </div>

                  {/* 설명 */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {career.description}
                  </p>

                  {/* 성과 */}
                  <ul className="space-y-1.5 mb-4">
                    {career.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-foreground mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-1.5">
                    {career.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 빈 공간 (그리드 균형용) */}
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
