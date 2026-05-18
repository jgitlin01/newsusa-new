import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up hook.
 * Counts from 0 to `target` over `duration` ms using requestAnimationFrame
 * with an ease-out-quart curve. Triggers when element enters viewport.
 *
 * @param {number} target - The number to count to.
 * @param {Object} options
 * @param {number} options.duration - Animation duration in ms. Default 1800.
 * @param {number} options.decimals - Decimal places. Default 0.
 * @param {string} options.prefix - Prefix string (e.g. "$"). Default "".
 * @param {string} options.suffix - Suffix string (e.g. "K+"). Default "".
 * @returns {[React.RefObject, string]} - Ref and the formatted display value.
 */
const useCountUp = (target, { duration = 1800, decimals = 0, prefix = "", suffix = "" } = {}) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show final value immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(`${prefix}${target.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          observer.unobserve(el);

          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out-quart
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * target;
            const formatted = current
              .toFixed(decimals)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            setDisplay(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [target, duration, decimals, prefix, suffix]);

  return [ref, display];
};

export default useCountUp;
