'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from '@/types';
import { cn } from '@/lib/utils';

interface ChatbotDialogProps {
  isOpen: boolean;
}

// 초기 환영 메시지
const welcomeMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: '안녕하세요! 저에 대해 궁금한 것이 있으시면 편하게 질문해주세요. 경력, 프로젝트, 기술 스택 등 무엇이든 답변해드릴게요.',
  timestamp: new Date(),
};

// 예시 질문들
const suggestedQuestions = [
  '어떤 프로젝트를 진행했나요?',
  '기획과 개발 중 어떤 게 더 좋아요?',
  '기술 스택이 무엇인가요?',
];

export function ChatbotDialog({ isOpen }: ChatbotDialogProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 새 메시지가 추가되면 스크롤
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // 메시지 전송 핸들러
  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // 사용자 메시지 추가
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // TODO: 실제 RAG API 호출로 대체
    // 임시 응답 (데모용)
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getDemoResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  // 데모용 응답 생성
  const getDemoResponse = (question: string): string => {
    if (question.includes('프로젝트')) {
      return 'AI 기반 고객 상담 자동화 시스템과 데이터 기반 커머스 개인화 플랫폼을 진행했습니다. 두 프로젝트 모두 기획부터 개발까지 전 과정을 담당하며, 비즈니스 문제를 기술로 해결하는 경험을 쌓았습니다.';
    }
    if (question.includes('기획') || question.includes('개발')) {
      return '기획과 개발 모두 좋아합니다! 기획은 "왜 만드는가"를, 개발은 "어떻게 만드는가"를 고민하게 해주는데, 이 두 관점을 함께 가지고 있으면 더 좋은 제품을 만들 수 있다고 생각해요.';
    }
    if (question.includes('기술') || question.includes('스택')) {
      return 'Frontend는 React, Next.js, TypeScript를 주로 사용하고, Backend는 Node.js, Python, PostgreSQL을 다룹니다. 기획 도구로는 Figma, Notion, Amplitude를 활용합니다.';
    }
    return '좋은 질문이에요! 더 자세한 내용이 궁금하시다면 About 페이지를 확인해주시거나, 다른 질문을 해주세요.';
  };

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)]',
        'bg-background border border-border rounded-2xl shadow-2xl',
        'flex flex-col overflow-hidden',
        'animate-in slide-in-from-bottom-4 fade-in duration-300'
      )}
      style={{ height: '500px', maxHeight: 'calc(100vh - 140px)' }}
    >
      {/* 헤더 */}
      <div className="p-4 border-b border-border/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-background" />
        </div>
        <div>
          <h3 className="font-medium text-sm">AI Assistant</h3>
          <p className="text-xs text-muted-foreground">저에 대해 물어보세요</p>
        </div>
      </div>

      {/* 메시지 영역 */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' && 'flex-row-reverse'
              )}
            >
              {/* 아바타 */}
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                  message.role === 'assistant'
                    ? 'bg-muted'
                    : 'bg-foreground'
                )}
              >
                {message.role === 'assistant' ? (
                  <Bot className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <User className="w-4 h-4 text-background" />
                )}
              </div>

              {/* 메시지 버블 */}
              <div
                className={cn(
                  'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                  message.role === 'assistant'
                    ? 'bg-muted text-foreground rounded-tl-sm'
                    : 'bg-foreground text-background rounded-tr-sm'
                )}
              >
                {message.content}
              </div>
            </div>
          ))}

          {/* 로딩 인디케이터 */}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Bot className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce animation-delay-100" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce animation-delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* 추천 질문 */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => handleSend(question)}
                className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors text-muted-foreground"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 입력 영역 */}
      <div className="p-4 border-t border-border/50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
          className="flex items-center gap-2"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="메시지를 입력하세요..."
            className="flex-1 rounded-full border-border/50 focus-visible:ring-1"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full"
            disabled={!inputValue.trim() || isLoading}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
