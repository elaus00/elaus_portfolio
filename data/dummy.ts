import { Post, Career, Project } from '@/types';

// 더미 게시물 데이터
export const posts: Post[] = [
  {
    id: '1',
    slug: 'building-scalable-design-system',
    title: '확장 가능한 디자인 시스템 구축하기',
    description: '기획자와 개발자가 함께 만드는 디자인 시스템의 핵심 원칙과 실제 구현 경험을 공유합니다.',
    coverImage: '/images/post-1.jpg',
    category: '기술',
    tags: ['Design System', 'React', 'TypeScript', 'Storybook'],
    createdAt: '2024-12-28',
    readingTime: 8,
  },
  {
    id: '2',
    slug: 'product-thinking-for-developers',
    title: '개발자를 위한 프로덕트 씽킹',
    description: '코드를 넘어 비즈니스 가치를 이해하고, 사용자 중심의 개발을 위한 사고방식을 탐구합니다.',
    coverImage: '/images/post-2.jpg',
    category: '기획',
    tags: ['Product', 'UX', 'Strategy'],
    createdAt: '2024-12-20',
    readingTime: 6,
  },
  {
    id: '3',
    slug: 'year-2024-retrospective',
    title: '2024년 회고: 기획자에서 풀스택 개발자로',
    description: '커리어 전환의 여정과 그 과정에서 배운 것들, 그리고 앞으로의 방향성에 대한 이야기.',
    coverImage: '/images/post-3.jpg',
    category: '회고',
    tags: ['Career', 'Growth', 'Reflection'],
    createdAt: '2024-12-15',
    readingTime: 10,
  },
  {
    id: '4',
    slug: 'ai-chatbot-rag-implementation',
    title: 'RAG 기반 AI 챗봇 구현기',
    description: 'OpenAI와 벡터 데이터베이스를 활용한 개인화된 AI 어시스턴트 개발 경험을 공유합니다.',
    coverImage: '/images/post-4.jpg',
    category: '프로젝트',
    tags: ['AI', 'RAG', 'OpenAI', 'Supabase'],
    createdAt: '2024-12-10',
    readingTime: 12,
  },
];

// 더미 경력 데이터
export const careers: Career[] = [
  {
    id: '1',
    company: 'TechCorp',
    position: 'Full-Stack Developer',
    department: 'Product Team',
    startDate: '2023-03',
    isCurrent: true,
    description: '프로덕트 팀에서 기획부터 개발까지 전 과정을 담당하며, 사용자 중심의 서비스를 만들어가고 있습니다.',
    achievements: [
      '신규 서비스 MVP 기획 및 개발 리드',
      '레거시 시스템 마이그레이션으로 성능 40% 개선',
      '디자인 시스템 구축으로 개발 생산성 향상',
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '2',
    company: 'StartupX',
    position: 'Product Manager / Developer',
    department: 'Growth Team',
    startDate: '2021-06',
    endDate: '2023-02',
    isCurrent: false,
    description: '스타트업에서 PM과 개발자 역할을 동시에 수행하며 빠른 실험과 검증 사이클을 경험했습니다.',
    achievements: [
      '데이터 기반 A/B 테스트 시스템 구축',
      '전환율 150% 개선 달성',
      '크로스펑셔널 팀 협업 프로세스 정립',
    ],
    techStack: ['React', 'Python', 'AWS', 'Amplitude'],
  },
  {
    id: '3',
    company: 'AgencyY',
    position: 'Product Planner',
    startDate: '2019-01',
    endDate: '2021-05',
    isCurrent: false,
    description: '다양한 클라이언트 프로젝트를 기획하며 비즈니스 요구사항 분석과 UX 설계 역량을 키웠습니다.',
    achievements: [
      '10+ 프로젝트 성공적 런칭',
      '사용자 리서치 기반 서비스 개선 주도',
      '기획-디자인-개발 협업 프로세스 개선',
    ],
    techStack: ['Figma', 'Notion', 'Jira', 'SQL'],
  },
];

// 더미 프로젝트 데이터 (PSR 구조)
export const projects: Project[] = [
  {
    id: '1',
    title: 'AI 기반 고객 상담 자동화 시스템',
    subtitle: '상담 효율 300% 향상을 이끈 AI 솔루션',
    thumbnailUrl: '/images/project-1.jpg',
    period: { start: '2024-06', end: '2024-10' },
    role: 'Tech Lead & Product Owner',
    teamSize: 4,
    psr: {
      problem: {
        background: '고객 상담팀의 업무 과부하와 응대 지연으로 고객 만족도가 하락하고 있었습니다.',
        businessProblem: '상담 인력 부족으로 인한 운영 비용 증가와 고객 이탈률 상승',
        userProblem: '단순 문의에도 긴 대기시간이 필요하여 고객 경험이 저하됨',
        hypothesis: 'AI가 반복적인 문의를 자동 처리하면 상담사는 복잡한 문의에 집중할 수 있을 것',
      },
      solution: {
        planningApproach: '상담 데이터 분석 → 자동화 가능 영역 식별 → MVP 정의 → 단계적 확장 전략 수립',
        keyDecisions: [
          'RAG 아키텍처 채택으로 답변 정확도 확보',
          '기존 상담 시스템과의 심리스한 연동',
          '상담사 에스컬레이션 플로우 설계',
        ],
        technicalImplementation: 'OpenAI GPT-4 + Pinecone 벡터DB + Next.js + WebSocket 실시간 통신',
      },
      result: {
        quantitative: [
          { label: '상담 처리량', value: '300%', improvement: '+200%' },
          { label: '평균 응답시간', value: '30초', improvement: '-85%' },
          { label: '고객 만족도', value: '4.5/5.0', improvement: '+1.2' },
        ],
        qualitative: [
          '상담사의 번아웃 감소 및 업무 만족도 향상',
          '24시간 고객 응대 체계 구축',
          'AI-Human 협업 모델의 성공적 검증',
        ],
        learnings: [
          '기술보다 사용자 시나리오 설계가 성공의 핵심',
          'AI의 한계를 인정하고 적절한 폴백 전략이 중요',
        ],
      },
    },
    techStack: ['Next.js', 'OpenAI', 'Pinecone', 'WebSocket', 'PostgreSQL'],
    links: { demo: 'https://demo.example.com', github: 'https://github.com/example' },
  },
  {
    id: '2',
    title: '데이터 기반 커머스 개인화 플랫폼',
    subtitle: '전환율 150% 개선을 달성한 추천 시스템',
    thumbnailUrl: '/images/project-2.jpg',
    period: { start: '2023-09', end: '2024-02' },
    role: 'Product Manager & Backend Developer',
    teamSize: 6,
    psr: {
      problem: {
        background: 'E-commerce 플랫폼의 낮은 전환율과 높은 이탈률 문제가 지속되고 있었습니다.',
        businessProblem: '마케팅 비용 대비 낮은 ROI와 재구매율 정체',
        userProblem: '관심 없는 상품의 과도한 노출로 쇼핑 경험 피로도 증가',
        hypothesis: '사용자 행동 데이터 기반 개인화를 통해 관련성 높은 상품을 제안하면 전환율이 향상될 것',
      },
      solution: {
        planningApproach: '행동 데이터 수집 체계 설계 → 추천 알고리즘 PoC → A/B 테스트 → 점진적 롤아웃',
        keyDecisions: [
          '협업 필터링 + 컨텐츠 기반 하이브리드 모델 채택',
          '실시간 개인화를 위한 이벤트 스트리밍 아키텍처',
          '콜드 스타트 문제 해결을 위한 온보딩 플로우 설계',
        ],
        technicalImplementation: 'Python + Kafka + Redis + React + AWS Lambda',
      },
      result: {
        quantitative: [
          { label: '전환율', value: '4.2%', improvement: '+150%' },
          { label: '객단가', value: '58,000원', improvement: '+23%' },
          { label: '재방문율', value: '67%', improvement: '+45%' },
        ],
        qualitative: [
          '마케팅팀의 캠페인 효율성 대폭 개선',
          '개인화 경험에 대한 긍정적 사용자 피드백',
          '데이터 드리븐 의사결정 문화 정착',
        ],
        learnings: [
          '기획 단계에서의 명확한 성공 지표 정의가 중요',
          '빠른 실험과 피드백 루프가 제품 성장의 핵심',
        ],
      },
    },
    techStack: ['Python', 'Kafka', 'Redis', 'React', 'AWS'],
    links: { github: 'https://github.com/example2' },
  },
];

// 기술 스택 데이터
export const techStacks = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
  devops: ['AWS', 'Docker', 'GitHub Actions', 'Vercel'],
  planning: ['Figma', 'Notion', 'Amplitude', 'Mixpanel', 'Jira'],
  ai: ['OpenAI', 'LangChain', 'Pinecone', 'RAG'],
};
