import { techStacks } from '@/data/dummy';
import { Badge } from '@/components/ui/badge';
import { Code2, Server, Cloud, PenTool, Bot } from 'lucide-react';

// 카테고리 설정
const categories = [
  { key: 'frontend', label: 'Frontend', icon: Code2 },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'devops', label: 'DevOps', icon: Cloud },
  { key: 'planning', label: 'Planning & Analytics', icon: PenTool },
  { key: 'ai', label: 'AI & ML', icon: Bot },
] as const;

export function TechStack() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-2">
            Tech Stack
          </h2>
          <p className="text-muted-foreground">
            기획 도구부터 개발 기술까지
          </p>
        </div>

        {/* 기술 스택 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const skills = techStacks[category.key as keyof typeof techStacks];

            return (
              <div
                key={category.key}
                className="p-6 rounded-xl border border-border/50 bg-card hover:border-foreground/20 transition-all"
              >
                {/* 카테고리 헤더 */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium">{category.label}</h3>
                </div>

                {/* 스킬 뱃지들 */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm font-normal px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
