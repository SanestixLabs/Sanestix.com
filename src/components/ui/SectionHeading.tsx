import type { ReactNode } from 'react';

interface SectionHeadingProps {
  tag: string;
  tagIcon?: ReactNode;
  title: ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  tag,
  tagIcon,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="section-tag">
        {tagIcon}
        {tag}
      </div>
      <h2 className="font-extrabold text-[clamp(2.2rem,3.5vw,3.2rem)] tracking-[-0.04em] leading-[1.05] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted max-w-[520px] mx-auto leading-[1.7] text-[0.95rem]">
          {description}
        </p>
      )}
    </div>
  );
}
