import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from '../../services/cn';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva('rounded', {
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary:
        'bg-white text-gray-800 border border-gray-400 hover:bg-gray-100',
      danger: 'bg-red-500 text-white hover:bg-red-600',
      caution: 'bg-yellow-400 text-black hover:bg-yellow-500',
      gradient:
        'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-700',
    },
    size: {
      sm: 'text-sm py-0 px-1',
      md: 'text-base py-1 px-2',
      lg: 'text-lg py-1 px-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export default Button;
