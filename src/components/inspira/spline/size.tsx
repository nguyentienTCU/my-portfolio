import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SizeProps {
  className?: string;
  debounceTime?: number;
  ignoreDimensions?: (keyof DOMRectReadOnly)[] | keyof DOMRectReadOnly;
  parentSizeStyles?: React.CSSProperties;
  enableDebounceLeadingCall?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Size: React.FC<SizeProps> = ({
  className,
  debounceTime = 300,
  ignoreDimensions = [],
  parentSizeStyles = {},
  enableDebounceLeadingCall = true,
  children,
  style,
  ...rest
}) => {
  const target = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const normalizedIgnore = Array.isArray(ignoreDimensions)
    ? ignoreDimensions
    : [ignoreDimensions];

  const updateDimensions = (rect: DOMRectReadOnly) => {
    const { width, height, top, left } = rect;
    const newState = { width, height, top, left };

    const hasChange = Object.keys(newState).some(
      (key) =>
        dimensions[key as keyof typeof dimensions] !==
        newState[key as keyof typeof dimensions]
    );

    if (!hasChange) return;

    const shouldUpdate = !Object.keys(newState).every((key) =>
      normalizedIgnore.includes(key as keyof typeof dimensions)
    );

    if (shouldUpdate) {
      setDimensions(newState);
    }
  };

  useEffect(() => {
    if (!target.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        if (debounceTime > 0) {
          // Simple debounce implementation
          const timer = setTimeout(() => {
            updateDimensions(entry.contentRect);
          }, debounceTime);
          return () => clearTimeout(timer);
        } else {
          updateDimensions(entry.contentRect);
        }
      }
    });

    observer.observe(target.current);
    return () => observer.disconnect();
  }, [debounceTime]);

  const mergedStyles = {
    ...parentSizeStyles,
    ...style,
  };

  return (
    <div
      ref={target}
      style={mergedStyles}
      className={cn("w-full h-full", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Size;
