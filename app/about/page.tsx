import { Metadata } from 'next';
import { ProfileSection } from '@/components/about/ProfileSection';
import { CareerTimeline } from '@/components/about/CareerTimeline';
import { ProjectSection } from '@/components/about/ProjectSection';
import { TechStack } from '@/components/about/TechStack';

// 페이지 메타데이터
export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: '기획과 개발을 모두 할 수 있는 풀스택 크리에이터입니다.',
};

export default function AboutPage() {
  return (
    <>
      {/* 프로필 섹션 */}
      <ProfileSection />

      {/* 경력 타임라인 */}
      <CareerTimeline />

      {/* 프로젝트 섹션 (PSR 구조) */}
      <ProjectSection />

      {/* 기술 스택 */}
      <TechStack />
    </>
  );
}
