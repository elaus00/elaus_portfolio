import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// 소셜 링크 목록
const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@example.com', icon: Mail, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 섹션 */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-serif text-xl tracking-tight"
            >
              Portfolio<span className="text-muted-foreground">.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              기획과 개발을 모두 할 수 있는<br />
              풀스택 크리에이터입니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Connect</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:bg-muted hover:border-foreground/20 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        {/* 저작권 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
