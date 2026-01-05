import { HeroSection } from '@/components/home/HeroSection';
import { PostGrid } from '@/components/home/PostGrid';

export default function HomePage() {
  return (
    <>
      {/* 히어로 섹션 */}
      <HeroSection />

      {/* 게시물 그리드 */}
      <PostGrid />
    </>
  );
}
