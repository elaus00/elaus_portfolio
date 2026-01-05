'use client';

import { useState } from 'react';
import { ChatbotButton } from './ChatbotButton';
import { ChatbotDialog } from './ChatbotDialog';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotDialog isOpen={isOpen} />
      <ChatbotButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
}
