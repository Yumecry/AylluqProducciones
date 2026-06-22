import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Wraps content and animate it on scroll using IntersectionObserver.
 *
 * Props:
 * - children: The elements to animate.
 * - className: Additional classes to apply to the wrapper.
 * - threshold: Intersection threshold (0 to 1). Default: 0.05
 * - delay: Delay in ms before starting animation. Default: 0
 * - duration: Duration in ms for the animation transition. Default: 800
 * - animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade'. Default: 'fade-up'
 * - once: Whether the animation should run only once or every time it enters the viewport. Default: true
 */
export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.05,
  delay = 0,
  duration = 800,
  animation = 'fade-up',
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -80px 0px', // Trigger slightly before the element enters the exact viewport boundary
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const getAnimationStyles = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12';
      case 'fade-down':
        return isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-12';
      case 'fade-left':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-12';
      case 'fade-right':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-12';
      case 'zoom-in':
        return isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95';
      case 'fade':
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getAnimationStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
