import { twMerge } from 'tailwind-merge';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={twMerge(
        'mx-auto w-full max-w-screen-xl px-5 md:px-10',
        className,
      )}
    >
      {children}
    </div>
  );
}
