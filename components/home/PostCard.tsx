import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Post } from '@/types';
import { Calendar, Clock } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

// 날짜 포맷 함수
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// 카테고리별 색상 매핑
const categoryColors: Record<string, string> = {
  '기술': 'bg-neutral-900 text-white hover:bg-neutral-800',
  '기획': 'bg-neutral-600 text-white hover:bg-neutral-500',
  '프로젝트': 'bg-neutral-400 text-white hover:bg-neutral-300',
  '회고': 'bg-neutral-200 text-neutral-800 hover:bg-neutral-100',
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.slug}`} className="group block">
      <Card className="overflow-hidden border-border/50 bg-card hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
        {/* 썸네일 영역 */}
        <div className="relative aspect-[16/10] bg-muted overflow-hidden">
          {/* 플레이스홀더 배경 (이미지가 없을 때) */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />

          {/* 호버 오버레이 */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />

          {/* 카테고리 뱃지 */}
          <Badge
            className={cn(
              'absolute top-4 left-4 text-xs font-medium',
              categoryColors[post.category] || 'bg-neutral-500 text-white'
            )}
          >
            {post.category}
          </Badge>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-5 space-y-3">
          {/* 제목 */}
          <h3 className="font-medium text-lg leading-snug group-hover:text-foreground/80 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* 설명 */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {post.description}
          </p>

          {/* 태그 */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs text-muted-foreground bg-muted rounded-md"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-muted-foreground">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          {/* 메타 정보 */}
          <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime}분
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

// cn 유틸리티 함수 임포트
import { cn } from '@/lib/utils';
