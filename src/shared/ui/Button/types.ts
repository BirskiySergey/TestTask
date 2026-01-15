import React from 'react';

export const ButtonVariant = {
  DEFAULT: 'default',
} as const;

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const ButtonSize = {
  MD: 'md',
} as const;

export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  prefixElement?: React.ReactNode;
  suffixElement?: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}
