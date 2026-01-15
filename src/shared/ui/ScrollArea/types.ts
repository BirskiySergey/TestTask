import * as React from 'react';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  children?: React.ReactNode;
  withHorizontal?: boolean;
  rootClassName?: string;
  viewportClassName?: string;
}

export interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export const NativeScrollAreaTypes = {
  DEFAULT: 'default',
  MAIN: 'main',
  TABLE: 'table',
} as const;

export type NativeScrollAreaTypes =
  (typeof NativeScrollAreaTypes)[keyof typeof NativeScrollAreaTypes];

export interface NativeScrollState {
  hasVerticalScroll: boolean;
  hasHorizontalScroll: boolean;
}

export interface NativeScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: NativeScrollAreaTypes;
  orientation?: 'vertical' | 'horizontal' | 'both';
  onScrollStateChange?: (state: NativeScrollState) => void;
}
