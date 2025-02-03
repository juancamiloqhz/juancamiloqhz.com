"use client"

import React from "react"
import { useScroll, useTransform } from "motion/react"

import { HeroCard } from "./hero-card"
import { HeroHeader } from "./hero-header"

export default function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  function scaleDimensions() {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      // className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      className="h-[60rem] md:h-[135vh] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <HeroHeader translate={translate} titleComponent={titleComponent} />
        <HeroCard rotate={rotate} translate={translate} scale={scale}>
          {children}
        </HeroCard>
      </div>
    </div>
  )
}
