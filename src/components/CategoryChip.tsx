
import { ReactNode } from 'react';

interface CategoryChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const CategoryChip = ({ children, active = false, onClick }: CategoryChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`category-chip ${
        active
          ? 'bg-white text-black'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      {children}
    </button>
  );
};
