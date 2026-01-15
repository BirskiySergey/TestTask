import * as React from "react";
import { cn } from "@/shared/lib/utils";
import type { ProgressCircleProps } from "./types";

const ProgressCircle = React.forwardRef<SVGSVGElement, ProgressCircleProps>(
  (
    {
      value,
      size = 80,
      strokeWidth = 6,
      showValue = true,
      className,
      textClassName,
    },
    ref
  ) => {
    const clampedValue = Math.min(Math.max(value, 0), 100);
    const radius = (size - strokeWidth) / 2;  
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (clampedValue / 100) * circumference;
    const center = size / 2;

    return (
      <div className={cn("relative inline-flex items-center justify-center", className)}>
        <svg
          ref={ref}
          width={size}
          height={size}
          className="transform -rotate-90 animate-spin"
          aria-label={`Progress: ${clampedValue}%`}
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-gray-700"
          />
          
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-emerald-400 transition-all duration-300"
          />
        </svg>
        
        {showValue && (
          <span className={cn("absolute text-white font-caption font-medium", textClassName)}>
            {Math.round(clampedValue)}%
          </span>
        )}
      </div>
    );
  }
);

ProgressCircle.displayName = "ProgressCircle";

export { ProgressCircle };
