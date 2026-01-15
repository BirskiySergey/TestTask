import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/shared/lib';

import { buttonVariants } from './Button.variants.ts';
import type { ButtonProps } from './types';
import { ButtonVariant } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = ButtonVariant.DEFAULT,
      size,
      prefixElement,
      suffixElement,
      fullWidth = false,
      asChild = false,
      disabled,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={cn(buttonVariants({ variant, size }), fullWidth && 'w-full', className)}
        {...props}
      >
        {prefixElement}
        {children}
        {suffixElement}
      </Comp>
    );
  },
);
