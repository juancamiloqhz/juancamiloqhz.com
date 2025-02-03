import React from "react"

import Hero from "@/components/hero"
// import CardSpotlightDemo from "@/components/sandbox/card-spotlight"
import HeroScroll from "@/components/hero/index"
import { CardDemo } from "@/components/sandbox/card-demo"

export default function HomePage() {
  return (
    <>
      <HeroScroll />
      <Hero />
      <CardDemo />
      {/* <CardSpotlightDemo /> */}
    </>
  )
}
