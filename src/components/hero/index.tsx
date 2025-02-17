"use client"

import React from "react"
import Image from "next/image"

import { Icons } from "../icons"
import ContainerScroll from "./container-scroll"
import { HeroVideoModal } from "./hero-video.modal"

export default function Hero() {
  const [openHeroVideo, setOpenHeroVideo] = React.useState(false)

  const handleOpenHeroVideo = () => {
    setOpenHeroVideo(true)
  }
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            {/* <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash your business with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Transform your business with AI solutions that drive growth,
              efficiency, and innovation in today's digital landscape.
            </p> */}
            {/* -------------------------- */}
            {/* <h1 className="text-4xl font-semibold text-black dark:text-white">
              Empower your <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Business with AI
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Experience expert AI consulting that transforms data into clear,
              actionable insights—streamlining operations and elevating customer
              engagement.
            </p> */}
            {/* -------------------------- */}
            <h1 className="text-3xl lg:text-4xl font-semibold text-black dark:text-white">
              Hi, I'm Juan Camilo <br />
              <span className="text-5xl lg:text-8xl font-bold mt-1 leading-none">
                Your AI Strategy Partner
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              I help businesses harness the power of AI through strategic
              consulting, custom solutions, and expert guidance to achieve
              transformative results.
            </p>
          </>
        }
      >
        <button
          type="button"
          className="relative mx-auto rounded-2xl h-full group cursor-pointer"
          onClick={handleOpenHeroVideo}
        >
          <Image
            src={`/hero-image.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="object-cover h-full object-center rounded-2xl"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-2xl group-hover:bg-black/50 transition-all duration-300" />
          <Icons.play className="w-20 h-20 text-white fill-white transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-125" />
        </button>
      </ContainerScroll>
      <HeroVideoModal open={openHeroVideo} setOpen={setOpenHeroVideo} />
    </div>
  )
}
