"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  threshold?: number;
  once?: boolean;
  className?: string;
  inViewClass?: string;
};

const InView = ({
  children,
  threshold = 0.3,
  once = true,
  className = "opacity-0 translate-y-8 transition duration-700",
  inViewClass = "opacity-100 translate-y-0",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`${className} ${isIntersecting ? inViewClass : ""}`.trim()}
    >
      {children}
    </div>
  );
};

export default InView;
