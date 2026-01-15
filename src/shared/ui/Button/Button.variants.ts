import { cva } from 'class-variance-authority';

import { ButtonSize, ButtonVariant } from './types';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 transition-colors [&_svg]:flex-shrink-0 rounded-full',
  {
    variants: {
      variant: {
        [ButtonVariant.DEFAULT]:
          'bg-black text-white hover:bg-black/85',
      },
      size: {
        [ButtonSize.MD]: 'h-12 px-4 [&_svg]:h-[16px] [&_svg]:w-[16px]',
      },
    },
    defaultVariants: {
      variant: ButtonVariant.DEFAULT,
      size: ButtonSize.MD,
    },
  },
);
