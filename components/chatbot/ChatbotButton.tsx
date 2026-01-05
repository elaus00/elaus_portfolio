'use client';

import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatbotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatbotButton({ isOpen, onClick }: ChatbotButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg',
        'bg-foreground text-background hover:bg-foreground/90',
        'transition-all duration-300 ease-out',
        isOpen && 'rotate-90'
      )}
      aria-label={isOpen ? '챗봇 닫기' : '챗봇 열기'}
    >
      {isOpen ? (
        <X className="w-5 h-5" />
      ) : (
        <MessageCircle className="w-5 h-5" />
      )}
    </Button>
  );
}
