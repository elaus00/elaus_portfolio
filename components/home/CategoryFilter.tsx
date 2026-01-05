'use client';

import { cn } from '@/lib/utils';
import { PostCategory } from '@/types';

// 카테고리 필터 목록
const categories: Array<{ value: PostCategory | 'all'; label: string }> = [
  { value: 'all', label: '전체' },
  { value: '기술', label: '기술' },
  { value: '기획', label: '기획' },
  { value: '프로젝트', label: '프로젝트' },
  { value: '회고', label: '회고' },
];

interface CategoryFilterProps {
  selectedCategory: PostCategory | 'all';
  onCategoryChange: (category: PostCategory | 'all') => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap',
            'border border-transparent',
            selectedCategory === category.value
              ? 'bg-foreground text-background'
              : 'bg-muted text-muted-foreground hover:text-foreground hover:border-border'
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
