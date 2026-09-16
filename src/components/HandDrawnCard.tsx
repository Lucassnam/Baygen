import { ReactNode } from 'react';

interface HandDrawnCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function HandDrawnCard({ children, className = '', hover = false, onClick }: HandDrawnCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative bg-white p-6
        border-2 border-gray-900
        hand-drawn-border
        ${hover ? 'transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer' : ''}
        ${className}
      `}
      style={{
        clipPath: 'polygon(0% 2%, 2% 0%, 98% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 98%)',
      }}
    >
      {children}
    </div>
  );
}
