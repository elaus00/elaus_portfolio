import { projects } from '@/data/dummy';
import { ProjectCard } from './ProjectCard';

export function ProjectSection() {
  return (
    <section className="py-20 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground">
            기획부터 개발까지, 문제 해결의 전 과정
          </p>
        </div>

        {/* 프로젝트 목록 */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
