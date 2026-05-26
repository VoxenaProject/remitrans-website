"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ value, suffix = "", duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString("fr-BE")}
      {suffix}
    </span>
  )
}
