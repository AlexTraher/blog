import { MutableRefObject, useEffect, useRef, useState } from "react";

type useScrollSize = () => [number, number, MutableRefObject<any>];

const RATIO = 3.34;

const START_WIDTH = 750;
const END_WIDTH = 150;

const getThresholds  = (stepCount: number) => {
  const step = 1 / stepCount;
  let i = 0 - step;
  return Array.from(Array(100), () => +(i+=step).toFixed(2))
}

// credit: https://spicyyoghurt.com/tools/easing-functions
function easeInOutCubic (t: number, b: number, c: number, d: number) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

const calcNewWidth = (intersectionRatio: number) => {
  const diff = START_WIDTH - END_WIDTH;
  const multiplier = 1 - easeInOutCubic(intersectionRatio, 0, 1, 1);
  debugger;
  return START_WIDTH - (diff * multiplier);
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
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: getThresholds(100),
    }

    const observer = new IntersectionObserver(handler, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    }
  }, [containerRef]);

  return [width, height, containerRef];
}



const ShrinkableLogo = () => {
  const [width, height, ref] = useScrollSize();

  return (
    <>
      <section className=" justify-center sticky top-0 z-20 p-4 w-[200px] overflow-visible m-auto hidden sm:flex">
        <div style={{ width: `${width}px`, height: `${height}px` }} className="bg-gait-software-light dark:bg-gait-software-dark bg-contain bg-no-repeat flex-shrink-0"></div>
      </section>
      <div className="h-[20vh] w-[1px] absolute top-0 opacity-0" ref={ref}></div>
    </>
  )
}

export default ShrinkableLogo;