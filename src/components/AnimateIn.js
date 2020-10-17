import React from "react"
import { useInView } from "react-intersection-observer"

const AnimateIn = ({ 
  threshold = 0.30, // Percentage of the element before becoming visible
  triggerOnce = true, 
  distance = 40, // Transition distance in px 
  duration = 500,
  className,
  translateX = "0",
  style={},
  easing = 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce})

  return (
    <div
      className={`${className || ''}`}
      ref={ref}
      style={{
        // adjust these as desired
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
        opacity: inView ? 1 : 0,
        transform: `translateX(${translateX}%) translateY(${inView ? 0 : distance}px)`,
        ...style
      }}
      {...remainingProps}
    />
  )
}

export default AnimateIn