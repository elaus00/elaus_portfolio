'use client';

import { useState } from 'react';
import { CategoryFilter } from './CategoryFilter';
import { PostCard } from './PostCard';
import { posts } from '@/data/dummy';
import { PostCategory } from '@/types';

export function PostGrid() {
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | 'all'>('all');

  // 카테고리별 필터링
  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <section id="posts" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-2">
              Latest Posts
            </h2>
            <p className="text-muted-foreground">
              기술, 기획, 그리고 성장에 대한 이야기
            </p>
          </div>

          {/* 카테고리 필터 */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* 게시물 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* 게시물이 없을 때 */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            해당 카테고리에 게시물이 없습니다.
          </div>
        )}
      </div>
    </section>
  );
}
