# Portfolio Website

기획과 개발을 모두 할 수 있는 풀스택 크리에이터의 포트폴리오 웹사이트입니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Library | Shadcn/ui |
| Styling | Tailwind CSS v4 |
| Font | Geist Sans + Cormorant Garamond (Serif) |

## 주요 기능

### 1. 홈페이지 (`/`)
- **HeroSection**: 직책/역할 소개, CTA 버튼
- **PostGrid**: 블로그 게시물 카드 그리드
- **CategoryFilter**: 카테고리별 필터링 (전체, 기술, 기획, 프로젝트, 회고)

### 2. About 페이지 (`/about`)
- **ProfileSection**: 프로필 소개, 연락처 버튼
- **CareerTimeline**: 경력 타임라인 (세로 라인 디자인)
- **ProjectSection**: PSR(Problem-Solution-Result) 구조로 프로젝트 표시
- **TechStack**: 카테고리별 기술 스택

### 3. RAG 챗봇
- 우측 하단 플로팅 버튼
- 대화형 인터페이스
- 추천 질문 기능

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈페이지
│   ├── globals.css         # 글로벌 스타일
│   └── about/
│       └── page.tsx        # About 페이지
│
├── components/
│   ├── ui/                 # Shadcn/ui 컴포넌트
│   ├── layout/
│   │   ├── Header.tsx      # 네비게이션 헤더
│   │   └── Footer.tsx      # 푸터
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── PostGrid.tsx
│   │   ├── PostCard.tsx
│   │   └── CategoryFilter.tsx
│   ├── about/
│   │   ├── ProfileSection.tsx
│   │   ├── CareerTimeline.tsx
│   │   ├── ProjectCard.tsx     # PSR 구조
│   │   ├── ProjectSection.tsx
│   │   └── TechStack.tsx
│   └── chatbot/
│       ├── Chatbot.tsx
│       ├── ChatbotButton.tsx
│       └── ChatbotDialog.tsx
│
├── data/
│   └── dummy.ts            # 더미 데이터 (TODO: 실제 데이터로 교체)
│
├── types/
│   └── index.ts            # TypeScript 타입 정의
│
└── lib/
    └── utils.ts            # 유틸리티 함수
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

## 데이터 구조

### Post (게시물)
```typescript
interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: '기술' | '기획' | '회고' | '프로젝트';
  tags: string[];
  createdAt: string;
  readingTime: number;
}
```

### Career (경력)
```typescript
interface Career {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}
```

### Project (프로젝트) - PSR 구조
```typescript
interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: { start: string; end: string };
  role: string;
  psr: {
    problem: {
      background: string;
      businessProblem: string;
      userProblem: string;
      hypothesis?: string;
    };
    solution: {
      planningApproach: string;
      keyDecisions: string[];
      technicalImplementation: string;
    };
    result: {
      quantitative: Metric[];
      qualitative: string[];
      learnings: string[];
    };
  };
  techStack: string[];
}
```

## TODO

### 데이터 연동
- [ ] Notion API 연동 (블로그 콘텐츠)
- [ ] 실제 경력/프로젝트 데이터 입력

### RAG 챗봇
- [ ] OpenAI API 연동
- [ ] Supabase pgvector 설정
- [ ] 임베딩 생성 스크립트
- [ ] `/api/chat` 엔드포인트 구현

### 기타
- [ ] 다크모드 토글
- [ ] 게시물 상세 페이지 (`/post/[slug]`)
- [ ] SEO 최적화 (OG 이미지)
- [ ] Vercel 배포

## 배포

Vercel을 통한 배포를 권장합니다:

```bash
npm i -g vercel
vercel
```

## 라이선스

MIT
