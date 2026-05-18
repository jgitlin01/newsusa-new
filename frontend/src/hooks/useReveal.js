import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal hook using IntersectionObserver.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 * Once visible, stays visible (no re-hide on scroll back up).
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default 0.15.
 * @param {string} options.rootMargin - Root margin. Default "0px 0px -60px 0px".
 */
const useReveal = ({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useReveal;
