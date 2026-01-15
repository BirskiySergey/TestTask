import * as React from 'react';

export type DrawerOrientation = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  width?: string | number;
  orientation?: DrawerOrientation;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}