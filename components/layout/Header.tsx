'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// 네비게이션 링크 목록
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="font-serif text-xl tracking-tight hover:opacity-70 transition-opacity"
        >
          Portfolio<span className="text-muted-foreground">.</span>
        </Link>

        {/* 네비게이션 링크 */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-1',
                    pathname === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  {/* 활성 상태 인디케이터 */}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* 아이콘 버튼들 */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="검색"
            >
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
