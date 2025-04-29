import { useState, useEffect } from "react";
import { Breakpoints } from "@presentation/styles/Breakpoints";

type ViewportSize = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export function useResponsive(): ViewportSize {
  const [viewport, setViewport] = useState<ViewportSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });
  const updateViewport = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setViewport({
      width,
      height,
      isMobile: width < Breakpoints.sizes.tablet,
      isTablet:
        width >= Breakpoints.sizes.tablet && width < Breakpoints.sizes.desktop,
      isDesktop: width >= Breakpoints.sizes.desktop,
    });
  };

  useEffect(() => {
    updateViewport();

    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return viewport;
}
