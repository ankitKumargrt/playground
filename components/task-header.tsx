"use client";

import { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface TaskHeaderProps {
  sessionId: string;
  mailId: string;
  onMailIdChange: (mailId: string) => void;
}

export function TaskHeader({
  sessionId,
  mailId,
  onMailIdChange,
}: TaskHeaderProps) {
  const [timeRemaining, setTimeRemaining] = useState(3600);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} Minutes`;
  };

  const validateEmail = (value: string) => {
    const domain = "greenridertech.com";
    if (!value.endsWith(`@${domain}`)) {
      setError("Enter a valid E-mail");
    } else {
      setError(null);
    }
  };

  const handleBlur = (value: string) => {
    validateEmail(value);
    if (!error) {
      onMailIdChange(value);
    }
  };

  return (
    <header className='flex items-center justify-between w-full px-6 py-4 bg-background border-b border-border'>
      <div className='flex items-center space-x-6'>
        <div className='flex items-center px-4 py-2 bg-[#8C59A6] dark:bg-[#442B55] text-white rounded-lg'>
          <Bot className='w-5 h-5 mr-2' />
          <span className='font-medium'>Agent</span>
        </div>
        <div className='flex items-center px-4 py-2 bg-secondary dark:bg-[#442B55] rounded-lg'>
          <span className='text-secondary-foreground'>
            Time Remaining : {formatTime(timeRemaining)}
          </span>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='flex items-center'>
          <span className='text-muted-foreground mr-2'>Session ID</span>
          <span className='text-foreground'>{sessionId}</span>
        </div>
        <div className='flex flex-col items-start'>
          <div className='flex items-center'>
            <span className='text-muted-foreground mr-2'>Mail ID</span>
            <input
              type='email'
              value={mailId}
              onChange={(e) => onMailIdChange(e.target.value)}
              onBlur={(e) => handleBlur(e.target.value)}
              className='bg-white text-black dark:bg-secondary dark:text-foreground px-2 py-1 rounded border border-[#B799CC] dark:border-border'
            />
          </div>
          {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
