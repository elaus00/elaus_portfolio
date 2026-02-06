# Portfolio Project - Claude Code Instructions

## 프로젝트 개요
na2ru2.me 스타일의 개인 포트폴리오 웹사이트. 기획+개발 능력을 어필하고, RAG 기반 챗봇을 제공하는 것이 핵심.

## 코딩 컨벤션

### 주석
- 모든 주석은 **한글**로 작성

### 파일 구조
- 컴포넌트: `components/{domain}/{ComponentName}.tsx`
- 타입: `types/index.ts`
- 데이터: `data/` 디렉토리
- API: `app/api/` 디렉토리

### 컴포넌트 작성
- Shadcn/ui 컴포넌트 우선 사용
- 클라이언트 컴포넌트는 `'use client'` 명시
- Props 인터페이스는 컴포넌트 파일 내 정의

### 스타일링
- Tailwind CSS 클래스 사용
- 무채색(그레이스케일) 팔레트 유지
- `cn()` 유틸리티로 조건부 클래스 병합

## 핵심 데이터 구조

### PSR 구조 (기획+개발 어필)
프로젝트는 반드시 PSR 구조를 따름:
- **Problem**: 비즈니스/사용자 문제 (기획 관점)
- **Solution**: 기획적 접근 + 기술적 구현
- **Result**: 정량적/정성적 성과

## 현재 구현 상태

### 완료 (UI만)
- [x] 레이아웃 (Header, Footer)
- [x] 홈페이지 (HeroSection, PostGrid)
- [x] About 페이지 (Profile, Career, Project, TechStack)
- [x] 챗봇 UI (플로팅 버튼 + 다이얼로그)

### 하드코딩 (실제 데이터 연동 필요)
- `data/dummy.ts` - 모든 더미 데이터
- `components/chatbot/ChatbotDialog.tsx` - 데모 응답

### 미구현
- Notion API 연동
- RAG 챗봇 백엔드 (`/api/chat`)
- 게시물 상세 페이지 (`/post/[slug]`)
- 다크모드 토글
- 검색 기능

## 환경 변수 (필요 시)

```env
# Notion
NOTION_TOKEN=
NOTION_POSTS_DATABASE_ID=
NOTION_CAREERS_DATABASE_ID=
NOTION_PROJECTS_DATABASE_ID=

# OpenAI (RAG 챗봇)
OPENAI_API_KEY=

# Supabase (벡터 DB)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## 자주 사용하는 명령어

```bash
# 개발 서버
npm run dev

# 빌드
npm run build

# Shadcn 컴포넌트 추가
npx shadcn@latest add [component-name]
```

## Codex 리뷰

- 사용자가 Codex를 통한 코드 리뷰를 요청하는 경우, 반드시 `docs/config/codex-config.md`를 참조하여 적절한 프리셋(모델, reasoning)으로 호출할 것
- 프리셋을 명시하지 않으면 standard 프리셋 적용

## 참고 파일
- 계획 문서: `~/.claude/plans/tranquil-yawning-sifakis.md`
- Codex 리뷰 프리셋: `docs/config/codex-config.md`
