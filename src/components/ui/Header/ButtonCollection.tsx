'use client';
import { cn } from '@/lib/utils';
import { GButton } from '../Button/GButton';

const underlineSlide = `
relative after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-accent
after:transition-all after:duration-300
group-hover:after:w-full
`;
const buttons = [
  {
    label: 'Home',
    className: underlineSlide,
  },
  {
    label: 'About',
    className: underlineSlide,
  },
  {
    label: 'Projects',
    className: underlineSlide,
  },
  {
    label: 'Contact',
    className: underlineSlide,
    onClick: () => alert('hello'),
  },
];

export default function ButtonCollection() {
  return (
    <nav className="flex gap-2">
      {buttons.map(({ label, onClick, className }) => (
        <GButton
          key={label}
          size="sm"
          variant="ghost"
          onClick={onClick}
          className="group"
        >
          <span className={cn(className)}>{label}</span>
        </GButton>
      ))}
    </nav>
  );
}
