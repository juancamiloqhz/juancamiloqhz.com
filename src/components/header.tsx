"use client"

import React from "react"
import Link from "next/link"
import { motion, Variants } from "motion/react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
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
          <Link href="/" className="flex items-center space-x-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="/face_round.png" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <span className="text-base font-bold">Juan Camilo QHz</span>
          </Link>
          <div className="flex items-center space-x-3">
            {navItems.map((item) => (
              <Button
                variant="ghost"
                size="sm"
                asChild
                key={item.href}
                className="px-5 h-8"
              >
                <Link href={item.href} className="text-base font-medium">
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <ModeToggle />
          <Button variant="default" size="sm" asChild animation="elevate">
            <Link href="/contact">Book a Free AI Strategy Call</Link>
          </Button>
        </div>
      </motion.nav>
    </header>
  )
}
