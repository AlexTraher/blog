import { MutableRefObject, useEffect, useRef, useState } from "react";

type useScrollSize = () => [number, number, MutableRefObject<any>];

const RATIO = 3.34 as const;

const START_WIDTH = 10;
const END_WIDTH = 85;

const getThresholds  = (stepCount: number) => {
  const step = 1 / stepCount;
  let i = 0 - step;
  return Array.from(Array(stepCount), () => +(i+=step).toFixed(2))
}

// credit: https://spicyyoghurt.com/tools/easing-functions
function easeInOutCubic (t: number, b: number, c: number, d: number) {
  return c * (t /= d) * t * t + b;
}

const calcNewWidth = (intersectionRatio: number) => {
  const diff = START_WIDTH - END_WIDTH;
  const multiplier = 1 - easeInOutCubic(intersectionRatio, 0, 1, 1);

  const newWidth = START_WIDTH - (diff * multiplier);

  if (newWidth % END_WIDTH < 1) {
    return END_WIDTH;
  }

  return newWidth;
}


const useScrollSize: useScrollSize = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevValRef = useRef<number>(0);
  const [width, setWidth] = useState(START_WIDTH);
  const [height, setHeight] = useState(500 / RATIO);
  

  const handler: IntersectionObserverCallback = ([ entry ]) => {

    const newWidth = calcNewWidth(entry.intersectionRatio);
    const newHeight = newWidth / RATIO;
    
    setWidth(newWidth);
    setHeight(newHeight);


    prevValRef.current = entry.intersectionRatio;
  }

  useEffect(() => {
    const { matches: prefersReducedMotion = false } = window?.matchMedia('(prefers-reduced-motion: reduce)') ?? {};
    let observer: IntersectionObserver;
    if (!prefersReducedMotion) {
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
        observer.unobserve(containerRef.current);
      }
    }
  }, [containerRef]);

  return [width, height, containerRef];
}

// const getCSSWidth = (width: number) => {
//   return `calc(100vw - ${width}px)`;
// }

// const getCSSHeight = (height: number) => {
//   return `calc(100v - ${height}px)`;
// }

const getStyle = (width: number, height: number) => {
  return {
    "--width": `calc(100vw - ${width}vw)`,
    width: 'var(--width)',
    maxWidth: '800px',
    height: `calc(var(--width) / ${RATIO})`,
    maxHeight: `${800/RATIO}px`
  }
}



const ShrinkableLogo = () => {
  const [width, height, ref] = useScrollSize();

  return (
    <>
      <section className="justify-center motion-safe:sticky top-0 z-20 p-4 w-[200px] overflow-visible m-auto hidden md:flex">
        <div
          style={getStyle(width, height)}
          className="bg-gait-software-light dark:bg-gait-software-dark bg-contain bg-no-repeat flex-shrink-0"></div>
      </section>
      <div className="h-[20vh] w-[1px] absolute top-[-10px] opacity-0" ref={ref} aria-hidden="true"></div>
    </>
  )
}

export default ShrinkableLogo;