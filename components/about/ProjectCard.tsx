'use client';

import { useState } from 'react';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ChevronDown,
  ExternalLink,
  Github,
  Users,
  Calendar,
  Lightbulb,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden border-border/50 hover:border-foreground/20 transition-all">
      {/* 프로젝트 헤더 */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium mb-1">{project.title}</h3>
            <p className="text-muted-foreground">{project.subtitle}</p>
          </div>

          {/* 외부 링크들 */}
          <div className="flex items-center gap-2">
            {project.links.demo && (
              <Button variant="ghost" size="icon" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="ghost" size="icon" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* 메타 정보 */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {project.period.start} ~ {project.period.end}
          </span>
          <span>{project.role}</span>
          {project.teamSize && (
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {project.teamSize}명
            </span>
          )}
        </div>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* PSR 구조 (기획+개발 능력 어필) */}
      <div className="p-6 space-y-6">
        {/* Problem 섹션 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </div>
            <h4 className="font-medium">Problem</h4>
            <Badge variant="outline" className="text-xs">기획 관점</Badge>
          </div>

          <div className="ml-10 space-y-2 text-sm">
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">배경: </span>
              {project.psr.problem.background}
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">비즈니스 문제: </span>
              {project.psr.problem.businessProblem}
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">사용자 문제: </span>
              {project.psr.problem.userProblem}
            </p>
            {project.psr.problem.hypothesis && (
              <p className="text-muted-foreground italic border-l-2 border-foreground/20 pl-3 mt-2">
                가설: {project.psr.problem.hypothesis}
              </p>
            )}
          </div>
        </div>

        {/* Solution 섹션 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </div>
            <h4 className="font-medium">Solution</h4>
            <Badge variant="outline" className="text-xs">기획 + 개발</Badge>
          </div>

          <div className="ml-10 space-y-3 text-sm">
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">접근 방식: </span>
              {project.psr.solution.planningApproach}
            </p>

            <div>
              <p className="text-foreground font-medium mb-1">핵심 의사결정:</p>
              <ul className="space-y-1">
                {project.psr.solution.keyDecisions.map((decision, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-foreground mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                    {decision}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">기술 구현: </span>
              {project.psr.solution.technicalImplementation}
            </p>
          </div>
        </div>

        {/* Result 섹션 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </div>
            <h4 className="font-medium">Result</h4>
            <Badge variant="outline" className="text-xs">성과</Badge>
          </div>

          <div className="ml-10 space-y-4 text-sm">
            {/* 정량적 성과 */}
            <div className="grid grid-cols-3 gap-3">
              {project.psr.result.quantitative.map((metric, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-muted/50 border border-border/50 text-center"
                >
                  <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                  {metric.improvement && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {metric.improvement}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* 확장 영역 */}
            {isExpanded && (
              <div className="space-y-4 animate-fade-in">
                {/* 정성적 성과 */}
                <div>
                  <p className="text-foreground font-medium mb-1">정성적 성과:</p>
                  <ul className="space-y-1">
                    {project.psr.result.qualitative.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 배운 점 */}
                <div>
                  <p className="text-foreground font-medium mb-1">배운 점:</p>
                  <ul className="space-y-1">
                    {project.psr.result.learnings.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2 italic">
                        <span className="text-foreground mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 확장 토글 버튼 */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {isExpanded ? '접기' : '더 보기'}
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
