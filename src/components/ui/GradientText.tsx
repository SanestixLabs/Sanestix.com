import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
}

export default function GradientText({ children }: GradientTextProps) {
  return <span className="grad">{children}</span>;
}
