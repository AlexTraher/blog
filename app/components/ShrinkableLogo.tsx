import { MutableRefObject, useEffect, useRef, useState } from "react";

type useScrollSize = () => [number, MutableRefObject<any>];

const RATIO = 3.34 as const;

const END_WIDTH_PX = 151;
const END_HEIGHT_PX = 45;

// To help reduce flicker on first load
const INITIAL_INTERSECTION = 0.14595851639233237 as const;

const getThresholds = (stepCount: number) => {
  const step = 1 / stepCount;
  let i = 0 - step;
  return Array.from(Array(stepCount), () => +(i += step).toFixed(2))
}

// credit: https://spicyyoghurt.com/tools/easing-functions
function easeInOutCubic(t: number, b: number, c: number, d: number) {
  return c * (t /= d) * t * t + b;
}


const useScrollSize: useScrollSize = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [multiplier, setMultiplier] = useState<number>(INITIAL_INTERSECTION);
  const [prefersReduceMotion, setPrefersReduceMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window?.matchMedia("(prefers-reduced-motion: reduce)")?.matches
    } else {
      return false;
    }
  });
  const handler: IntersectionObserverCallback = ([entry]) => {
    setMultiplier(1 - easeInOutCubic(entry.intersectionRatio, 0, 1, 1));
  }

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduceMotion(event.matches);
    }
    const reduceMotionQuery = window?.matchMedia("(prefers-reduced-motion: reduce)");

    reduceMotionQuery.addEventListener("change", listener);

    return () => {
      reduceMotionQuery?.removeEventListener("change", listener);
    }
  }, [setPrefersReduceMotion]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (!prefersReduceMotion) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: getThresholds(1000),
      }

      observer = new IntersectionObserver(handler, options);

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    }

    return () => {
      if (containerRef.current) {
        observer?.unobserve(containerRef.current);
      }
    }
  }, [containerRef, prefersReduceMotion]);

  return [multiplier, containerRef];
}

const getStyle = (multiplier: number) => {
  return {
    "--multiplier": `${multiplier}`,
    "--startWidth": `90vw`,
    "--endWidth": `${END_WIDTH_PX}px`,
    "--diff": "calc(var(--startWidth) - var(--endWidth))",
    "--minus": "calc(var(--diff) * var(--multiplier))",
    "--width": `calc(var(--startWidth) - var(--minus))`,
    "--startMargin": "calc((100vw - min(var(--startWidth), 800px)) / 2)",
    "--endMargin": "0px",
    "--diffMargin": "calc(var(--startMargin) - var(--endMargin))",
    "--minusMargin": "calc(var(--diffMargin) * var(--multiplier))",
    "--margin": "calc(var(--startMargin) - var(--minusMargin))",
    width: "var(--width)",
    marginLeft: "var(--margin)",
    maxWidth: "800px",
    height: `calc(var(--width) / ${RATIO})`,
    maxHeight: `${800 / RATIO}px`,
    minWidth: `${END_WIDTH_PX}px`,
    minHeight: `${END_HEIGHT_PX}px`
  }
}

const ShrinkableLogo = () => {
  const [multiplier, ref] = useScrollSize();
  return (
    <>
      <section className="justify-start motion-safe:sticky top-0 z-20 p-4 w-[200px] overflow-visible hidden md:flex ml-[-10px]">
        <div
          style={getStyle(multiplier)}
          className="bg-gait-software-light dark:bg-gait-software-dark bg-contain bg-no-repeat flex-shrink-0 max-w-[800px]"></div>
      </section>
      <div className="h-[20vh] w-[1px] absolute top-[-10px] opacity-0" ref={ref} aria-hidden="true"></div>
    </>
  )
}

export default ShrinkableLogo;