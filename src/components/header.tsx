"use client"

import React from "react"
import Link from "next/link"
import { motion, Variants } from "motion/react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import GetStartedButton from "@/components/get-started-button"
import Logo from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

const navVariants: Variants = {
  initial: {
    // borderRadius: 0,
    width: "100%",
    maxWidth: "80rem",
  },
  scrolled: {
    width: "95%",
    // borderRadius: 50,
    maxWidth: "72rem",
  },
}

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-2 lg:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
      <motion.nav
        initial="initial"
        animate={isScrolled ? "scrolled" : "initial"}
        variants={navVariants}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeInOut",
          delay: 0,
        }}
        className={cn(
          "bg-transparent rounded-md flex w-full items-center justify-between py-3 px-4 transition-all duration-300",
          isScrolled && "bg-muted"
        )}
      >
        <div className="flex items-center space-x-8">
          <Logo />
          <div className="items-center space-x-3 hidden lg:flex">
            {siteConfig.headerNavItems.map((item) => (
              <Button
                variant="ghost"
                size="sm"
                asChild
                key={item.href}
                className="px-5 h-8"
              >
                <Link href={item.href} className="text-base font-medium">
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center lg:space-x-3 space-x-1">
          <ModeToggle />
          <GetStartedButton className="hidden lg:flex" />
          <MobileNav />
        </div>
      </motion.nav>
    </header>
  )
}
