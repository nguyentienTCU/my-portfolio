import React, { useRef, useState, useEffect } from "react";
import { Application, type SplineEventName } from "@splinetool/runtime";
import Size from "./size";

interface SplineProps {
  scene: string;
  onLoad?: (app: Application) => void;
  renderOnDemand?: boolean;
  style?: React.CSSProperties;
  onError?: (error: any) => void;
  onSplineMouseDown?: (e: any) => void;
  onSplineMouseUp?: (e: any) => void;
  onSplineMouseHover?: (e: any) => void;
  onSplineKeyDown?: (e: any) => void;
  onSplineKeyUp?: (e: any) => void;
  onSplineStart?: (e: any) => void;
  onSplineLookAt?: (e: any) => void;
  onSplineFollow?: (e: any) => void;
  onSplineScroll?: (e: any) => void;
  children?: React.ReactNode;
}

const Spline: React.FC<SplineProps> = ({
  scene,
  onLoad,
  renderOnDemand = true,
  style,
  onError,
  onSplineMouseDown,
  onSplineMouseUp,
  onSplineMouseHover,
  onSplineKeyDown,
  onSplineKeyUp,
  onSplineStart,
  onSplineLookAt,
  onSplineFollow,
  onSplineScroll,
  children,
  ...rest
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [splineApp, setSplineApp] = useState<Application | null>(null);
  const cleanUpFns = useRef<Array<(() => void) | undefined>>([]);

  const parentSizeStyles = {
    overflow: "hidden" as const,
    ...style,
  };

  const canvasStyle = {
    display: isLoading ? "none" : "block",
    width: "100%",
    height: "100%",
  };

  const eventHandler = (name: SplineEventName, handler?: (e: any) => void) => {
    if (!handler || !splineApp) return;

    const debouncedHandler = (e: any) => {
      const timer = setTimeout(() => handler(e), 50);
      return () => clearTimeout(timer);
    };

    splineApp.addEventListener(name, debouncedHandler);
    return () => splineApp?.removeEventListener(name, debouncedHandler);
  };

  useEffect(() => {
    const initSpline = async () => {
      if (!canvasRef.current) return;

      try {
        const app = new Application(canvasRef.current, {
          renderOnDemand,
        });

        await app.load(scene);
        setSplineApp(app);

        const cleanups = [
          eventHandler("mouseDown", onSplineMouseDown),
          eventHandler("mouseUp", onSplineMouseUp),
          eventHandler("mouseHover", onSplineMouseHover),
          eventHandler("keyDown", onSplineKeyDown),
          eventHandler("keyUp", onSplineKeyUp),
          eventHandler("start", onSplineStart),
          eventHandler("lookAt", onSplineLookAt),
          eventHandler("follow", onSplineFollow),
          eventHandler("scroll", onSplineScroll),
        ].filter(Boolean);

        cleanUpFns.current = cleanups;
        setIsLoading(false);
        onLoad?.(app);
      } catch (err) {
        onError?.(err);
      }
    };

    initSpline();

    return () => {
      cleanUpFns.current.forEach((fn) => fn?.());
      splineApp?.dispose();
    };
  }, [scene, renderOnDemand]);

  return (
    <Size parentSizeStyles={parentSizeStyles} debounceTime={50} {...rest}>
      <canvas ref={canvasRef} style={canvasStyle} />
      {isLoading && children}
    </Size>
  );
};

export default Spline;
