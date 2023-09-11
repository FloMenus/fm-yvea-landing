"use client";
import { useEffect, useMemo, useState, RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  let observer: any = null;

  if (typeof window !== "undefined")
    observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIntersecting(entry.isIntersecting)
        ),
      [ref]
    );

  useEffect(() => {
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
