// 게시물 타입 정의
export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: PostCategory;
  tags: string[];
  createdAt: string;
  readingTime: number;
}

export type PostCategory = '기술' | '기획' | '회고' | '프로젝트';

// 경력 타입 정의
export interface Career {
  id: string;
  company: string;
  position: string;
  department?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}

// 프로젝트 타입 정의 (PSR 구조)
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  period: {
    start: string;
    end: string;
  };
  role: string;
  teamSize?: number;
  // PSR 구조 - 기획+개발 능력 어필
  psr: {
    // Problem: 비즈니스/사용자 문제 정의 (기획 관점)
    problem: {
      background: string;
      businessProblem: string;
      userProblem: string;
      hypothesis?: string;
    };
    // Solution: 기획적 접근 + 기술적 구현
    solution: {
      planningApproach: string;
      keyDecisions: string[];
      technicalImplementation: string;
    };
    // Result: 정량적/정성적 성과
    result: {
      quantitative: Metric[];
      qualitative: string[];
      learnings: string[];
    };
  };
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Metric {
  label: string;
  value: string;
  improvement?: string;
}

// 챗봇 메시지 타입
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
